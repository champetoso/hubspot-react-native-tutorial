import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 30,
  },
});

const buttons = StyleSheet.create({
  primary: {
    flex: 1,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
});

const texts = StyleSheet.create({
  title: {
    height: 70,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20,
  },

  message: {
    textAlign: "center",
    color: "gray",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});

const inputs = StyleSheet.create({
  textInput: {
    backgroundColor: "white",
    height: 30,
    marginTop: 20,
  },
});

const lists = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  textInput: {
    backgroundColor: "white",
    textAlign: "center",
    width: 40,
    height: 30,
  },
});

export { styles, buttons, texts, inputs, lists };
