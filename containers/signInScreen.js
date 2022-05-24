import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { View, TextInput, Button, Alert } from "react-native";

import { auth } from "../firebase/config";
import { styles, buttons, inputs } from "../styles/styles";

export default function SignInScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignInPress = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        Alert.alert(
          "Signed In",
          "Welcome back!",
          [{ text: "OK", onPress: () => navigation.navigate("Home") }],
          { cancelable: false }
        );
      })
      .catch((error) => {
        const errorMessage = error.message;
        Alert.alert(
          "Error",
          error.message,
          [{ text: "OK", onPress: () => console.log("OK Pressed") }],
          { cancelable: false }
        );
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        autoCapitalize="none"
        autoCorrect={false}
        style={inputs.textInput}
      />
      <TextInput
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        autoCapitalize="none"
        autoCorrect={false}
        style={inputs.textInput}
      />
      <Button title="Sign In" onPress={onSignInPress} style={buttons.primary} />
    </View>
  );
}
