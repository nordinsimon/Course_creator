import { View, Text, StyleSheet, Pressable } from "react-native";

import Colors from "../constants/Colors";
const PrimaryButton = ({ children, pressHandler }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={pressHandler}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: Colors.accent100,
  },
  pressed: {
    backgroundColor: Colors.accent200,
  },
  buttonText: {
    color: Colors.accentText,
    textAlign: "center",
  },
});

export default PrimaryButton;
