import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment.development';

export const supabase = createClient(
  environment.supabaseUrl, 
  environment.supabaseKey
)

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
}
