import { StyleSheet, StatusBar, Text, View } from "react-native";
import { post } from "../Mocks/Post";
import { Link } from "expo-router";

export default function index() {
  return (
    <View style={styles.container}>
      <Text>FEED</Text>
      {post.map((post) => (
        <View key={post.id} style={{ marginTop: 8 }}>
          <Link href={{ pathname: "/posts/[id]", params: { id: post.id } }}>
            <Text> {post.nome} </Text>
            <Text> {post.descricao} </Text>
            <Text> {post.quantidadeDeLike} </Text>
          </Link>
        </View>
      ))}
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
