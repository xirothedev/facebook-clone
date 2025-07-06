import {
  SupabaseClientOptions
} from "@supabase/supabase-js";


export interface SupabaseConfig {
  url: string;
  key: string;
  options?: SupabaseClientOptions<any>;
}

export interface SupabaseStorageResponse {
  data: { path: string } | null;
  error: any;
}