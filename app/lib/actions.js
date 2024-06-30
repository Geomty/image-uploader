"use server";

import { del } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getSession } from "@/app/lib/utils";
import { cookies } from "next/headers";

export async function deleteImage(formData) {
  await del(formData.get("url"));
  revalidatePath("/dashboard/images");
}

export async function signIn(_, formData) {
  if (formData.get("password") == process.env.PASSWORD) {
    const session = await getSession(cookies());
    session.signedIn = true;
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