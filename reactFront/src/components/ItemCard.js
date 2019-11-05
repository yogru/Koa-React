import React from 'react'
import { Item } from 'semantic-ui-react'


const ItemCard = (props)=>{
  const {header,src,meta,children,extra } = props;
  
    return (
        <Item>
        <Item.Image src={src} />
          <Item.Content>
              <Item.Header >{header}</Item.Header>
           <Item.Meta>
                  {meta}
            </Item.Meta>
            <Item.Description>
                  {children}
            </Item.Description>
            <Item.Extra>
                {extra}
            </Item.Extra>
          </Item.Content>
        </Item>
    );
}

export default ItemCard