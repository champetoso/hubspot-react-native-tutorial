import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../containers/homeScreen";
import SignInScreen from "../containers/signInScreen";
import SignUpScreen from "../containers/signUpScreen";
import SignOutScreen from "../containers/signOutScreen";
import LogBehaviorScreen from "../containers/logBehaviorScreen";
import LogLegEventScreen from "../containers/logLegEventScreen";
import RfqScreen from "../containers/rfqScreen";

const Stack = createNativeStackNavigator();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sign In" component={SignInScreen} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
        <Stack.Screen name="Sign Out" component={SignOutScreen} />
        <Stack.Screen name="Log Behavior" component={LogBehaviorScreen} />
        <Stack.Screen name="Log Timeline Event" component={LogLegEventScreen} />
        <Stack.Screen name="RFQ" component={RfqScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
