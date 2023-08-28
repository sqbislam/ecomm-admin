import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Get user id from clerk auth
    const { userId } = auth();
    const body = await req.json();

    const { name } = body;

    // If unauthorized return error
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // If no name return error
    if (!name) {
      return new NextResponse("Name is Required!", { status: 400 });
    }

    const store = await prismadb.store.create({
      data: {
        name,
        userId,
      },
    });

    return NextResponse.json(store);
  } catch (err) {
    console.log("[STORES_POST]", err);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
