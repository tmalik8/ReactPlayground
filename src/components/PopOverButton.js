import React from 'react';
import Popover from 'react-bootstrap/Popover';

const PopOver = ({title, text, children}) => {
  return (
    <Popover id="popover-basic">
      <Popover.Title as="h3">{title}</Popover.Title>
      <Popover.Content>
      <strong>{text}</strong>
      {children}
      </Popover.Content>
    </Popover>
  );
};
  export default PopOver;