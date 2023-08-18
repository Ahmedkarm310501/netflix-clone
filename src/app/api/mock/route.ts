import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";
import movies from "../../../../movies.json";

export const GET = async () => {
  //   const movies = prisma.movie.findMany();
  // add movies to db
  //   const data = JSON.parse(movies);
  const data = await prisma.movie.createMany({
    data: movies,
    skipDuplicates: true,
  });

  return NextResponse.json(data, { status: 200 });
};
