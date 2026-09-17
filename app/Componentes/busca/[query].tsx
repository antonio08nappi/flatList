import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function BuscaFilmes() {
  const { query } = useLocalSearchParams<{ query: string }>();

  const nomePesquisado = query
    ? decodeURIComponent(query)
    : '';

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Resultados da busca</Text>

      <Text style={styles.texto}>
        Filmes encontrados para:
      </Text>

      <Text style={styles.nome}>
        "{nomePesquisado}"
      </Text>

      <Text style={styles.mensagem}>
        Aqui vão aparecer os filmes relacionados à sua pesquisa.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  texto: {
    fontSize: 16,
    color: '#555',
  },

  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 20,
  },

  mensagem: {
    fontSize: 16,
    color: '#777',
  },
});