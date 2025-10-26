import { useDatabase } from '@/hooks/useDatabase';
import { router, useFocusEffect } from 'expo-router';
import React, { useCallback, useEffect, useState } from 'react';
import {
  Alert,
  FlatList,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default function TaskListScreen() {
  const { todos, userName, deleteTodo, toggleTodo, updateTodo, isLoading, refreshData } = useDatabase();
  const [searchText, setSearchText] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const [filteredTodos, setFilteredTodos] = useState(todos);
  
  useEffect(() => {
    setFilteredTodos(todos.filter(todo =>
      todo.text.toLowerCase().includes(searchText.toLowerCase())
    ));
  }, [searchText, todos]);

  // Refresh data when screen comes into focus
  useFocusEffect(
    useCallback(() => {
      refreshData();
    }, [refreshData])
  );

  const handleDelete = (id: string, text: string) => {
    Alert.alert(
      'Delete Task',
      `Are you sure you want to delete "${text}"?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: () => deleteTodo(id) },
      ]
    );
  };

  const handleEdit = (id: string, text: string) => {
    setEditingId(id);
    setEditingText(text);
  };

  const handleSaveEdit = (id: string) => {
    if (editingText.trim()) {
      updateTodo(id, editingText.trim());
    }
    setEditingId(null);
    setEditingText('');
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditingText('');
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await refreshData();
    setRefreshing(false);
  };

  const renderTodoItem = ({ item }: { item: any }) => (
    <View style={styles.todoItem}>
      <TouchableOpacity
        style={[styles.checkbox, item.completed && styles.checkboxCompleted]}
        onPress={() => toggleTodo(item.id)}
      >
        {item.completed && <Text style={styles.checkmark}>✓</Text>}
      </TouchableOpacity>
      
      {editingId === item.id ? (
        <View style={styles.editContainer}>
          <TextInput
            style={styles.editInput}
            value={editingText}
            onChangeText={setEditingText}
            autoFocus
            multiline
          />
          <View style={styles.editActions}>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => handleSaveEdit(item.id)}
            >
              <Text style={styles.editIcon}>☘️</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={handleCancelEdit}
            >
              <Text style={styles.deleteIcon}>✖️</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <>
          <Text style={[styles.todoText, item.completed && styles.todoTextCompleted]}>
            {item.text}
          </Text>
          
          <View style={styles.todoActions}>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDelete(item.id, item.text)}
            >
              <Text style={styles.deleteIcon}>✖️</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => handleEdit(item.id, item.text)}
            >
              <Text style={styles.editIcon}>✏️</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        
        <View style={styles.profileSection}>
          <View style={styles.profileImage}>
            <Text style={styles.profileEmoji}>👩</Text>
          </View>
          <View style={styles.greeting}>
            <Text style={styles.greetingText}>Hi {userName}</Text>
            <Text style={styles.subGreeting}>Have a great day ahead</Text>
          </View>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#999"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* Todo List */}
      <FlatList
        data={filteredTodos}
        renderItem={renderTodoItem}
        keyExtractor={(item) => item.id}
        style={styles.todoList}
        contentContainerStyle={styles.todoListContent}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#06B6D4']}
            tintColor="#06B6D4"
          />
        }
      />

      {/* Floating Action Button */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => router.push('/add-task')}
      >
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    color: '#666',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
  },
  backButton: {
    fontSize: 24,
    color: '#000',
    marginRight: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  profileEmoji: {
    fontSize: 24,
  },
  greeting: {
    flex: 1,
  },
  greetingText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  subGreeting: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginHorizontal: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchIcon: {
    fontSize: 16,
    color: '#999',
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  todoList: {
    flex: 1,
    paddingHorizontal: 20,
  },
  todoListContent: {
    paddingBottom: 100,
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#10B981',
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxCompleted: {
    backgroundColor: '#10B981',
  },
  checkmark: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  todoText: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  todoTextCompleted: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  todoActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteButton: {
    marginRight: 8,
  },
  editButton: {
    padding: 4,
  },
  deleteIcon: {
    fontSize: 16,
    color: '#EF4444',
  },
  editIcon: {
    fontSize: 16,
  },
  editContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  editInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#06B6D4',
  },
  editActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: '#10B981',
    borderRadius: 6,
    padding: 6,
    marginRight: 4,
  },
  saveIcon: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#EF4444',
    borderRadius: 6,
    padding: 6,
  },
  cancelIcon: {
    color: '#fff',
    fontSize: 14,
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#06B6D4',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  fabIcon: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
