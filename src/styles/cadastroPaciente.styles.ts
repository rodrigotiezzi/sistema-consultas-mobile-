import { StyleSheet } from "react-native";
<<<<<<< HEAD
import { colors } from "./colors";
=======
>>>>>>> 7c40322756b5d1b21e1c10b2e223322620f2cd70

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: colors.background,
    padding: 16,
  },
  input: {
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    color: colors.text,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: colors.card,
    fontWeight: "bold",
=======
    backgroundColor: "#f5f5f5",
  },
  header: {
    padding: 20,
    alignItems: "center",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2196F3",
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 14,
    color: "#666",
>>>>>>> 7c40322756b5d1b21e1c10b2e223322620f2cd70
  },
});

export default styles;