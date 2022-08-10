import React from 'react';
import { VscListSelection } from "react-icons/vsc";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
export default function Headerl({ setCollpase, collpase, setMoon, moon, full, setFull }) {

  return (
    <div className={moon ? "dark" : "light"}>
      <div className={collpase ? "admin_Header p-l-240" : "admin_Header p-l-40"}>
        <div className='header-content'>
          <div className="left">
            <button onClick={() => setCollpase(!collpase)}><VscListSelection className="icon" /></button>
          </div>
          <div className="right">
            <ul>
              <li>
                <button><FontAwesomeIcon icon={faGlobe} className="icon" /></button>
              </li>
              <li>
                <button onClick={() => setMoon(!moon)}><FontAwesomeIcon icon={faMoon} className="icon" /></button>
              </li>

              <button><FontAwesomeIcon icon={faBell} className="icon" /></button>
            </ul>
            <h4>Merhaba <b>Kullanıcı</b></h4>
          </div>
        </div>
      </div>
    </div>
  )
}
