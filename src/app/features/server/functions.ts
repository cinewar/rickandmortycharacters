"use server";

import { CHARACTER } from "../types/charactertypes";

interface FetcherParams {
  gender?: string;
  status?: string;
}

export async function fetcher({
  gender,
  status,
}: FetcherParams): Promise<{ results: CHARACTER[] }> {
  console.log("Fetching characters with:", { gender, status });
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?gender=${gender}&status=${status}`
  );
  return response.json();
}
