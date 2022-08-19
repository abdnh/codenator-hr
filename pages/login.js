import { useState } from "react";

import AccessTabs from '../layouts/AccessTabs';
import EntryLayout from "../layouts/EntryLayout";
import useUser from "../lib/useUser";


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    // TODO: redirect to previous page
    const { mutateUser } = useUser({
        redirectTo: '/',
        redirectIfFound: true,
    });

    async function handleLogin(event) {
        event.preventDefault();
        const body = {
            email: email,
            password: password,
        }
        const response = await fetch("/api/login", {
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
        <EntryLayout activeTab="login">
            <AccessTabs activeTab="login" onSubmit={handleLogin}>
                <div className="login">
                    <h2>Hesabınıza Giriş Yapınız</h2>
                    <div className="user-box">
                        <input type="email" value={email} onInput={(e) => setEmail(e.target.value)} className="input" placeholder='' id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        <label htmlFor="exampleInputEmail1" className="label">Eposta</label>
                    </div>
                    <div className="user-box">
                        <input type="password" value={password} onInput={(e) => setPassword(e.target.value)} className="input" id="exampleInputPassword1" required />
                        <label htmlFor="exampleInputPassword1" className="label">Şifre</label>
                    </div>
                    <button className="bttn">Giriş Yap</button>
                    {errorMessage && <p className="error">{errorMessage}</p>}
                    <a href="#" className="text">Bilgilerinizi mi unutunuz?</a>
                </div>
            </AccessTabs>
        </EntryLayout>
    );
}