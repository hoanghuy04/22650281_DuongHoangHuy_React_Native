import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProductItem({ item }) {
  return (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />

      <Text numberOfLines={1} style={styles.name}>
        {item.name}
      </Text>

      <View style={styles.ratingRow}>
        {[...Array(4)].map((_, i) => (
          <Ionicons key={i} name="star" size={14} color="#FFD700" />
        ))}
        <Ionicons name="star-outline" size={14} color="#FFD700" />
        <Text style={styles.reviewText}>(15)</Text>
      </View>

      <View style={styles.priceRow}>
        <Text style={styles.price}>69.900 đ</Text>
        <Text style={styles.discount}>-39%</Text>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    padding: 8,
    marginRight: 12,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: 100,
    borderRadius: 6,
  },
  name: {
    fontSize: 13,
    fontWeight: "500",
    marginVertical: 4,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  reviewText: {
    fontSize: 12,
    color: "#555",
    marginLeft: 4,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  discount: {
    fontSize: 12,
    color: "gray",
    marginLeft: 8,
  },
});
