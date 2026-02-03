import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  private readonly client: SupabaseClient;

  constructor(private configService: ConfigService) {
    const supabaseUrl = this.configService.get<string>('SUPABASE_URL');
    const supabaseKey = this.configService.get<string>('SUPABASE_ANON_KEY');

    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Faltan variables de entorno: SUPABASE_URL o SUPABASE_ANON_KEY');
    }

    this.client = createClient(supabaseUrl, supabaseKey);
  }

  getClient(): SupabaseClient {
    return this.client;
  }

  async testConnection(): Promise<string> {
    try {
      const { count, error } = await this.client
        .from('tasks')
        .select('*', { count: 'exact', head: true });

      if (error) throw error;
      return `Conexión OK! Hay ${count || 0} tareas en la tabla.`;
    } catch (err) {
      return `Error de conexión: ${err.message}`;
    }
  }
}