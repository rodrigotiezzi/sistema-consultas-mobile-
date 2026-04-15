import React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
<<<<<<< HEAD
import { styles } from "../styles/minhasConsultas.styles";
// Componente não utilizado na versão simplificada
=======

// ATENÇÃO: Importação correta puxando do novo arquivo!
import styles from "../styles/minhasConsultas.styles";
>>>>>>> 7c40322756b5d1b21e1c10b2e223322620f2cd70

type MinhasConsultasProps = {
  onNavigateToAgendamento: () => void;
  onLogout: () => void;
};

export default function MinhasConsultas({
  onNavigateToAgendamento,
  onLogout,
}: MinhasConsultasProps) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Text style={styles.titulo}>Minhas Consultas</Text>
        <Text style={styles.subtitulo}>Componente não utilizado na versão simplificada</Text>
      </View>
    </View>
  );
<<<<<<< HEAD
}


=======
}
>>>>>>> 7c40322756b5d1b21e1c10b2e223322620f2cd70
