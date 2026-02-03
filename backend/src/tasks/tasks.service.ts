import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable()
export class TasksService {
  constructor(private readonly supabaseService: SupabaseService) {}

  async findAll() {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('tasks')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw new Error(`Error al obtener tareas: ${error.message}`);
    }
    return data || [];
  }

  async create(title: string) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('tasks')
      .insert({ title, completed: false })
      .select()
      .single();

    if (error) {
      throw new Error(`Error al crear tarea: ${error.message}`);
    }
    return data;
  }

  async update(id: number, updates: { title?: string; completed?: boolean }) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('tasks')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      throw new Error(`Error al actualizar tarea: ${error.message}`);
    }
    return data;
  }

  async delete(id: number) {
    const { error } = await this.supabaseService
      .getClient()
      .from('tasks')
      .delete()
      .eq('id', id);

    if (error) {
      throw new Error(`Error al eliminar tarea: ${error.message}`);
    }
  }
}