import Image from "next/image";
import { CHARACTER } from "../features/types/charactertypes";
import { CircleIcon, MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import {
  useCharactersStore,
  useMyCharactersStore,
} from "../features/store/charactersStore";

interface CCardProps {
  character: CHARACTER;
}

export default function CCard({ character }: CCardProps) {
  const { addMyCharacter, removeMyCharacter, myCharacters } =
    useMyCharactersStore();
  const { characters } = useCharactersStore();

  const addItem = (character: CHARACTER) => {
    if (!myCharacters.includes(character)) {
      addMyCharacter(character);
    }
    console.log(character, myCharacters, "test");
  };

  const removeItem = (character: CHARACTER) => {
    const { id } = character;
    removeMyCharacter(id);
  };

  return (
    <div className="w-full hover:bg-fuchsia-700 rounded-lg shadow-md overflow-hidden flex relative">
      {myCharacters.includes(character) ? (
        <MinusCircleIcon
          onClick={() => removeItem(character)}
          className="absolute top-2 right-2 text-fuchsia-300 rounded-full hover:text-fuchsia-500 cursor-pointer sroke-[2px] hover:scale-110 transition-all"
          size={32}
        />
      ) : (
        <PlusCircleIcon
          onClick={() => addItem(character)}
          className="absolute top-2 right-2 text-fuchsia-300 rounded-full hover:text-fuchsia-500 cursor-pointer sroke-[2px] hover:scale-110 transition-all"
          size={32}
        />
      )}

      <Image
        src={character.image}
        alt="Rick and Morty Logo"
        width={230}
        height={230}
      />
      <div className="py-3 flex-1 pl-4 bg-[rgba(255,255,255,0.13)]">
        <div className="text-white text-3xl mb-2">{character.name}</div>
        <div className="flex gap-3 items-center mb-4">
          <CircleIcon
            size={18}
            className={
              character.status === "Alive"
                ? "[svg]:fill-green-500 [svg]:stroke-green-500"
                : "[svg]:fill-red-500 [svg]:stroke-red-500"
            }
          />
          <div className="text-white">
            {character.status} - {character.species}
          </div>
        </div>
        <div className="text-gray-300">last seen:</div>
        <div className="text-white text-xl mb-2">{character.location.name}</div>
        <div className="text-gray-300">origin:</div>
        <div className="text-white">{character.origin.name}</div>
      </div>
    </div>
  );
}
