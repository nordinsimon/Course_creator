import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

import Navbar from "../components/Navbar";
import Course from "../components/Course";

import Colors from "../constants/Colors";

import * as db from "../db";

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getAllCourses = async () => {
      const courses = await db.GetAll();
      setCourses(courses);
    };

    getAllCourses();
  }, []);

  courses.forEach((cours) => {
    console.log(cours, "cours");
  });
  if (courses.length === 0) {
    return (
      <View style={styles.container}>
        <Navbar />
        <Text style={styles.text}>No Courses</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Navbar />
      <Course
        style={styles.course}
        courseName="HTML"
        courseBackground={require("../assets/HTML_Background.png")}
        courseLogo={require("../assets/HTML_Logo.png")}
      />
      <Course
        style={styles.course}
        courseName="CSS"
        courseBackground={require("../assets/CSS_Background.png")}
        courseLogo={require("../assets/CSS_Logo.png")}
      />
      <Course
        style={styles.course}
        courseName="JavaScript"
        courseBackground={require("../assets/JS_Background.png")}
        courseLogo={require("../assets/JS_Logo.png")}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  course: {
    margin: 4,
    backgroundColor: "red",
  },
  text: {
    color: Colors.primaryText,
    fontSize: 24,
    backgroundColor: Colors.primary200,
  },
});

export default Home;
