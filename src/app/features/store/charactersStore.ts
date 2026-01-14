import { create } from "zustand";
import { CHARACTER } from "../types/charactertypes";

interface MYCHARACTERSTATE {
  myCharacters: CHARACTER[];
  addMyCharacter: (character: CHARACTER) => void;
  removeMyCharacter: (id: string) => void;
  setMyCharacters: (myCharacters: CHARACTER[]) => void;
}

/** This state stores selected characters */
export const useMyCharactersStore = create<MYCHARACTERSTATE>((set) => ({
  myCharacters: [],
  setMyCharacters: (myCharacters: CHARACTER[]) => set({ myCharacters }),
  addMyCharacter: (character) => {
    set((state) => ({
      myCharacters: [...state.myCharacters, character],
    }));
  },
  removeMyCharacter: (id) =>
    set((state) => ({
      myCharacters: state.myCharacters.filter((char) => char.id !== id),
    })),
}));
