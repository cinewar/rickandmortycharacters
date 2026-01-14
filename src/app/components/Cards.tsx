"use client";

import CCard from "./CCard";

import { useQueryState } from "nuqs";

import { useGetCharacters } from "../features/hooks/hooks";

export function Cards() {
  const [gender] = useQueryState("gender", {
    defaultValue: "",
    shallow: false,
  });
  const [status] = useQueryState("status", {
    defaultValue: "",
    shallow: false,
  });
  const { characters } = useGetCharacters({ gender, status });
  console.log(gender, status, "gender and status");

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
