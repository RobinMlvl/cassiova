import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/libsql';
config({ path: '.env' }); // or .env.local
export const db = drizzle({ connection: {
  url: 'libsql://waitinglist-robinmlvm.turso.io',
  authToken: 'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJnaWQiOiIyYmNkMThiNS0wZmM1LTQwNDUtYjcxMS01MGFjMjBkNzUxOGUiLCJpYXQiOjE3MzA1NDM3ODd9.CtFgSWJTBDprIOlthiJXqG7BdMMeMofhzSRU7jr9EMpJV4qrcoliQ-GloknjYXofCS9OlA65cHkRktJg-BcsAw',
}});