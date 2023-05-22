import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Home from "./screens/Home";
import * as db from "./db";
import Colors from "./constants/Colors";

const Stack = createNativeStackNavigator();

const startApp = async () => {
  await db.ClearAll();
  await db.addAllDefaultCourses();
};
// startApp();

const App = () => {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={"Courses"}
            component={Home}
            options={{
              title: "All Courses",
              headerStyle: {
                backgroundColor: Colors.primary50,
              },
              headerTintColor: Colors.primaryText,
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
