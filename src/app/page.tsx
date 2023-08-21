import Billboard from "@/components/Billboard";
import InfoModal from "@/components/InfoModal";
import InfoModelContainter from "@/components/InfoModelContainter";
import MovieList from "@/components/MovieList";
import MoviesContainer from "@/components/MoviesContainer";
import NavBar from "@/components/NavBar";
import UserCard from "@/components/UserCard";
import useMovies from "@/hooks/useMovieList";
import getSession from "@/lib/getSession";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getSession();
  console.log(session);
  if (!session) {
    redirect("/auth");
  }

  return (
    <>
      <InfoModelContainter />
      <NavBar />
      <Billboard />
      <MoviesContainer />
    </>
  );
}
