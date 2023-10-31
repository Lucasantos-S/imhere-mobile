import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";

import { styles } from "./styles";
import { Participant } from "@/components/Participant";

export function Home() {
  const [participant, setParticipant] = React.useState([] as string[]);
  const [event, setEvent] = React.useState("");

  function handleParticiapantRemove(name: string) {
    Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => {
          Alert.alert(`O participante ${name} foi deletado`);
          const newList = participant.filter(
            (participant) => participant != name
          );
          setParticipant(newList);
        },
      },
      { text: "Não", style: "cancel" },
    ]);
  }

  function handleSubmit() {
    if (!event) return Alert.alert("Digite um nome");
    if (participant.includes(event.toLocaleLowerCase()))
      return Alert.alert(
        "Participando existe",
        "Esse parcicipante ja existe na lista."
      );
    setParticipant((name) => [...name, event]);
    setEvent("");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nome do evento</Text>
      <Text style={styles.date}>Sexta, 4 de nNovembro de 2023</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome do participante"
          placeholderTextColor="#fff"
          value={event}
          onChangeText={setEvent}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        keyExtractor={(item) => item}
        data={participant}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={handleParticiapantRemove}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.ListEmptyText}>
            Nenhum participante chegou no evento, adicione os particiantes e sua
            lista
          </Text>
        )}
      />
    </View>
  );
}
