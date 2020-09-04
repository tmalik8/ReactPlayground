import React from 'react';
import { BsFillAlarmFill } from "react-icons/bs";


const Icon = ({icon}) => {

  // async function getIcon(name) {
  //   let type = name.substring(0,2);
  //   const icon  =  await import('react-icons/' + type);
  //   return icon;
  // }

  return (
    <div>
      <span onClick={() => icon.func}>
        {/* {getIcon(icon.name)} */}
        <BsFillAlarmFill/>
      </span>
    </div>
  );
};

export default Icon;