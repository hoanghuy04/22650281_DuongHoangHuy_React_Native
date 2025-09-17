import { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import ProductItem from './ProductItem';

export default function ChatScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://67cd3487dd7651e464eda0c5.mockapi.io/api/v1/product')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="blue" />
      </SafeAreaView>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 15,
          borderColor: '#ddd',
          backgroundColor: '#1ba9ff',
        }}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Chat</Text>
        <MaterialIcons name="shopping-cart" size={24} color="black" />
      </View>

      <View style={{ height: 500 }}>
        <FlatList
          data={products}
          renderItem={({ item }) => <ProductItem item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          paddingVertical: 10,
          borderTopWidth: 1,
          borderColor: '#ddd',
          backgroundColor: '#1ba9ff',
        }}>
        <Ionicons name="menu" size={28} color="black" />
        <Ionicons name="home" size={28} color="black" />
        <Ionicons name="person" size={28} color="black" />
      </View>
    </View>
  );
}
