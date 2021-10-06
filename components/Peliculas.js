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
} from "react-native";
import movies from "../assets/data/movies";
import useVideo from "../hooks/useVideo";
import YoutubePlayer from "react-native-youtube-iframe";
import useYoutube from "../hooks/useYoutube";

const Peliculas = () => {
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
                Películas
              </Text>
            </View>
          </ImageBackground>
        </View>
        {movies.map((category, i) => (
          <View
            key={`cat-${i}`}
            style={{ height: height * 0.25, marginBottom: 10 }}
          >
            <Text style={styles.subtitle}>{category.title}</Text>
            <ScrollView horizontal>
              {category.movies.map((movie, j) => (
                <TouchableHighlight
                  key={`cat-${i}-${j}`}
                  onPress={() =>
                    loadVideo({ ...movie, category: category.title }, true)
                  }
                  underlayColor={"transparent"}
                >
                  <View style={styles.movieContainer}>
                    <ImageBackground
                      source={{
                        uri: movie.img,
                      }}
                      resizeMode="cover"
                      style={styles.backgroundImage}
                      imageStyle={{ borderRadius: 20 }}
                    >
                      <View style={styles.maskText}>
                        <View style={styles.innerText}>
                          <Text style={{ color: "white" }}>{movie.title}</Text>
                        </View>
                      </View>
                    </ImageBackground>
                  </View>
                </TouchableHighlight>
              ))}
            </ScrollView>
          </View>
        ))}
        {/* </View> */}
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
  movieContainer: {
    height: "100%",
    width: 200,
    paddingVertical: 20,
    marginRight: 10,
  },
  innerText: {
    backgroundColor: "rgba(0,0,0,.5)",
    padding: 10,
  },
  maskText: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    borderRadius: 20,
    overflow: "hidden",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "flex-end",
    height: "100%",
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

export default Peliculas;
