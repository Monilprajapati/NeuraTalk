import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const { OPENAI_API_KEY } = import.meta.env;
import {dotenv} from 'dotenv';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Define your environment variables for use in your code
    'process.env': {
      OPENAI_API_KEY: JSON.stringify(process.env.OPENAI_API_KEY),
    },
  }
})
