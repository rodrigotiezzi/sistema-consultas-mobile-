import { StyleSheet } from "react-native";
import { colors } from "./colors";

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 10,
  },
  titulo: {
    fontWeight: "bold",
    color: colors.text,
  },
  statusConfirmado: {
    color: colors.success,
  },
  statusCancelado: {
    color: colors.error,
  },
  statusPendente: {
    color: colors.warning,
  },
});

export default styles;