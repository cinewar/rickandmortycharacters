import { createLoader, parseAsString } from "nuqs/server";
// Describe your search params, and reuse this in useQueryStates / createSerializer:
export const charactersSearchParams = {
  gender: parseAsString.withDefault(""),
  status: parseAsString.withDefault(""),
};
export const loadSearchParams = createLoader(charactersSearchParams);
