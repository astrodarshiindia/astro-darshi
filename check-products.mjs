import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envLocal = fs.readFileSync(path.resolve(__dirname, '.env.local'), 'utf8');
const envVars = Object.fromEntries(
    envLocal.split('\n')
        .filter(line => line.includes('='))
        .map(line => {
            const index = line.indexOf('=');
            return [line.substring(0, index).trim(), line.substring(index + 1).trim()];
        })
);

const supabaseUrl = envVars.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = envVars.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkProducts() {
    console.log('Fetching products from:', supabaseUrl);
    const { data, error } = await supabase
        .from('astro_products')
        .select('*');

    if (error) {
        console.error('Error fetching products:', error);
        return;
    }

    console.log('Products found:', data.length);
    console.table(data);
}

checkProducts();
