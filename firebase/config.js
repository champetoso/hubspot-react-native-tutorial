import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFunctions,
  connectFunctionsEmulator,
  httpsCallable,
} from "firebase/functions";
//import "firebase/storage";
//import "@react-native-firebase/auth";

import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
} from "@env";

const config = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
};

const app = initializeApp(config);

const auth = getAuth();

const functions = getFunctions(app);
//if (__DEV__) {
connectFunctionsEmulator(functions, "localhost", 5001); //For testing locally
//}

const createCRMContact = httpsCallable(functions, "createCRMContact");
const sendCBE = httpsCallable(functions, "sendCBE");
const sendLegEvent = httpsCallable(functions, "sendLegEvent");
const loadProducts = httpsCallable(functions, "loadProducts");
const createCRMDeal = httpsCallable(functions, "createCRMDeal");
const createCRMLineItem = httpsCallable(functions, "createCRMLineItem");
const associateCRMLineItem = httpsCallable(functions, "createCRMLineItem");
const helloWorld = httpsCallable(functions, "helloWorld");

export default app;
export {
  auth,
  functions,
  createCRMContact,
  sendCBE,
  sendLegEvent,
  loadProducts,
  helloWorld,
  createCRMDeal,
  createCRMLineItem,
  associateCRMLineItem,
};
