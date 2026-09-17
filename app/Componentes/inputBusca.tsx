import React, { useState } from "react";
import {View,TextInput,TouchableOpacity,Text,StyleSheet,} from "react-native";
import { useRouter } from "expo-router";



export default function InputBusca() {
  const [busca, setBusca] = useState("");
  const router = useRouter();

  function pesquisar() {
    if (busca.trim() === "") {
      return;
    }

    router.push({
      pathname: `/Componentes/busca/${encodeURIComponent(busca)}`,
      params: { query: busca },
    });
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome de um filme..."
        placeholderTextColor="#777"
        value={busca}
        onChangeText={setBusca}
      />

      <TouchableOpacity style={styles.botao} onPress={pesquisar}>
        <Text style={styles.textoBotao}>Buscar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    gap: 8,
  },

  input: {
    flex: 1,
    height: 45,
    backgroundColor: "#ffffff98",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },

  botao: {
    height: 45,
    paddingHorizontal: 18,
    backgroundColor: "#25dd0c",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  textoBotao: {
    color: "#fc5001",
    fontWeight: "bold",
  },
});