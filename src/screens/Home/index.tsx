import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { Participant } from "@/components/Participant";

export function Home() {
  const [event, setEvent] = React.useState("");

  function handleSubmit() {
    alert(event);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nome do evento</Text>
      <Text style={styles.date}>Sexta, 4 de nNovembro de 2023</Text>

      <View style={styles.form}>
        <TextInput
          value={event}
          onChangeText={setEvent}
          style={styles.input}
          placeholder="Digite o nome do evento"
          placeholderTextColor="#fff"
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
      </View>
      <Participant />
      <Participant />
      <Participant />
    </View>
  );
}
