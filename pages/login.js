import Form from 'react-bootstrap/Form';
import AccessTabs from '../layouts/AccessTabs';
import EntryLayout from "../layouts/EntryLayout";


export default function Login() {
    return (
        <EntryLayout activeTab="login">
            <AccessTabs activeTab="login">
                <div className="Hesap">
                    <Form className="form">

                        <label for="exampleInputEmail1" className="label">Eposta</label>
                        <input type="email" className="input" aria-describedby="emailHelp" />

                        <label for="exampleInputPassword1" className="label">Şifre</label>
                        <input type="password"  className="input" />

                        <button className="btn">Giriş Yap</button>
                        <a>Bilgilerinizi mi unutunuz?</a>
                    </Form>
                </div>
            </AccessTabs>
        </EntryLayout>
    );
}