import React from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Dimensions,
} from "react-native";
import estrenos from "../assets/data/estrenos";
import useVideo from "../hooks/useVideo";
import YoutubePlayer from "react-native-youtube-iframe";
import useYoutube from "../hooks/useYoutube";

const Series = () => {
  const { height } = Dimensions.get("window");
  const [modal, loadVideo] = useVideo();
  const [playing, onStateChange, togglePlaying] = useYoutube();
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
                Estrenos
              </Text>
            </View>
          </ImageBackground>
        </View>
        {estrenos.map((estreno, i) => (
          <View
            key={`cat-${i}`}
            style={{
              marginBottom: 5,
              paddingBottom: 15,
              borderBottomColor: "#a3a3a3",
              borderBottomWidth: 1,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}
          >
            <View style={{ ...styles.serieContainer }}>
              <View
                style={{
                  justifyContent: "center",
                  marginVertical: 10,
                }}
              >
                <YoutubePlayer
                  height={200}
                  play={playing}
                  videoId={estreno.trailer.substring(
                    estreno.trailer.indexOf("v=") + 2
                  )}
                  onChangeState={onStateChange}
                />
              </View>
              {/*               <View
                style={{
                  width: "35%",
                }}
              >
                <Image
                  source={{ uri: .img }}
                  style={styles.backgroundImage}
                  resizeMode={"cover"}
                />
              </View> */}
              <View style={styles.maskText}>
                <View style={styles.innerText}>
                  <Text style={styles.subtitulo}>{estreno.title}</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    marginHorizontal: 5,
                    marginTop: 5,
                  }}
                >
                  <Text style={{ color: "#ea526f" }}>Categoría: </Text>
                  <Text>{estreno.category}</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    marginHorizontal: 5,
                    marginTop: 5,
                  }}
                >
                  <Text style={{ color: "#ea526f" }}>Estreno: </Text>
                  <Text>{estreno.date}</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    marginHorizontal: 5,
                    marginTop: 5,
                  }}
                >
                  <Text style={{ color: "#ea526f" }}>Plataforma: </Text>
                  <Text>{estreno.platform}</Text>
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
                  <Text>{estreno.description}</Text>
                </View>
              </View>
            </View>
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
    paddingVertical: 20,
  },
  maskText: {
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
