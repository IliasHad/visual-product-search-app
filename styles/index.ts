import { ColorSchemeName, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  image: {
    height: 200,
    objectFit: "contain",
  },
  container: {
    width: "50%",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export const viewStyles = (darkTheme: ColorSchemeName) =>
  StyleSheet.create({
    view: {
      backgroundColor: darkTheme === "dark" ? "black" : "white",
      flex: 1,
    },
  });
