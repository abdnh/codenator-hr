import React, { useState } from 'react';
import Link from 'next/link';
import { BiCommand} from "react-icons/bi";
import { IoIosApps,IoIosContacts,IoIosCopy} from "react-icons/io";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt,faGears, faUser ,faUsers,faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons';
export default function Sidebarl({ collpase,moon,full }) {
  return (
    <div className={moon ? "dark" : "light"}>
      
    <div className="admin_sidebar">
     
        <div className={collpase ? "open" : "close"}>
          <div className="baslik">
            <h2>Codenator</h2>
          </div>
          <div className="liste">
            <ul>
              <li><FontAwesomeIcon icon={faTachometerAlt} style={{ width: "20px", cursor: "pointer" }} />
                <Link href="/admin" >Kontrol Paneli</Link>
              </li>
              
              <li><BiCommand style={{ width: "20px", cursor: "pointer" }}/>
                <Link href="/admin/kategoriler"> Kategoriler</Link>
              </li>
              <li><IoIosApps style={{ width: "20px", cursor: "pointer" }} />
                <Link href="/admin/icerikler"> içerikler</Link>
              </li>
              <li><FontAwesomeIcon icon={faUsers} style={{ width: "20px", cursor: "pointer" }}/>
                <Link href="/admin/kullaniciler"> Kullanıcılar</Link>
              </li>
              <li><FontAwesomeIcon icon={faGears} style={{ width: "20px", cursor: "pointer" }} />
                <Link href="/admin/ayarlar"> Ayarlar</Link>
              </li>
              <li><IoIosContacts style={{ width: "20px", cursor: "pointer" }} />
                <Link href="/admin/basvurulan"> Başvurulan Kişiler</Link>
              </li>
              <li><FontAwesomeIcon icon={faArrowRightFromBracket} style={{ width: "20px", cursor: "pointer" }} />
                <Link href="/admin/login">Çıkış</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
