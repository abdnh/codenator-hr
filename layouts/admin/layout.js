import React, { useState } from 'react';
import Sidebarl  from './sidebar';
import Headerl from './header';
import Body from './body';

export default function Layout({children}) {
  const [collpase, setCollpase] = useState(true);
  const [moon,setMoon] = useState(false);
  const [full,setFull] = useState(false);
  return (
    <div className="layout">
        <Sidebarl setCollpase={setCollpase} collpase={collpase} setMoon={setMoon} moon={moon} full={full} setFull={setFull}/>
        <Headerl setCollpase={setCollpase} collpase={collpase} setMoon={setMoon} moon={moon} full={full} setFull={setFull}/>
        <Body collpase={collpase} moon={moon}>
          {children }
        </Body>
    </div>
  )
}
