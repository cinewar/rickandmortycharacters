import { create } from "zustand";
import { CHARACTER } from "../types/charactertypes";

interface CHARACTERSTATE {
  characters: CHARACTER[];
  addCharacter: (character: CHARACTER) => void;
  removeCharacter: (id: string) => void;
  setCharacters: (characters: CHARACTER[]) => void;
  myCharacters: CHARACTER[];
  addMyCharacter: (character: CHARACTER) => void;
  removeMyCharacter: (id: string) => void;
  setMyCharacters: (myCharacters: CHARACTER[]) => void;
}

interface MYCHARACTERSTATE {
  myCharacters: CHARACTER[];
  addMyCharacter: (character: CHARACTER) => void;
  removeMyCharacter: (id: string) => void;
  setMyCharacters: (myCharacters: CHARACTER[]) => void;
}

/** this state stores coming characters from server */
export const useCharactersStore = create<CHARACTERSTATE>((set) => ({
  characters: [],
  setCharacters: (characters: CHARACTER[]) => set({ characters }),
  addCharacter: (character) =>
    set((state) => ({
      characters: [...state.characters, character],
    })),
  removeCharacter: (id) =>
    set((state) => ({
      characters: state.characters.filter((char) => char.id !== id),
    })),
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
