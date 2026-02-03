import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; 

interface Task {
  id: number;
  title: string;
  completed: boolean;
  created_at: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const API_URL = 'http://localhost:3000/tasks';

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await axios.get<Task[]>(API_URL);
      setTasks(response.data);
      setError(null);
    } catch (err) {
      setError('Error al cargar las tareas. ¿Está el backend corriendo?');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (!newTaskTitle.trim()) return;

    try {
      setLoading(true);
      await axios.post(API_URL, { title: newTaskTitle });
      setNewTaskTitle('');
      fetchTasks();
    } catch (err) {
      setError('Error al agregar la tarea');
    } finally {
      setLoading(false);
    }
  };

  const toggleComplete = async (id: number, completed: boolean) => {
    try {
      await axios.put(`${API_URL}/${id}`, { completed: !completed });
      fetchTasks();
    } catch (err) {
      setError('Error al actualizar la tarea');
    }
  };

  const deleteTask = async (id: number) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchTasks();
    } catch (err) {
      setError('Error al eliminar la tarea');
    }
  };

  return (
    <div className="App" style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Lista de Tareas (To-Do)</h1>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {loading && <p>Cargando...</p>}

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Escribe una nueva tarea..."
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
          style={{ width: '70%', padding: '10px', marginRight: '10px' }}
        />
        <button onClick={addTask} disabled={loading}>
          Agregar
        </button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px',
              borderBottom: '1px solid #ddd',
              textDecoration: task.completed ? 'line-through' : 'none',
              color: task.completed ? '#888' : '#000',
            }}
          >
            <span>{task.title}</span>
            <div>
              <button
                onClick={() => toggleComplete(task.id, task.completed)}
                style={{ marginRight: '10px' }}
              >
                {task.completed ? 'Desmarcar' : 'Completar'}
              </button>
              <button onClick={() => deleteTask(task.id)} style={{ color: 'red' }}>
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>

      {tasks.length === 0 && !loading && <p>No hay tareas aún. ¡Agrega una!</p>}
    </div>
  );
}

export default App;