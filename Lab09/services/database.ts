import { type SQLiteDatabase } from 'expo-sqlite';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  created_at: string;
}

// Database migration function
export async function migrateDbIfNeeded(db: SQLiteDatabase) {
  const DATABASE_VERSION = 2;

  const result = await db.getFirstAsync<{ user_version: number }>(
    "PRAGMA user_version"
  );
  let user_version = result?.user_version ?? 0;
  
  if (user_version >= DATABASE_VERSION) return;

  await db.execAsync(`PRAGMA journal_mode = wal;`);

  if (user_version === 0) {
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS todos (
        id TEXT PRIMARY KEY,
        text TEXT NOT NULL,
        completed INTEGER NOT NULL DEFAULT 0,
        created_at TEXT NOT NULL
      );
    `);

    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS settings (
        key TEXT PRIMARY KEY,
        value TEXT NOT NULL
      );
    `);

    // Insert sample data only if table is empty
    const count = await db.getFirstAsync('SELECT COUNT(*) as count FROM todos');
    if ((count as any).count === 0) {
      const sampleTodos = [
        ['1', 'To check email', 1, new Date().toISOString()],
        ['2', 'UI task web page', 1, new Date().toISOString()],
        ['3', 'Learn javascript basic', 1, new Date().toISOString()],
        ['4', 'Learn HTML Advance', 1, new Date().toISOString()],
        ['5', 'Medical App UI', 1, new Date().toISOString()],
        ['6', 'Learn Java', 1, new Date().toISOString()],
      ];

      for (const [id, text, completed, created_at] of sampleTodos) {
        await db.runAsync(
          'INSERT INTO todos (id, text, completed, created_at) VALUES (?, ?, ?, ?)',
          [id, text, completed, created_at]
        );
      }
    }

    user_version = 1;
  }

  if (user_version === 1) {
    // Migration version 2: Ensure sample data exists if table is empty
    const count = await db.getFirstAsync('SELECT COUNT(*) as count FROM todos');
    if ((count as any).count === 0) {
      const sampleTodos = [
        ['1', 'To check email', 1, new Date().toISOString()],
        ['2', 'UI task web page', 1, new Date().toISOString()],
        ['3', 'Learn javascript basic', 1, new Date().toISOString()],
        ['4', 'Learn HTML Advance', 1, new Date().toISOString()],
        ['5', 'Medical App UI', 1, new Date().toISOString()],
        ['6', 'Learn Java', 1, new Date().toISOString()],
      ];

      for (const [id, text, completed, created_at] of sampleTodos) {
        await db.runAsync(
          'INSERT OR IGNORE INTO todos (id, text, completed, created_at) VALUES (?, ?, ?, ?)',
          [id, text, completed, created_at]
        );
      }
    }
    user_version = 2;
  }

  await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
}

// Database helper functions
export async function getAllTodos(db: SQLiteDatabase): Promise<Todo[]> {
  const result = await db.getAllAsync('SELECT * FROM todos ORDER BY created_at DESC');
  return result.map((row: any) => ({
    id: row.id,
    text: row.text,
    completed: Boolean(row.completed),
    created_at: row.created_at,
  }));
}

export async function addTodo(db: SQLiteDatabase, text: string): Promise<Todo> {
  const id = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  const created_at = new Date().toISOString();

  await db.runAsync(
    'INSERT INTO todos (id, text, completed, created_at) VALUES (?, ?, ?, ?)',
    [id, text, 0, created_at]
  );

  return {
    id,
    text,
    completed: false,
    created_at,
  };
}

export async function updateTodo(db: SQLiteDatabase, id: string, text: string): Promise<void> {
  await db.runAsync(
    'UPDATE todos SET text = ? WHERE id = ?',
    [text, id]
  );
}

export async function deleteTodo(db: SQLiteDatabase, id: string): Promise<void> {
  await db.runAsync('DELETE FROM todos WHERE id = ?', [id]);
}

export async function toggleTodo(db: SQLiteDatabase, id: string): Promise<void> {
  await db.runAsync(
    'UPDATE todos SET completed = NOT completed WHERE id = ?',
    [id]
  );
}

export async function getUserName(db: SQLiteDatabase): Promise<string> {
  const result = await db.getFirstAsync('SELECT value FROM settings WHERE key = ?', ['userName']);
  return result ? (result as any).value : '';
}

export async function setUserName(db: SQLiteDatabase, name: string): Promise<void> {
  await db.runAsync(
    'INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)',
    ['userName', name]
  );
}
