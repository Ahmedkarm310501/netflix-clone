import useSwr from "swr";
import fetcher from "@/lib/fetcher";

const useFavorites = () => {
  const { data, error, isLoading, mutate } = useSwr(
    "/api/favourites",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  const favourites = data?.map((movie: any) => movie.movie);
  return {
    favourites,
    error,
    isLoading,
    mutate,
  };
};

export default useFavorites;
