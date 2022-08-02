import Form from 'react-bootstrap/Form';
import AccessTabs from '../layouts/AccessTabs'
import EntryLayout from "../layouts/EntryLayout";

export default function Signup(props) {
    return (
        <EntryLayout activeTab="signup">
            <AccessTabs activeTab="signup">
            <div className="Hesap">
                    <Form className="form">

                        <label className="label">Kullanıcı Adı</label>
                        <input type="text" className="input" id="Name" />

                        <label for="exampleInputEmail1" className="label">Eposta</label>
                        <input type="email" className="input" aria-describedby="emailHelp" />

                        <label for="exampleInputPassword1" className="label">Şifre</label>
                        <input type="password" className="input" />

                        <button className="btn">Giriş Yap</button>
                    </Form>
                </div>
            </AccessTabs>
        </EntryLayout>
    )
}
