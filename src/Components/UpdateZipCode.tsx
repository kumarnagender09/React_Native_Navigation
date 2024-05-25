import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const UpdateZipCode = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { zipCode, onUpdate } = route.params as { zipCode: string, onUpdate: (newZip: string) => void };

  const [newZipCode, setNewZipCode] = useState(zipCode);

  const handleUpdate = () => {
    onUpdate(newZipCode);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Current Zip Code: {zipCode}</Text>
      <TextInput
        style={styles.input}
        value={newZipCode}
        onChangeText={setNewZipCode}
        keyboardType="numeric"
      />
      <Button title="Update" onPress={handleUpdate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center'
  },
  label: {
    fontSize: 18,
    marginBottom: 10
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10
  }
});

export default UpdateZipCode;
