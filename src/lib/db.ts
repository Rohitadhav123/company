import { neon } from "@neondatabase/serverless";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  console.warn("DATABASE_URL is not defined in environment variables.");
}

export const sql = neon(databaseUrl || "");

export async function initDb() {
  if (!databaseUrl) {
    throw new Error("DATABASE_URL is missing");
  }
  await sql`
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      company VARCHAR(255),
      service VARCHAR(255),
      budget VARCHAR(100),
      description TEXT NOT NULL,
      created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
    );
  `;
}
