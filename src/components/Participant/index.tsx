import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { styles } from "./styles";

export function Participant() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Lucas</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
