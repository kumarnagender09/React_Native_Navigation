import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import states from "../assets/states.json";

const ZipCodeList = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { state } = route.params as { state: string };
  const initialZipCodes = states[state];
  const [zipCodes, setZipCodes] = useState(initialZipCodes);

  const handleZipCodePress = (zipCode: string) => {
    navigation.navigate("UpdateZipCode", {
      zipCode,
      onUpdate: (newZipCode: string) => {
        setZipCodes((prevZipCodes) =>
          prevZipCodes.map((z) => (z === zipCode ? newZipCode : z))
        );
      },
    });
  };

  return (
    <FlatList
      data={zipCodes}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.item}
          onPress={() => handleZipCodePress(item)}
        >
          <Text style={styles.text}>{item}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  text: {
    fontSize: 18,
  },
});

export default ZipCodeList;
