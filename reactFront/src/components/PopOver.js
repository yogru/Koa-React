import React, { useState } from 'react';
import { Popover, PopoverBody } from 'reactstrap';

const modifiers = {
  preventOverflow: {
    enabled: false,
  },
  flip: {
    enabled: false,
  },
  hide:{
    enabled: false
  }
};

const PopOver = ({children , target}) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);
  return (
    <div>
      <Popover placement="bottom" isOpen={ popoverOpen } modifiers={modifiers} 
      target={target} toggle={toggle}>
            <PopoverBody>
                  {children}
             </PopoverBody>
      </Popover>
    </div>
  );
}

export default PopOver;