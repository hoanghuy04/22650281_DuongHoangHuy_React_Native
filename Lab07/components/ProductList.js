import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Card } from 'react-native-paper';
import { useState, useEffect } from 'react';

export default function HomePage({ navigation }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCate, setSelectedCate] = useState('0');

  useEffect(() => {
    fetch('https://68d3448fcc7017eec54668ba.mockapi.io//bikes')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));

    fetch('https://68d3448fcc7017eec54668ba.mockapi.io/categories')
      .then((res) => res.json())
      .then((data) => setCategories([{ id: '0', name: 'All' }, ...data]))
      .catch((err) => console.error(err));
  }, []);

  const filterProducts =
    selectedCate === '0'
      ? products
      : products.filter((p) => p.categoryId == selectedCate);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress = {() => navigation.navigate('ProductDetail', {product: item})}>
      <Card style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </Card>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>The world's Best Bike</Text>

      <View style={styles.tabContainer}>
        {categories.map((c) => (
          <TouchableOpacity
            key={c.id}
            style={[styles.tab, selectedCate === c.id && styles.activeTab]}
            onPress={() => setSelectedCate(c.id)}>
            <Text>{c.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={filterProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'red',
  },
  card: {
    flex: 1,
    marginBottom: 16,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 100,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 8,
  },
  price: {
    fontSize: 14,
    color: 'orange',
    fontWeight: 'bold',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tab: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 6,
  },
  activeTab: {
    borderColor: 'purple',
  },
  tabText: {
    color: 'red',
    fontWeight: '500',
  },
  activeTabText: {
    color: 'purple',
    fontWeight: 'bold',
  },
});
