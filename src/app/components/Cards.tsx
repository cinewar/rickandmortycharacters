"use client";

import CCard from "./CCard";

import { useCharactersStore } from "../features/store/charactersStore";

export function Cards() {
  const { characters } = useCharactersStore();

  return (
    <div className="mb-8">
      <div className="grid grid-cols-2 justify-center gap-6 px-8 my-8">
        {characters.map((character) => (
          <CCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}
