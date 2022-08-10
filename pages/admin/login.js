import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
export default function Login() {
    return (
        <div class="admin_login">
            <div class="screen">
                <div class="screen__content">
                    <form class="login">
                        <h2>Giriş Yap</h2>
                        <div class="user-box">
                            <span className="icon"><FontAwesomeIcon icon={faEnvelope} /></span>
                            <input type="email" class="form-control" placeholder='Eposta' id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        </div>
                        <div class="user-box">
                            <span class="icon"><FontAwesomeIcon icon={faLock} /></span>
                            <input type="password" class="form-control" placeholder='Şifre' id="exampleInputPassword1" required />
                        </div>
                        <button className="bttn">Giriş Yap</button>
                        <a href="/admin/register">Hesabınız Yoksa?Yeni Hesap Oluşturmak için Tıklayınız</a>
                    </form>
                </div>
                <div class="screen__background">
                    <span class="screen__background__shape screen__background__shape4"></span>
                    <span class="screen__background__shape screen__background__shape3"></span>
                    <span class="screen__background__shape screen__background__shape2"></span>
                    <span class="screen__background__shape screen__background__shape1"></span>
                </div>
            </div>
        </div>
    )
}