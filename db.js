import AsyncStorage from "@react-native-async-storage/async-storage";

let JS = {
  id: 1,
  name: "Javascript",
  logo: "../assets/JS_Logo.png",
  background: "../assets/JS_Background.png",
};
let HTML = {
  id: 2,
  name: "HTML",
  logo: "../assets/HTML_Logo.png",
  background: "../assets/HTML_Background.png",
};
let CSS = {
  id: 3,
  name: "CSS",
  logo: "../assets/CSS_Logo.png",
  background: "../assets/CSS_Background.png",
};
let REACT = {
  id: 4,
  name: "React",
  logo: "../assets/REACT_Logo.png",
  background: "../assets/REACT_Background.png",
};

export const addAllDefaultCourses = async () => {
  try {
    await AsyncStorage.setItem("1", JSON.stringify(JS));
    await AsyncStorage.setItem("2", JSON.stringify(HTML));
    await AsyncStorage.setItem("3", JSON.stringify(CSS));
    await AsyncStorage.setItem("4", JSON.stringify(REACT));
    console.log("All default data stored successfully");
  } catch (error) {
    console.log(error);
  }
};

export const StoreData = async (key, obj) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(obj));
    console.log("Data stored successfully");
  } catch (error) {
    console.log(error);
  }
};

export const GetData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log(value);
    }
  } catch (e) {
    console.log(e);
  }
};

export const RemoveData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log(e);
  }
};

export const ClearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.log(e);
  }
};

export const MergeData = async (key, obj) => {
  try {
    await AsyncStorage.mergeItem(key, JSON.stringify(obj));
  } catch (e) {
    console.log(e);
  }
};

export const GetAll = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const values = await AsyncStorage.multiGet(keys);
    return values;
  } catch (e) {
    console.log(e);
  }
};
