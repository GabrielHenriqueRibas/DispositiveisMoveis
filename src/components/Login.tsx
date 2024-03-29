import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";

export default function Login() {
  const [username, setUser] = useState<string>('');
  const [password, setKey] = useState<string>('');

  const loginButton = () => {
    console.log(username);
    console.log(password);
  };

  return (
    <View>
      <TextInput
        value={username}
        onChangeText={setUser} 
        placeholder="Username" 
      />
      <TextInput
        value={password}
        onChangeText={setKey}
        placeholder="Password"
        secureTextEntry={true}
          />
          
      <Button title="Login" onPress={loginButton} />
    </View>
  );
}
