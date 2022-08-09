import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt,faRocket,faBookOpen,faHeart } from '@fortawesome/free-solid-svg-icons';

export default function Navbarl() {
  return (
    <div className="admin_navbar">
      <div>
      <div className="baslik">
            <h2>Akış Çizelgesi</h2>
        </div>
        <div className="liste">
          <ul>
              <li><FontAwesomeIcon icon={faTachometerAlt} style={{width:"30px",cursor:"pointer"}}/>
                <Link href="/akis/1">Gösterge Paneli</Link>
                </li>
              <li><FontAwesomeIcon icon={faRocket} style={{width:"30px",cursor:"pointer"}}/>
                <Link href="/akis/2">keşfetmek</Link>
                </li>
              <li><FontAwesomeIcon icon={faBookOpen} style={{width:"30px",cursor:"pointer"}}/>
                <a href="/akis/3">Kütüphane</a>
              </li>
              <li><FontAwesomeIcon icon={faHeart} style={{width:"30px",cursor:"pointer"}}/>
                <Link href="/akis/4">Favori</Link>
              </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
