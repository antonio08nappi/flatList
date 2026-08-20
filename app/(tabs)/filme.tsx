import React, { useState } from "react";
import {View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions, StatusBar, SafeAreaView} from "react-native";


const { width, height } = Dimensions.get("window");

// poster de exemplo (pode trocar pela url real depois)
const POSTER =
  "https://th.bing.com/th/id/OSK.zXW5QqjW2GCYxKN7smuMdtEEympc4FxKvzZZj53boP0?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3";

export default function FilmeHomemAranha() {
  const [naMinhaLista, setNaMinhaLista] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* Hero / Banner */}
        <View style={styles.hero}>
          <Image
            source={{ uri: POSTER }}
            style={styles.poster}
            resizeMode="cover"
          />


          {/* botao voltar (estilo netflix) */}
          <SafeAreaView style={styles.topBar}>
            <TouchableOpacity style={styles.backBtn} activeOpacity={0.7}>
              <Text style={styles.backIcon}>‹</Text>
            </TouchableOpacity>
          </SafeAreaView>

          {/* titulo + meta info */}
          <View style={styles.heroContent}>
            <Text style={styles.title}>Homem-Aranha:{"\n"}Um Novo Dia</Text>

            <View style={styles.metaRow}>
              <Text style={styles.match}>98% relevante</Text>
              <Text style={styles.meta}>2026</Text>
              <View style={styles.ageBadge}>
                <Text style={styles.ageText}>14</Text>
              </View>
              <Text style={styles.meta}>2h 25min</Text>
              <View style={styles.hdBadge}>
                <Text style={styles.hdText}>HD</Text>
              </View>
            </View>
          </View>
        </View>

        {/* botoes principais */}
        <View style={styles.actions}>
          <TouchableOpacity style={styles.playBtn} activeOpacity={0.85}>
            <Text style={styles.playIcon}>▶</Text>
            <Text style={styles.playText}>Assistir</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryBtn}
            activeOpacity={0.8}
            onPress={() => setNaMinhaLista(!naMinhaLista)}
          >
            <Text style={styles.secondaryIcon}>{naMinhaLista ? "✓" : "+"}</Text>
            <Text style={styles.secondaryText}>
              {naMinhaLista ? "Minha lista" : "Minha lista"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* descricao */}
        <View style={styles.infoBlock}>
          <Text style={styles.description}>
            Quatro anos se passaram desde Sem Volta para Casa. Peter agora vive sozinho, apagado
            da memória de quem ama, e se dedica 100% a proteger Nova York como Homem-Aranha. 
            A pressão de ver os amigos seguirem em frente sem ele desencadeia uma mudança que ele talvez não consiga 
            controlar e essa transformação pode ser a única chance de deter uma ameaça poderosa que ninguém consegue sequer ver.
          </Text>

          <Text style={styles.cast}>
            <Text style={styles.label}>Elenco: </Text>
            Tom Holland, Zendaya, Sadie Sink, Jacob Batalon, Jon Bernthal
          </Text>

          <Text style={styles.genres}>
            <Text style={styles.label}>Gêneros: </Text>
            Ação, Aventura, Ficção científica
          </Text>

          <Text style={styles.director}>
            <Text style={styles.label}>Direção: </Text>
            Destin Daniel Cretton
          </Text>
        </View>

        {/* secao "Mais como este" bem simples */}
        <View style={styles.moreSection}>
          <Text style={styles.sectionTitle}>Mais como este</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16 }}
          >
            {[
              { title: "Homem-Aranha: Longe de Casa", year: "2019" },
              { title: "Homem-Aranha: De Volta ao Lar", year: "2017" },
              { title: "Vingadores: Ultimato", year: "2019" },
              { title: "Doutor Estranho", year: "2016" },
              { title: "Homem-Aranha: Sem volta para Casa", year: "2021" },
            ].map((item, i) => (
              <TouchableOpacity key={i} style={styles.similarCard} activeOpacity={0.8}>
                <View style={styles.similarPoster}>
                  <Text style={styles.similarPlaceholder}>🎬</Text>
                </View>
                <Text style={styles.similarTitle} numberOfLines={2}>
                  {item.title}
                </Text>
                <Text style={styles.similarYear}>{item.year}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141414",
  },
  hero: {
    height: height * 0.58,
    width: "100%",
    position: "relative",
  },
  poster: {
    width: "100%",
    height: "100%",
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  topBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 12,
    paddingTop: 8,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.45)",
    alignItems: "center",
    justifyContent: "center",
  },
  backIcon: {
    color: "#fff",
    fontSize: 32,
    marginTop: -4,
    fontWeight: "300",
  },
  heroContent: {
    position: "absolute",
    bottom: 18,
    left: 16,
    right: 16,
  },
  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "700",
    letterSpacing: 0.3,
    marginBottom: 10,
    textShadowColor: "rgba(0,0,0,0.8)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 6,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 8,
  },
  match: {
    color: "#46d369",
    fontWeight: "600",
    fontSize: 13,
  },
  meta: {
    color: "#bcbcbc",
    fontSize: 13,
  },
  ageBadge: {
    borderWidth: 1,
    borderColor: "#bcbcbc",
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 2,
  },
  ageText: {
    color: "#bcbcbc",
    fontSize: 11,
    fontWeight: "500",
  },
  hdBadge: {
    borderWidth: 1,
    borderColor: "#bcbcbc",
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 2,
  },
  hdText: {
    color: "#bcbcbc",
    fontSize: 10,
    fontWeight: "600",
  },
  actions: {
    paddingHorizontal: 16,
    marginTop: 8,
    gap: 10,
  },
  playBtn: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 4,
    gap: 10,
  },
  playIcon: {
    fontSize: 16,
    color: "#000",
  },
  playText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "700",
  },
  secondaryBtn: {
    backgroundColor: "#2a2a2a",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 4,
    gap: 8,
  },
  secondaryIcon: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "400",
  },
  secondaryText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
  infoBlock: {
    paddingHorizontal: 16,
    marginTop: 18,
  },
  description: {
    color: "#fff",
    fontSize: 14.5,
    lineHeight: 21,
    marginBottom: 14,
  },
  cast: {
    color: "#a3a3a3",
    fontSize: 13,
    marginBottom: 4,
    lineHeight: 18,
  },
  genres: {
    color: "#a3a3a3",
    fontSize: 13,
    marginBottom: 4,
  },
  director: {
    color: "#a3a3a3",
    fontSize: 13,
  },
  label: {
    color: "#777",
  },
  moreSection: {
    marginTop: 28,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  similarCard: {
    width: 110,
    marginRight: 10,
  },
  similarPoster: {
    width: 110,
    height: 155,
    backgroundColor: "#2a2a2a",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 6,
  },
  similarPlaceholder: {
    fontSize: 28,
  },
  similarTitle: {
    color: "#e5e5e5",
    fontSize: 12,
    fontWeight: "500",
  },
  similarYear: {
    color: "#888",
    fontSize: 11,
    marginTop: 2,
  },
});