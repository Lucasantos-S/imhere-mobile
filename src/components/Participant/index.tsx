import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { IParticipantProps } from "./Participant.structure";

export function Participant({ name, onRemove }: IParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity style={styles.button} onPress={() => onRemove(name)}>
        <Text style={styles.textButton}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
