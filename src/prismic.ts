import { createClient } from "@prismicio/client";

const client = createClient(import.meta.env.PRISMIC_REPOSITORY);

export async function getHomePage() {
  return client.getSingle("homepage");
}

export async function getAboutPage() {
  return client.getSingle("about");
}

export async function getBlogPage() {
  return client.getSingle("blog");
}

export async function getBlogPostPage(uid: string) {
  return client.getByUID("blog_post", uid);
}

export async function getContactsPage() {
  return client.getSingle("contacts");
}

export async function getPrivacyPolicyPage() {
  return client.getSingle("privacy_policy");
}
