import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../server/functions";

interface SearchParams {
  gender?: string;
  status?: string;
}

// interface UseGetCharactersResult {
//   characters: CHARACTER[];
// }

export function useGetCharacters({ gender, status }: SearchParams) {
  const { data } = useQuery({
    queryKey: ["characters"],
    queryFn: () => fetcher({ gender, status }),
  });
  const characters = data?.results || [];

  return { characters };
}
