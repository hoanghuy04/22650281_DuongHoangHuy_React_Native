import {
  addTodo,
  deleteTodo,
  getAllTodos,
  getUserName,
  setUserName,
  Todo,
  toggleTodo,
  updateTodo
} from '@/services/database';
import { useSQLiteContext } from 'expo-sqlite';
import { useCallback, useEffect, useState } from 'react';

export const useDatabase = () => {
  const db = useSQLiteContext();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [userName, setUserNameState] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  const refetch = useCallback(async () => {
    try {
      const [todosData, userNameData] = await Promise.all([
        getAllTodos(db),
        getUserName(db),
      ]);
      setTodos(todosData);
      setUserNameState(userNameData);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  }, [db]);

  useEffect(() => {
    const loadData = async () => {
      try {
        await refetch();
      } catch (error) {
        console.error('Error initializing data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, [refetch]);

  const addTodoHandler = async (text: string) => {
    try {
      const newTodo = await addTodo(db, text);
      setTodos(prev => [newTodo, ...prev]);
    } catch (error) {
      console.error('Error adding todo:', error);
      throw error;
    }
  };

  const updateTodoHandler = async (id: string, text: string) => {
    try {
      await updateTodo(db, id, text);
      setTodos(prev => prev.map(todo => 
        todo.id === id ? { ...todo, text } : todo
      ));
    } catch (error) {
      console.error('Error updating todo:', error);
      throw error;
    }
  };

  const deleteTodoHandler = async (id: string) => {
    try {
      await deleteTodo(db, id);
      setTodos(prev => prev.filter(todo => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
      throw error;
    }
  };

  const toggleTodoHandler = async (id: string) => {
    try {
      await toggleTodo(db, id);
      setTodos(prev => prev.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ));
    } catch (error) {
      console.error('Error toggling todo:', error);
      throw error;
    }
  };

  const setUserNameHandler = async (name: string) => {
    try {
      await setUserName(db, name);
      setUserNameState(name);
    } catch (error) {
      console.error('Error setting user name:', error);
      throw error;
    }
  };

  return {
    todos,
    userName,
    isLoading,
    addTodo: addTodoHandler,
    updateTodo: updateTodoHandler,
    deleteTodo: deleteTodoHandler,
    toggleTodo: toggleTodoHandler,
    setUserName: setUserNameHandler,
    refreshData: refetch,
  };
};
