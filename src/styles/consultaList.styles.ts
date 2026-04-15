import { StyleSheet } from "react-native";
<<<<<<< HEAD
import { colors } from "./colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  card: {
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.text,
  },
  subtitulo: {
    color: colors.textSecondary,
  },
=======

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },
  filtros: { flexDirection: "row", padding: 16, gap: 8, backgroundColor: "#fff", borderBottomWidth: 1, borderBottomColor: "#e0e0e0" },
  filtro: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, backgroundColor: "#f0f0f0" },
  filtroAtivo: { backgroundColor: "#79059C" },
  filtroTexto: { fontSize: 14, color: "#666", fontWeight: "600" },
  filtroTextoAtivo: { color: "#fff" },
  emptyContainer: { flex: 1 },
>>>>>>> 7c40322756b5d1b21e1c10b2e223322620f2cd70
});

export default styles;