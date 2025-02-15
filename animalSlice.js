import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  animals: [],
};

const animalSlice = createSlice({
  name: "animals",
  initialState,
  reducers: {
    addAnimal: (state, action) => {
      state.animals.push({ id: Date.now().toString(), ...action.payload });
    },
    removeAnimal: (state, action) => {
      state.animals = state.animals.filter(animal => animal.id !== action.payload);
    },
    editAnimal: (state, action) => {
      const index = state.animals.findIndex(animal => animal.id === action.payload.id);
      if (index !== -1) {
        state.animals[index] = action.payload;
      }
    },
  },
});

export const { addAnimal, removeAnimal, editAnimal } = animalSlice.actions;
export default animalSlice.reducer;