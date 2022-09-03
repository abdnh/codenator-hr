import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import useUser from "../../lib/useUser";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    // TODO: redirect to previous page
    const { mutateUser } = useUser({
        redirectTo: '/admin',
        redirectIfFound: true,
    });

    async function handleLogin(e) {
        e.preventDefault();
        const body = {
            email: email,
            password: password,
        }
        const response = await fetch("/api/login-admin", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
            
        });
        const user = await response.json();
        mutateUser(user);
        if (!response.ok) {
            setErrorMessage(response.statusText);
        }
        if (!user.loggedIn) {
            setErrorMessage("Hatalı giriş");
        }
    }

    return (
        <div className="admin_login">
            <div className="screen">
                <div className="screen__content">
                    <form className="login" onSubmit={handleLogin}  >
                        <h2>Giriş Yap</h2>
                        <div className="user-box">
                            <span className="icon"><FontAwesomeIcon icon={faEnvelope} /></span>
                            <input type="email"  value={email} onInput={(e) => setEmail(e.target.value)} className="form-control" placeholder='Eposta' id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        </div>
                        <div className="user-box">
                            <span className="icon"><FontAwesomeIcon icon={faLock} /></span>
                            <input type="password" value={password} onInput={(e) => setPassword(e.target.value)} className="form-control" placeholder='Şifre' id="exampleInputPassword1" required />
                        </div>
                        <button className="bttn" >Giriş Yap</button>
                        {errorMessage && <p className="error">{errorMessage}</p>}
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