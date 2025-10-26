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

export default function WelcomeScreen() {
  const [name, setName] = useState('');
  const { setUserName } = useDatabase();

  const handleGetStarted = () => {
    if (name.trim()) {
      setUserName(name.trim());
      router.push('/task-list');
    }
  };

  return (
    <SafeAreaView style={styles.container}>

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.title}>MANAGE YOUR{'\n'}TASK</Text>
        
        <View style={styles.inputContainer}>
          <Text style={styles.envelopeIcon}>✉</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            placeholderTextColor="#999"
            value={name}
            onChangeText={setName}
          />
        </View>

        <TouchableOpacity 
          style={[styles.button, !name.trim() && styles.buttonDisabled]}
          onPress={handleGetStarted}
          disabled={!name.trim()}
        >
          <Text style={styles.buttonText}>GET STARTED →</Text>
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
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#8B5CF6',
    textAlign: 'center',
    marginBottom: 60,
    lineHeight: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 40,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  envelopeIcon: {
    fontSize: 20,
    color: '#999',
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
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
});
