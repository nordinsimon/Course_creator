import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";

import Colors from "../constants/Colors";

const Course = ({ courseName, courseBackground, courseLogo }) => {
  return (
    <Pressable style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={courseBackground}
        resizeMode="cover"
      >
        <Image style={styles.image} source={courseLogo} />
      </ImageBackground>
      <Text style={styles.text}>{courseName}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: Colors.primary150,

    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  backgroundImage: {
    height: 200,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 10,
  },
  image: {
    margin: 10,
    width: 50,
    height: 50,
  },
  text: {
    color: Colors.primaryText,
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Course;
