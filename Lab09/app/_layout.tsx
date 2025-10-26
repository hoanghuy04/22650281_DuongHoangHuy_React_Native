import { migrateDbIfNeeded } from '@/services/database';
import { Stack } from 'expo-router';
import { SQLiteProvider } from 'expo-sqlite';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <SQLiteProvider databaseName="todo.db" onInit={migrateDbIfNeeded}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="task-list" />
        <Stack.Screen name="add-task" />
      </Stack>
      <StatusBar style="auto" />
    </SQLiteProvider>
  );
}