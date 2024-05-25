import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import states from '../assets/states.json';

const StateList = () => {
  const navigation = useNavigation();

  const handleStatePress = (state: string) => {
    navigation.navigate("ZipCodeList", { state });
  };

  return (
    <FlatList
      data={Object.keys(states)}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.item}
          onPress={() => handleStatePress(item)}
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

export default StateList;
