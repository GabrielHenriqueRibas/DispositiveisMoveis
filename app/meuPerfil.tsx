import { useRouter } from "expo-router";
import { StyleSheet, Button, Text, View } from "react-native";

export default function index() {
    const router = useRouter();

    const handleMeuPerfil = () => { 
        router.push('/feed'); 
    };

    return (
        <View style={styles.container}>
        <Text>MEU PERFIL</Text>
        <Button title="Meu feed" onPress={handleMeuPerfil}></Button>
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
