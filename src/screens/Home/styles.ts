import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  title: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 48,
  },
  date: {
    color: "#6b6b6b",
    fontSize: 16,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 24,
    marginBottom: 24,
    gap: 20,
  },
  input: {
    flex: 1,
    width: "100%",
    height: 56,
    borderRadius: 5,
    backgroundColor: "#1f1e25",
    color: "#fff",
    fontSize: 16,
    padding: 16,
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31cf67",
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    fontSize: 24,
    color: "#fff",
  },

  ListEmptyText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
});
