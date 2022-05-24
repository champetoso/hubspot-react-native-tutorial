import React from "react";
import { signOut } from "firebase/auth";
import { View, Button, Alert } from "react-native";

import { auth } from "../firebase/config";
import { styles, buttons } from "../styles/styles";

export default function SignOutScreen({ navigation }) {
  const onSignOutPress = () => {
    signOut(auth)
      .then(() => {
        Alert.alert(
          "Good bye",
          "You've been signed out correctly'",
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
      <Button
        title="Sign Out"
        onPress={onSignOutPress}
        style={buttons.primary}
      />
    </View>
  );
}
