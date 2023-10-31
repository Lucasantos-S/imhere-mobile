import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    gap: 20,
  },
  name: {
    display: "flex",
    alignItems: "center",
    flex: 1,
    height: 56,
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    fontSize: 16,
    color: "#fff",
    padding: 16,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#1f1e25",
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    fontSize: 24,
    color: "#fff",
  },
});
