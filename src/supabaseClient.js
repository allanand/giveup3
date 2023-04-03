import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ijxddosmmvfqkuijlxdr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqeGRkb3NtbXZmcWt1aWpseGRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc0NDQzNTksImV4cCI6MTk5MzAyMDM1OX0.tJPbWMwvU-GL-o47jbgsf0nS3lHLiTbzWgyiUuTAiSE'
export const supabase = createClient(supabaseUrl, supabaseKey)