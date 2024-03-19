import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";

interface LoginProps {
  username?: string;
  password?: string;
}

export default function Login({ username, password }: LoginProps) {
  const [user, setUser] = useState<string>(username || "");
  const [key, setKey] = useState<string>(password || "");

  const loginButton = () => {
    console.log(user);
    console.log(key);
  };

  return (
    <View>
      <TextInput
        value={user}
        onChangeText={setUser} 
        placeholder="Username" 
      />
      <TextInput
        value={key}
        onChangeText={setKey}
        placeholder="Password"
        secureTextEntry={true}
          />
          
      <Button title="Login" onPress={loginButton} />
    </View>
  );
}
