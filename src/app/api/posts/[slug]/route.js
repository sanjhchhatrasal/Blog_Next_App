

import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req, {params}) => {

    const {slug} = params

  try {
    const post = await prisma.post.findUnique({
        where: {slug},
        include: {user:true}
    });
    
    return NextResponse.json(post, { status: 200 });

  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
};
