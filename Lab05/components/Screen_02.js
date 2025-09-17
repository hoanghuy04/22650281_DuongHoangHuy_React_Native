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
  TextInput
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import ProductItem2 from './ProductItem2';

export default function ChatScreen() {
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://6832918dc3f2222a8cb2b453.mockapi.io/api/v1/products')
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

        <TextInput style = {{
          backgroundColor: "#fff",
          padding: 5,
          paddingHorizontal: 10,
          borderRadius: 4
        }} placeholder = "Day cap usb"></TextInput>

        <View style={{flexDirection: "row", gap: 10}}>
          <MaterialIcons name="shopping-cart" size={24} color="black" />
          <MaterialIcons name="menu" size={24} color="black" />
        </View>
      </View>

      <View style={{ height: 500, flexDirection: "row", }}>
        <FlatList
          data={products}
          numColumns = {2}
          renderItem={({ item }) => <ProductItem2 item={item} />}
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
