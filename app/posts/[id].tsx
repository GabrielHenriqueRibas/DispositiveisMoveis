import { StyleSheet, Text, View } from "react-native";

import { post } from "../../Mocks/Post";
import { useGlobalSearchParams } from "expo-router";

export default function car() {
  const params = useGlobalSearchParams();
  const id = params.id as string;

  const posts = post.filter((car) => car.id === parseInt(id))[0] || null;

  return (
    <View style={styles.container}>
      <Text>Nome: {posts.nome} </Text>
      <Text>Descrição: {posts.descricao} </Text>
      <Text>Quantidade de like: {posts.quantidadeDeLike} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
