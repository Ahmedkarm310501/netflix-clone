import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";

export const GET = async () => {
  try {
    await serverAuth();
    const movies = await prismadb.movie.findMany();
    return NextResponse.json(movies, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Not signed in" }, { status: 401 });
  }
};
