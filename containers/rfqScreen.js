import React, { useEffect, useState } from "react";
import { View, TextInput, Button, Alert, Text, FlatList } from "react-native";

import { auth, loadProducts, createCRMDeal, createCRMLineItem, associateCRMLineItem } from "../firebase/config";
import { styles, buttons, inputs, texts, lists } from "../styles/styles";

export default function RfqScreen({ navigation }) {
  const [products, setProducts] = useState(null);
  const [loadedProducts, isProductsLoaded] = useState(false);

  useEffect(() => {
    if (!loadedProducts) {
      console.log("Loading products...");
      loadProducts()
        .then((result) => {
          setProducts(result.data.hubspot.results);
          isProductsLoaded(true);
        })
        .catch((error) => {
          const code = error.code;
          const message = error.message;
          const details = error.details;
          console.log("Function error code: ", code);
          console.log("Function error msg: ", message);
          console.log("Function error details: ", details);
        });
    }
  });

  const createDeal = (text, id) =>{
    
  }

  const createLineItems = (text, id) => {

  };

  const associateLineItems = () => {

  };

  const onSignUpPress = () => {
    const properties = {
      email: email,
      firstname: firstname,
      lastname: lastname,
    };
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={lists.row}>
            <Text>{item.properties.name}</Text>
            <TextInput
              style={lists.textInput}
              onChangeText={(text) => {
                console.log(text, item.id);
              }}
              placeholder="0"
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.footer}>
        <Button
          title="Request for quotation"
          onPress={onSignUpPress}
          style={buttons.primary}
        />
      </View>
    </View>
  );
}
