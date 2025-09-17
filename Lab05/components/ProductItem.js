import { View, Text, TouchableOpacity, Image } from "react-native";
import {Ionicons} from "@expo/vector-icons"

export default function ProductItem({item}) {
  return <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderColor: "#eee",
      }}
    >
      <Image
        source={{uri: item.image}}
        style={{ width: 60, height: 60, borderRadius: 8, marginRight: 10 }}
      />
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.companyName}</Text>
        <Text style={{ color: "#555" }}>{item.name}</Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "red",
          paddingHorizontal: 15,
          paddingVertical: 8,
          borderRadius: 6,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Chat</Text>
      </TouchableOpacity>
    </View>
}