"use server";

import { copy, del } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getSession } from "@/app/lib/utils";
import { cookies } from "next/headers";

export async function deleteImage(formData) {
  await del(formData.get("url"));
  revalidatePath("/dashboard/images");
}

export async function signIn(_, formData) {
  if (formData.get("password") == process.env.WRITE_PASSWORD || formData.get("password") == process.env.READ_PASSWORD) {
    const session = await getSession(cookies());
    session.signedIn = true;
    if (formData.get("password") == process.env.WRITE_PASSWORD) {
      session.write = true;
    } else {
      session.write = false;
    }
    await session.save();
    redirect("/dashboard");
  } else {
    return "Incorrect password!";
  }
}

export async function signOut() {
  const session = await getSession(cookies());
  await session.destroy();
  redirect("/");
}