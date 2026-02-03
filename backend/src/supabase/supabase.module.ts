import { Module } from '@nestjs/common';
import { SupabaseService } from './supabase.service';

@Module({
  providers: [SupabaseService],
  exports: [SupabaseService], //importante: permite que otros módulos lo importen
})
export class SupabaseModule {}