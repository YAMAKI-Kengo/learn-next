"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

import Button from "@/components/button";

import { getRandomPhoto } from "./getphot";

const Page = () => {
  const [image, setImage] = useState("/placeholder-image.jpg");

  const loadRandomPhoto = async () => {
    const photo = await getRandomPhoto();
    setImage(photo.urls.small);
    console.log(photo);
  };

  useEffect(() => {
    loadRandomPhoto();
  }, []);

  const handleClick = () => {
    loadRandomPhoto();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Image src={image} alt="" width={400} height={400} />
      <Button onClick={handleClick} style={{ margin: "8px" }}>
        change
      </Button>
    </div>
  );
};

export default Page;
