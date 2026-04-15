import React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
<<<<<<< HEAD
import { styles } from "../styles/cadastroPaciente.styles";
// Componente não utilizado na versão simplificada
=======

// ATENÇÃO: Importação correta puxando do novo arquivo!
import styles from "../styles/cadastroPaciente.styles";
>>>>>>> 7c40322756b5d1b21e1c10b2e223322620f2cd70

type CadastroPacienteProps = {
  onCadastroSuccess: () => void;
  onVoltar: () => void;
};

export default function CadastroPaciente({
  onCadastroSuccess,
  onVoltar,
}: CadastroPacienteProps) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Text style={styles.titulo}>📝 Cadastro de Paciente</Text>
        <Text style={styles.subtitulo}>Componente não utilizado na versão simplificada</Text>
      </View>
    </View>
  );
<<<<<<< HEAD
}


=======
}
>>>>>>> 7c40322756b5d1b21e1c10b2e223322620f2cd70
