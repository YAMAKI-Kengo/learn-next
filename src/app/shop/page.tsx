import { List, ListItem } from '@chakra-ui/react'
import React from 'react'

const Shop = async () => {
  const data: any[] = await (await fetch('api/shop')).json()

  return (
    <div>
      <List>
        {data.map((shop, index) => {
          <ListItem key={shop.id}>
            {shop.name}
          </ListItem>
        })}
      </List>
    </div>
  )
}

export default Shop
