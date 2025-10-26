import { useDatabase } from '@/hooks/useDatabase';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default function AddTaskScreen() {
  const [taskText, setTaskText] = useState('');
  const { addTodo, userName } = useDatabase();

  const handleFinish = async () => {
    if (taskText.trim()) {
      try {
        await addTodo(taskText.trim());
        router.back();
      } catch (error) {
        console.error('Error adding todo:', error);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileSection}>
          <View style={styles.profileImage}>
            <Text style={styles.profileEmoji}>👩</Text>
          </View>
          <View style={styles.greeting}>
            <Text style={styles.greetingText}>Hi {userName}</Text>
            <Text style={styles.subGreeting}>Have a great day ahead</Text>
          </View>
        </View>
        
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.title}>ADD YOUR JOB</Text>
        
        <View style={styles.inputContainer}>
          <Text style={styles.clipboardIcon}>📋</Text>
          <TextInput
            style={styles.input}
            placeholder="input your job"
            placeholderTextColor="#999"
            value={taskText}
            onChangeText={setTaskText}
            multiline
          />
        </View>

        <TouchableOpacity 
          style={[styles.button, !taskText.trim() && styles.buttonDisabled]}
          onPress={handleFinish}
          disabled={!taskText.trim()}
        >
          <Text style={styles.buttonText}>FINISH →</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
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
  backButton: {
    fontSize: 24,
    color: '#000',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#374151',
    textAlign: 'center',
    marginBottom: 60,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 40,
    width: '100%',
    minHeight: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  clipboardIcon: {
    fontSize: 20,
    color: '#10B981',
    marginRight: 12,
    marginTop: 2,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    textAlignVertical: 'top',
    minHeight: 40,
  },
  button: {
    backgroundColor: '#06B6D4',
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#9CA3AF',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  decorativeContainer: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  notepad: {
    width: 200,
    height: 120,
    backgroundColor: '#FEF3C7',
    borderRadius: 8,
    padding: 16,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  notepadText: {
    fontSize: 12,
    color: '#92400E',
    textAlign: 'center',
    lineHeight: 16,
  },
  pencil: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 20,
    height: 4,
    backgroundColor: '#EF4444',
    borderRadius: 2,
    transform: [{ rotate: '45deg' }],
  },
});
