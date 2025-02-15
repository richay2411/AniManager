import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";
import { editAnimal } from "../redux/animalSlice";

const EditAnimalScreen = ({ route, navigation }) => {
  const { animal } = route.params;
  const [name, setName] = useState(animal.name);
  const [breed, setBreed] = useState(animal.breed);
  const [description, setDescription] = useState(animal.description);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(editAnimal({ ...animal, name, breed, description }));
    navigation.goBack();
  };

  return (
    <View>
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Breed" value={breed} onChangeText={setBreed} />
      <TextInput placeholder="Description" value={description} onChangeText={setDescription} />
      <Button title="Save Changes" onPress={handleSubmit} />
    </View>
  );
};

export default EditAnimalScreen;
