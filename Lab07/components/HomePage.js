import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';

export default function HomePage({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        A premium online store for sporter and their stylish choice
      </Text>
      <View>
        <Card style={{ backgroundColor: 'pink', width: "100%"}}>
          <Image
            source={require('../assets/intro-image.png')}
            style={{ width: 300, height: 300, resizeMode: "contain" }}
          />
        </Card>
        <View style = {{borderWidth: 1, flex: 1, justifyContent: "center", alignItems: "center", padding: 10, marginTop: 5, borderRadius: 2}}>
          <Text>POWER BIKE SHOP</Text>
        </View>

        <TouchableOpacity
          style={{marginTop: 50, flex: 1, justifyContent: "center", alignItems: "center", padding: 10, borderRadius: 6, backgroundColor: "#e94141", color: "white", fw: "bold"}}
          onPress={() => navigation.navigate('ProductList')}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 24,
    backgroundColor: 'white',
    display: "flex",
    flexDirection: "column"
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  },
});
