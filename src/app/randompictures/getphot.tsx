"use server";

export const getRandomPhoto = async () => {
  const key = process.env.UNSPLASH_ACCESS_KEY;
  const res = await fetch(
    "https://api.unsplash.com/photos/random?client_id=" + key,
  );
  return res.json();
};
