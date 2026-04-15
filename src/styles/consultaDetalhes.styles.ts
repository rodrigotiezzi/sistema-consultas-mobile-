import { StyleSheet } from "react-native";
import { colors } from "./colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
<<<<<<< HEAD
  titulo: {
    fontSize: 20,
=======
  row: {
    flexDirection: "row",
    gap: 16,
  },
  coluna: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  valor: {
    fontSize: 16,
    color: "#333",
    fontWeight: "600",
  },
  observacoes: {
    fontSize: 15,
    color: "#555",
    fontStyle: "italic",
    lineHeight: 22,
  },
  acoes: {
    marginTop: 10,
    gap: 12,
  },
  botao: {
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  botaoConfirmar: {
    backgroundColor: "#4CAF50",
  },
  botaoCancelar: {
    backgroundColor: "#F44336",
  },
  botaoTexto: {
    color: "#fff",
>>>>>>> 7c40322756b5d1b21e1c10b2e223322620f2cd70
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 10,
  },
  info: {
    color: colors.textSecondary,
    marginBottom: 6,
  },
  erroContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  erroTexto: {
    fontSize: 16,
    color: "#666",
  },
});

export default styles;