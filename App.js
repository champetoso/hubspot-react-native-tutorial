import React, { useEffect } from "react";

import { AuthProvider } from "./firebase/context";

import MainNavigation from "./navigation/mainNavigation";

export default function App() {
  useEffect(() => {
    //console.log("App.js Initializing...", auth);
  });
  return (
    <AuthProvider>
      <MainNavigation />
    </AuthProvider>
  );
}
