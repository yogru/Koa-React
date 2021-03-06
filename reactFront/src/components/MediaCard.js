import React from 'react';
import { Media } from 'reactstrap';
import {FONT } from './MyStyledTages';

const MediaCard = ({children, headTag, minWidth='32px', imgSrc, })=>{
  // /image/face.png
   const style = {};
  headTag = headTag || <FONT face="Hanna" size="20px" weight="bold"> HEAD </FONT>;
  style.minWidth= minWidth;
     return (
   <Media>
      <Media left>
        <Media style={ style } object src={imgSrc} alt="My PlaceHolder Picture" />
      </Media>
      <Media body middle>
            <Media heading>{headTag}</Media>
             {children}
      </Media> 

  </Media>
    );
}

export default MediaCard;