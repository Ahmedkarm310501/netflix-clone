import { NextRequest, NextResponse } from "next/server";
import { without } from "lodash";

import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";

export async function POST(req: NextRequest) {
  console.log("POST");
  try {
    const { currentUser } = await serverAuth();

    const { movieId } = await req.json();

    const existingMovie = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!existingMovie) {
      throw new Error("Invalid ID");
    }

    const user = await prismadb.user.update({
      where: {
        email: currentUser.email || "",
      },
      data: {
        favorites: {
          create: {
            movieId: movieId,
          },
        },
      },
      include: {
        favorites: true,
      },
    });

    return NextResponse.json(user, { status: 200 });
  } catch (err) {
    NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { currentUser } = await serverAuth();

    const { movieId } = await req.json();

    const existingMovie = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!existingMovie) {
      throw new Error("Invalid ID");
    }

    // const updatedUser = await prismadb.user.update({
    //   where: {
    //     email: currentUser.email || "",
    //   },
    //   data: {
    //     favorites: {
    //       delete: {
    //         id: movieId,
    //       },
    //     },
    //   },
    //   include: {
    //     favorites: true,
    //   },
    // });
    const movies = await prismadb.favorite.delete({
      where: {
        userId_movieId: {
          userId: currentUser.id,
          movieId: movieId,
        },
      },
      include: {
        movie: true,
      },
    });

    return NextResponse.json(movies, { status: 200 });
  } catch (err) {
    NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const { currentUser } = await serverAuth();

    const movies = await prismadb.favorite.findMany({
      where: {
        userId: currentUser.id,
      },
      include: {
        movie: true,
      },
    });

    return NextResponse.json(movies, { status: 200 });
  } catch (err) {
    NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

/**
try {
    if (req.method !== 'GET') {
      return res.status(405).end();
    }

    const { currentUser } = await serverAuth(req, res);

    const favoritedMovies = await prismadb.movie.findMany({
      where: {
        id: {
          in: currentUser?.favoriteIds,
        }
      }
    });

    return res.status(200).json(favoritedMovies);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
 */
