import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function index() {
  return (
    <View style={styles.container}>
      <Text>Welcome Page (index)</Text>
      <Link href="/list">
        <Text style={{ color: "blue" }}>Go to List</Text>
      </Link>
      <Link href="/meuPerfil">
        <Text style={{ color: "blue" }}>Go to My Profile</Text>
      </Link>
      <StatusBar style="auto" />
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
