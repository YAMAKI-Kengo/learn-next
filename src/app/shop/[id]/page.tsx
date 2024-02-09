import { List, ListItem } from "@chakra-ui/react";
import React from "react";

// idを指定してデータを取得する
const getShop = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/shop/${id}`);
  const data: Shop = await res.json();
  return data;
};

// 全部取得する
async function getShops() {
  const res = await fetch("http://localhost:3000/api/shop");
  const data: Shop[] = await res.json();
  return data;
}

export async function generateStaticParams() { // idを自動生成してくれる？？　URLをデータに基づいて勝手にはやしてくれる
  const data = await getShops();
  return data.map((value) => ({
    id: value.id,
  }));
}

const Page = async ({ params: { id } }: { params: { id: string } }) => {
  const data = await getShop(id);
  console.log(data)
  return (
    <div>
      <List>
        <ListItem>name: {data.name}</ListItem>
        <ListItem>address: {data.address}</ListItem>
        <ListItem>description: {data.description}</ListItem>
      </List>
    </div>
  );
};

export default Page;