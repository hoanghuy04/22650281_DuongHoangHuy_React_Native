import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';

export default function ProductDetail({ route }) {
  const { product } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Image source={{ uri: product.image }} style={styles.image} resizeMode="contain" />

        <View style={styles.content}>
          <Text style={styles.name}>{product.name}</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
            <Text style={styles.discountPrice}>15% OFF | {product.price}$</Text>
            <Text style={styles.oldPrice}>{product.oldPrice || '449$'}</Text>
          </View>

          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>
            {product.description || 'No description available'}
          </Text>
        </View>
      </Card>

      <TouchableOpacity style={styles.addBtn}>
        <Text style={styles.addBtnText}>Add to cart</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 12,
  },
  card: {
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 8,
    marginBottom: 12,
  },
  content: {
    width: '100%',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  discountPrice: {
    fontSize: 14,
    color: '#e94141',
    fontWeight: '600',
    marginRight: 10,
  },
  oldPrice: {
    fontSize: 14,
    color: 'gray',
    textDecorationLine: 'line-through',
  },
  sectionTitle: {
    marginTop: 12,
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    fontSize: 14,
    color: '#333',
    marginTop: 4,
    lineHeight: 20,
  },
  addBtn: {
    backgroundColor: '#e94141',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  addBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
