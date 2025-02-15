import React from "react";
import { View, Text, FlatList, Button, Image, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { removeAnimal } from "../redux/animalSlice";

const HomeScreen = ({ navigation }) => {
  const animals = useSelector(state => state.animals.animals);
  const dispatch = useDispatch();

  return (
    <View>
      <Button title="Add Animal" onPress={() => navigation.navigate("AddAnimal")} />
      <FlatList
        data={animals}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1 }}>
            {item.images.length > 0 && (
              <Image source={{ uri: item.images[0] }} style={{ width: 100, height: 100 }} />
            )}
            <Text>Name: {item.name}</Text>
            <Text>Breed: {item.breed}</Text>
            <Text>Description: {item.description}</Text>
            <TouchableOpacity onPress={() => navigation.navigate("EditAnimal", { animal: item })}>
              <Text style={{ color: "blue" }}>Edit</Text>
            </TouchableOpacity>
            <Button title="Remove" onPress={() => dispatch(removeAnimal(item.id))} />
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;
