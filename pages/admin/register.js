import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope} from '@fortawesome/free-solid-svg-icons';
export default function Register() {
    return (
         <div className="admin_register_container">
         <div className="screen">
             <div className="screen__content">
                 <form className="register">
                     <h2>Kayıt Oluştur</h2>
                     <div className="user-box">
                            <span className="icon"><FontAwesomeIcon icon={faUser} /></span>
                            <input type="text" className="form-control" id="Name" placeholder='Kullanıcı Adı' aria-describedby="emailHelp" required/>
                        </div>
                 <div className="user-box">
                         <span className="icon"><FontAwesomeIcon icon={ faEnvelope} /></span>
                         <input type="email" className="form-control" placeholder='Eposta' id="exampleInputEmail1" aria-describedby="emailHelp" required />
                     </div>
                     <div className="user-box">
                         <span className="icon"><FontAwesomeIcon icon={faLock} /></span>
                         <input type="password" className="form-control" placeholder='Şifre' id="exampleInputPassword1" required />
                     </div>
                     <button className="bttn">Giriş Yap</button>
                     <Link href="/admin/login">Hesabınız varmı?Giriş Yap</Link>
                 </form>
             </div>
             <div className="screen__background">
                 <span className="screen__background__shape screen__background__shape4"></span>
                 <span className="screen__background__shape screen__background__shape3"></span>
                 <span className="screen__background__shape screen__background__shape2"></span>
                 <span className="screen__background__shape screen__background__shape1"></span>
             </div>
         </div>
     </div>
    )
}