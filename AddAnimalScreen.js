import React, { useState } from "react";
import { View, TextInput, Button, Image } from "react-native";
import { useDispatch } from "react-redux";
import { addAnimal } from "../redux/animalSlice";
import * as ImagePicker from "react-native-image-picker";


const AddAnimalScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();

  const pickImage = () => {
    ImagePicker.launchImageLibrary({ mediaType: "photo", selectionLimit: 3 }, response => {
      if (!response.didCancel) {
        setImages(response.assets.map(asset => asset.uri));
      }
    });
  };

  const handleSubmit = () => {
    dispatch(addAnimal({ name, breed, description, images }));
    navigation.goBack();
  };

  return (
    <View>
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Breed" value={breed} onChangeText={setBreed} />
      <TextInput placeholder="Description" value={description} onChangeText={setDescription} />
      <Button title="Pick Images" onPress={pickImage} />
      {images.map((uri, index) => (
        <Image key={index} source={{ uri }} style={{ width: 50, height: 50 }} />
      ))}
      <Button title="Add Animal" onPress={handleSubmit} />
    </View>
  );
};

export default AddAnimalScreen;