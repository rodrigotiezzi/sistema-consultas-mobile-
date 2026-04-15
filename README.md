# CHECKPOINT 2 (CP2) — Refatoração de Styles

Sistema de Consultas Mobile (React Native + TypeScript)

---

## Identificação

**Integrante 1:**
Nome: [Christian de Sousa Freitas]
RM: [566098]

**Integrante 2:**
Nome: [Rodrigo Tiezzi]
RM: [562975]

Turma: [2TDSPO]
Disciplina: [Mobile Application]
Projeto: Sistema de Consultas Mobile

---

## Descrição da Atividade

Neste checkpoint foi realizada a refatoração dos estilos das telas do projeto, com o objetivo de melhorar a organização do código e aplicar boas práticas de desenvolvimento.

Antes da refatoração, os estilos estavam definidos diretamente dentro dos arquivos das telas utilizando `StyleSheet.create`. Após a refatoração, os estilos foram separados em arquivos próprios dentro da pasta `src/styles`.

Essa mudança não alterou o funcionamento da aplicação, apenas melhorou a estrutura e a manutenção do código.

---

## Objetivo Alcançado

* Separação completa entre lógica (componentes) e estilos
* Organização padronizada dos arquivos
* Aplicação de boas práticas em React Native
* Uso correto de Git Flow com branches e Pull Requests
* Manutenção de 100% da funcionalidade do sistema

---

## Telas Refatoradas

As seguintes telas foram refatoradas:

* CadastroPaciente.tsx
* ConsultaDetalhesScreen.tsx
* ConsultasListScreen.tsx
* HomeScreen.tsx
* Login.tsx
* MinhasConsultas.tsx
* NovaConsultaScreen.tsx

---

## Estrutura do Projeto

### Antes da Refatoração

```plaintext
src/
├── screens/
│   ├── HomeScreen.tsx (com estilos internos)
│   ├── ConsultaDetalhesScreen.tsx
│   └── ...
└── styles/
    └── (não utilizado corretamente)
```

---

### Depois da Refatoração

```plaintext
src/
├── screens/
│   ├── HomeScreen.tsx (apenas componente)
│   ├── ConsultaDetalhesScreen.tsx
│   └── ...
└── styles/
    ├── cadastroPaciente.styles.ts
    ├── consultaDetalhes.styles.ts
    ├── consultasList.styles.ts
    ├── home.styles.ts
    ├── login.styles.ts
    ├── minhasConsultas.styles.ts
    └── novaConsulta.styles.ts
```

---

## Processo de Refatoração

O processo seguiu os seguintes passos:

1. Criação de um arquivo de estilos para cada tela dentro da pasta `styles`
2. Remoção do `StyleSheet.create` dos arquivos de tela
3. Importação dos estilos a partir dos novos arquivos
4. Testes para garantir que a interface permanecesse igual
5. Commit e versionamento utilizando Git

---

## Exemplo de Refatoração

### Antes

```tsx
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
```

---

### Depois

```tsx
import styles from "../styles/home.styles";
```

```ts
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default styles;
```

---

## Git Flow Utilizado

Durante o desenvolvimento, foi utilizado o padrão de branches para organização:

* Criação de branches a partir da `main`
* Nome padrão: `feat/styles-<nome-da-tela>`
* Commits descritivos seguindo boas práticas
* Criação de Pull Requests para integração

Exemplo de branch:

```bash
feat/styles-home
```

---

## Pull Requests

Foram criados Pull Requests contendo:

* Descrição das alterações realizadas
* Lista de arquivos modificados
* Checklist de validação
* Identificação do responsável

Todos os PRs foram revisados e integrados à branch `main`.

---

## Testes Realizados

Após cada refatoração:

* Aplicação executada com `npx expo start`
* Verificação visual das telas
* Testes de navegação entre telas
* Garantia de que não houve erros ou mudanças inesperadas

---

## Dificuldades Encontradas

Durante o desenvolvimento, algumas dificuldades foram encontradas:

* Ajustar corretamente os caminhos de importação dos estilos (`../styles/...`)
* Garantir que nenhum estilo fosse perdido durante a separação
* Evitar duplicação de código ao mover os estilos
* Manter a aplicação funcionando sem erros durante todas as etapas

---

## Aprendizados

Com esta atividade foi possível aprender:

* A importância da separação de responsabilidades
* Como organizar melhor projetos em React Native
* Uso correto de `StyleSheet` em arquivos externos
* Fluxo de trabalho com Git (branch, commit, push, pull request)
* Boas práticas de desenvolvimento colaborativo

---

## Conclusão

A refatoração foi concluída com sucesso, atendendo a todos os requisitos propostos. O projeto agora possui uma estrutura mais organizada, facilitando manutenção, leitura e escalabilidade do código.

---

## Entrega

* Código atualizado no GitHub
* Pull Requests realizados e aprovados
* Aplicação funcionando corretamente
* README documentado

---