"use server";

import { del } from "@vercel/blob";
import { revalidatePath } from "next/cache";

export async function deleteImage(formData) {
  await del(formData.get("url"));
  revalidatePath("/dashboard/images");
}