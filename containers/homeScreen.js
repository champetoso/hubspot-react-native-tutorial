import React, { useContext, useEffect } from "react";
import { Button, View, Text } from "react-native";

import { AuthContext } from "../firebase/context";
import { styles, buttons, texts } from "../styles/styles";

export default function HomeScreen({ navigation }) {
  const { user } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      {user ? (
        <Text style={texts.title}>Hi {user.email}</Text>
      ) : (
        <Text style={texts.title}>You haven't logged in</Text>
      )}
      <Button
        style={buttons.primary}
        title="Sign Up"
        onPress={() => navigation.navigate("Sign Up")}
      />
      <Button
        style={buttons.primary}
        title="Sign In"
        onPress={() => navigation.navigate("Sign In")}
      />
      <Button
        style={buttons.primary}
        title="Sign Out"
        onPress={() => navigation.navigate("Sign Out")}
      />
      <Button
        style={buttons.primary}
        title="oAuth"
        onPress={() => navigation.navigate("oAuth")}
      />
      <Button
        style={buttons.primary}
        title="Log Behavior"
        onPress={() => navigation.navigate("Log Behavior")}
      />
      <Button
        style={buttons.primary}
        title="Log Timeline Event"
        onPress={() => navigation.navigate("Log Timeline Event")}
      />
      <Button
        style={buttons.primary}
        title="Request for Quotation"
        onPress={() => navigation.navigate("RFQ")}
      />
    </View>
  );
}
