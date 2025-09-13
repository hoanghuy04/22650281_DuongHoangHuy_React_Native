import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Switch,
} from "react-native";

export default function PasswordGeneratorUI() {
  const [length, setLength] = useState("");
  const [includeLower, setIncludeLower] = useState(true);
  const [includeUpper, setIncludeUpper] = useState(false);
  const [includeNumber, setIncludeNumber] = useState(true);
  const [includeSymbol, setIncludeSymbol] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>PASSWORD GENERATOR</Text>

      <View style={styles.passwordBox}>
        <Text style={styles.passwordText}>DinoTimo</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Password length</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={length}
          onChangeText={setLength}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Include lower case letters</Text>
        <Switch value={includeLower} onValueChange={setIncludeLower} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Include upcase letters</Text>
        <Switch value={includeUpper} onValueChange={setIncludeUpper} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Include number</Text>
        <Switch value={includeNumber} onValueChange={setIncludeNumber} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Include special symbol</Text>
        <Switch value={includeSymbol} onValueChange={setIncludeSymbol} />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>GENERATE PASSWORD</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c2c70",
    padding: 24,
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  passwordBox: {
    backgroundColor: "#1a1a3d",
    width: "100%",
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  passwordText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginVertical: 10,
  },
  label: {
    color: "white",
    fontSize: 14,
  },
  input: {
    backgroundColor: "white",
    width: 100,
    height: 36,
    borderRadius: 6,
    paddingHorizontal: 8,
  },
  button: {
    marginTop: 30,
    backgroundColor: "#3b3bb3",
    width: "100%",
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
