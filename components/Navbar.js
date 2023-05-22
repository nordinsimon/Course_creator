import { View, Text, StyleSheet, Button } from "react-native";

import Colors from "../constants/Colors";

const Navbar = () => {
  return (
    <View style={styles.container}>
      <Button title="New " />
      <Text style={styles.text}>All Courses </Text>
      <Button title="Filter" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: Colors.primary50,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  text: {
    color: Colors.primaryText,
    fontSize: 24,
  },
});

export default Navbar;
