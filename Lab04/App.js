import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import Screen_1 from "./components/Screen_1"
import Screen_2 from "./components/Screen_2"
// You can import supported modules from npm

export default function App() {
  return (
    <View style={styles.container}>
      <Screen_1/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
