import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";

export async function GET(_: any, { params }: { params: { movieId: string } }) {
  await serverAuth();
  console.log(params);
  const { movieId } = params;
  if (!movieId)
    return NextResponse.json({ error: "Missing movieId" }, { status: 400 });

  const movie = await prismadb.movie.findUnique({
    where: {
      id: parseInt(movieId),
    },
  });
  if (!movie)
    return NextResponse.json({ error: "Movie not found" }, { status: 404 });

  return NextResponse.json(movie, { status: 200 });
}
