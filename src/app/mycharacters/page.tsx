"use client";

import CCard from "../components/CCard";
import { useMyCharactersStore } from "../features/store/charactersStore";

export default function MyCharacters() {
  const { myCharacters } = useMyCharactersStore();
  return (
    <div className="mb-8">
      <div className="grid grid-cols-2 justify-center gap-6 px-8 my-8">
        {myCharacters.map((character) => (
          <CCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}
