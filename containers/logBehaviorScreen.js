import React, { useState } from "react";
import { View, Text, Button } from "react-native";

import { auth, sendCBE } from "../firebase/config";
import { styles, buttons, texts } from "../styles/styles";

export default function LogBehaviorScreen({ navigation }) {
  const [logStatus, setStatus] = useState();

  const onButtonPress = (city, country) => {
    setStatus("Logging your behavior...");

    const data = {
      eventName: "pe20414112_cbe1",
      email: auth.currentUser.email,
      properties: {
        hs_city: city,
        hs_country: country,
        dp_city: city,
        city: city,
      },
      occurredAt: new Date(),
    };

    sendCBE(data)
      .then((result) => {
        const data = result.data.hubspot;
        console.log("Function result: ", data);
        setStatus(data);
      })
      .catch((error) => {
        const code = error.code;
        const message = error.message;
        const details = error.details;
        console.log("Function error code: ", code);
        console.log("Function error msg: ", message);
        console.log("Function error details: ", details);
        setStatus(message);
      });
  };

  return (
    <View style={styles.container}>
      <Button
        style={buttons.primary}
        title="London"
        onPress={() => onButtonPress("London", "United Kingdom")}
      />
      <Button
        style={buttons.primary}
        title="New York"
        onPress={() => onButtonPress("New York", "United States")}
      />
      <Button
        style={buttons.primary}
        title="Tokio"
        onPress={() => onButtonPress("Tokio", "Japan")}
      />
      <Text style={texts.message}>{logStatus}</Text>
    </View>
  );
}
