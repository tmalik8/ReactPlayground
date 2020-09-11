import React from 'react';
import { Button } from 'react-bootstrap';

const Icon = ({onClick, children}) => {
  return (
    <div>
      <Button variant="Light" onClick={onClick}>
        {children}
      </Button>
    </div>
  );
};

export default Icon;