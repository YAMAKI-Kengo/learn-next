import { List, ListItem } from "@chakra-ui/react";
import React from "react";

async function getShops() {
  const res = await fetch("http://localhost:3000/api/shop");
  const data: Shop[] = await res.json();
  return data;
}

const Shop = async () => {
  const data = await getShops();

  return (
    <div>
      <List>
        {data.map((shop, index) => (
          <ListItem key={shop.id}>{shop.name}</ListItem>
        ))}
      </List>
    </div>
  );
};

export default Shop;
