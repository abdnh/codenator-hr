import AccessTabs from '../layouts/AccessTabs';
import EntryLayout from "../layouts/EntryLayout";


export default function Login() {
    return (
        <EntryLayout activeTab="login">
            <AccessTabs activeTab="login">
                <div className="login">
                        <h2>Hesabınıza Giriş Yapınız</h2>
                        <div className="user-box">
                            <input type="email" className="input" placeholder=''  id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                            <label htmlFor="exampleInputEmail1" className="label">Eposta</label>
                        </div>
                        <div className="user-box">
                            <input type="password" className="input" id="exampleInputPassword1" required/>
                            <label htmlFor="exampleInputPassword1" className="label">Şifre</label>
                        </div>
                        <button className="bttn">Giriş Yap</button>
                        <a href="#" className="text">Bilgilerinizi mi unutunuz?</a>
                </div>
            </AccessTabs>
        </EntryLayout>
    );
}