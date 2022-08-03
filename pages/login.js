import Form from 'react-bootstrap/Form';
import AccessTabs from '../layouts/AccessTabs';
import EntryLayout from "../layouts/EntryLayout";


export default function Login() {
    return (
        <EntryLayout activeTab="login">
            <AccessTabs activeTab="login">
                <div class="login">
                    <h2>Hesabınıza Giriş Yapınız</h2>
                    <form>
                        <div class="user-box">
                            <input type="email" className="input" placeholder=''  id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <label for="exampleInputEmail1" className="label">Eposta</label>
                        </div>
                        <div class="user-box">
                            <input type="password" className="input" id="exampleInputPassword1"/>
                            <label for="exampleInputPassword1" className="label">Şifre</label>
                        </div>
                        <button className="bttn">Giriş Yap</button>
                        <a href="#" className="text">Bilgilerinizi mi unutunuz?</a>
                    </form>
                </div>
            </AccessTabs>
        </EntryLayout>
    );
}