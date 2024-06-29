import { handleUpload } from "@vercel/blob/client";
import { NextResponse } from "next/server";
import { imageTypes } from "@/app/lib/utils";

export async function POST(req) {
  const body = await req.json();

  try {
    const res = await handleUpload({
      body,
      req,
      onBeforeGenerateToken: async (pathname, clientPayload) => {
        return {
          allowedContentTypes: imageTypes,
          tokenPayload: JSON.stringify({})
        }
      },
      onUploadCompleted: async ({ blob, tokenPayload }) => {
        //console.log("h");
      }
    });

    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 400 }
    );
  }
}