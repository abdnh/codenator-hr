import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
export default function Login() {
    return (
        <div className="admin_login">
            <div className="screen">
                <div className="screen__content">
                    <form className="login">
                        <h2>Giriş Yap</h2>
                        <div className="user-box">
                            <span className="icon"><FontAwesomeIcon icon={faEnvelope} /></span>
                            <input type="email" className="form-control" placeholder='Eposta' id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        </div>
                        <div className="user-box">
                            <span className="icon"><FontAwesomeIcon icon={faLock} /></span>
                            <input type="password" className="form-control" placeholder='Şifre' id="exampleInputPassword1" required />
                        </div>
                        <button className="bttn">Giriş Yap</button>
                        <a href="/admin/register">Hesabınız Yoksa?Yeni Hesap Oluşturmak için Tıklayınız</a>
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