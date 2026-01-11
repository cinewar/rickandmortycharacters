import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Cards } from "./components/Cards";
import { fetcher } from "./features/server/functions";

import { getQueryClient } from "./features/server/get-query-client";

import { loadSearchParams } from "./features/server/search-params";
import type { SearchParams } from "nuqs/server";
import { Filters } from "./components/Filters";

type PageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function Home({ searchParams }: PageProps) {
  const { gender, status } = await loadSearchParams(searchParams);

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["characters"],
    queryFn: () => fetcher({ gender, status }),
  });

  return (
    <div className="">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <div className="flex justify-end px-8">
          <div>
            <div className="text-fuchsia-500 text-2xl border-b-2 border-fuchsia-700 mb-2 text-center">
              sort it
            </div>
            <Filters />
          </div>
        </div>
        <Cards />
      </HydrationBoundary>
    </div>
  );
}
