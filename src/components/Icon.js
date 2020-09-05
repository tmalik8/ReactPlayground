import React from 'react';
import { Button } from 'react-bootstrap';

const Icon = ({icon}) => {
  return (
    <div>
      <Button variant="Light" onClick={() => icon.func()}>
        {icon.icon}
      </Button>
    </div>
  );
};

export default Icon;