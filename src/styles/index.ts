import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    marginVertical: 5,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#00796b",
    padding: 12,
    width: "100%",
    marginVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
  },
  linkText: {
    color: "blue",
    marginTop: 10,
  },
});

export const loginStyles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#00796b",
  },
  image: {
    width: 220,
    height: 150,
    marginBottom: 24,
  },
});
