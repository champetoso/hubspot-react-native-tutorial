import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { View, TextInput, Button, Alert, Text } from "react-native";

import { auth, createCRMContact } from "../firebase/config";
import { styles, buttons, inputs, texts } from "../styles/styles";

export default function SignUpScreen({ navigation }) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignUpPress = () => {
    const properties = {
      email: email,
      firstname: firstname,
      lastname: lastname,
    };

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(
          "Created Firebase user with uid: ",
          userCredential.user.uid
        );
        return createCRMContact(properties);
      })
      .then((result) => {
        console.log("Created HubSpot user with id: ", result.data.hubspot.id);
        Alert.alert(
          "Welcome",
          "Your account has been successfully created",
          [{ text: "OK", onPress: () => navigation.navigate("Home") }],
          { cancelable: false }
        );
      })
      .catch((error) => {
        const code = error.code;
        const message = error.message;
        const details = error.details;
        console.log("Function error code: ", code);
        console.log("Function error msg: ", message);
        console.log("Function error details: ", details);
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
        onChangeText={setFirstname}
        value={firstname}
        placeholder="First Name"
        autoCapitalize="none"
        autoCorrect={false}
        style={inputs.textInput}
      />
      <TextInput
        onChangeText={setLastname}
        value={lastname}
        placeholder="Last Name"
        autoCapitalize="none"
        autoCorrect={false}
        style={inputs.textInput}
      />
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
      <Text style={texts.message}>
        By signing up I accept all GDPR requirements
      </Text>
      <Button title="Sign Up" onPress={onSignUpPress} style={buttons.primary} />
    </View>
  );
}
