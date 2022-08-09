import React from 'react';
import Navbarl  from './navbar';
import Headerl from './header';

export default function Layout({children}) {
  return (
    <div className="layout">
        <Navbarl/>
        <Headerl/>
        {children}
    </div>
  )
}
