import React from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Modal,
  Dimensions,
  TouchableHighlight,
  Button,
  Image,
} from "react-native";
import series from "../assets/data/series";
import useVideo from "../hooks/useVideo";
import YoutubePlayer from "react-native-youtube-iframe";
import useYoutube from "../hooks/useYoutube";

const Series = () => {
  const { height } = Dimensions.get("window");
  const [modal, loadVideo] = useVideo();
  const [playing, onStateChange, togglePlaying] = useYoutube();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Modal transparent={true} animationType="slide" visible={modal.open}>
        <View style={styles.vistaModal}>
          <View style={styles.Modal}>
            <Text style={styles.subtitulo}>{modal.title}</Text>
            <View
              style={{
                height: height * 0.25,
                justifyContent: "center",
                marginVertical: 10,
              }}
            >
              <YoutubePlayer
                height={150}
                play={playing}
                videoId={modal.url?.substring(modal.url?.indexOf("v=") + 2)}
                onChangeState={onStateChange}
              />
              <View style={{ alignSelf: "flex-start" }}>
                <Button
                  title={playing ? "Pausa" : "Play"}
                  onPress={togglePlaying}
                ></Button>
              </View>
            </View>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Text style={{ fontWeight: "bold" }}>Categoría: </Text>
              <Text>{modal.category}</Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Text style={{ fontWeight: "bold" }}>Temporadas: </Text>
              <Text>{modal.seasons}</Text>
            </View>
            <View style={{ marginVertical: 15 }}>
              <Text style={{ fontWeight: "bold" }}>Descripción:</Text>
              <Text>{modal.description}</Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <Button
                title="Cerrar"
                onPress={() => {
                  loadVideo({}, false);
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
      <ScrollView style={styles.parentScroll}>
        {/* <View> */}
        <View style={{ height: height * 0.25, paddingBottom: 30 }}>
          <ImageBackground
            source={{
              uri: "https://image.freepik.com/free-vector/cinema-background-pattern_1061-522.jpg",
            }}
            style={styles.backgroundImage}
            resizeMode="cover"
            imageStyle={{ borderRadius: 20 }}
          >
            <View
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(250,250,250,.75)",
                borderRadius: 20,
                justifyContent: "flex-end",
                alignItems: "flex-end",
                paddingEnd: 20,
                paddingBottom: 20,
              }}
            >
              <Text
                style={{ color: "#ea526f", fontSize: 30, fontWeight: "bold" }}
              >
                Series
              </Text>
            </View>
          </ImageBackground>
        </View>
        {series.map((category, i) => (
          <View key={`cat-${i}`} style={{ marginBottom: 10 }}>
            <Text style={styles.subtitle}>{category.title}</Text>
            {category.series.map((serie, j) => (
              /*               <TouchableHighlight
                key={`cat-${i}-${j}`}
                onPress={() =>
                  loadVideo({ ...serie, category: category.title }, true)
                }
                underlayColor={"transparent"}
              > */
              <View
                key={`cat-${i}-${j}`}
                style={{ ...styles.serieContainer, height: height * 0.25 }}
              >
                <View
                  style={{
                    width: "35%",
                  }}
                >
                  <Image
                    source={{ uri: serie.img }}
                    style={styles.backgroundImage}
                    resizeMode={"cover"}
                  />
                </View>
                <View style={styles.maskText}>
                  <View style={styles.innerText}>
                    <Text style={styles.subtitulo}>{serie.title}</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      marginHorizontal: 5,
                      marginTop: 5,
                    }}
                  >
                    <Text style={{ color: "#ea526f" }}>Temporadas: </Text>
                    <Text>{serie.seasons}</Text>
                  </View>
                  <View
                    style={{
                      marginHorizontal: 5,
                      marginTop: 5,
                      height: height * 0.2 * 0.5,
                    }}
                  >
                    <Text style={{ color: "#ea526f", marginBottom: 5 }}>
                      Descripción:{" "}
                    </Text>
                    <View style={{ flex: 1 }}>
                      <ScrollView style={{ flex: 1 }}>
                        <Text>{serie.description}</Text>
                      </ScrollView>
                    </View>
                  </View>
                  <TouchableHighlight
                    onPress={() =>
                      loadVideo({ ...serie, category: category.title }, true)
                    }
                    style={{ marginTop: 5 }}
                    underlayColor={"transparent"}
                  >
                    <View
                      style={{
                        alignSelf: "flex-start",
                        paddingVertical: 5,
                        paddingHorizontal: 10,
                        backgroundColor: "#ea526f",
                        borderRadius: 20,
                      }}
                    >
                      <Text
                        style={{
                          color: "white",
                          fontWeight: "bold",
                        }}
                      >
                        Ver más
                      </Text>
                    </View>
                  </TouchableHighlight>
                </View>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parentScroll: {
    padding: 20,
    flex: 1,
  },
  subtitle: {
    fontSize: 20,
  },
  serieContainer: {
    width: "100%",
    flexDirection: "row",
    paddingVertical: 20,
  },
  maskText: {
    width: "65%",
    height: "100%",
    borderRadius: 20,
    padding: 10,
  },
  backgroundImage: {
    height: "100%",
    marginLeft: 10,
    borderRadius: 20,
  },
  vistaModal: {
    backgroundColor: "#00000030",
    flex: 1,
    justifyContent: "center",
  },
  Modal: {
    backgroundColor: "#fff",
    marginVertical: 50,
    marginHorizontal: 30,
    padding: 40,
    borderRadius: 10,
  },
  subtitulo: {
    fontWeight: "bold",
    fontSize: 16,
    justifyContent: "center",
  },
});

export default Series;
