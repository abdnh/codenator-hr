import Form from 'react-bootstrap/Form';
import AccessTabs from '../layouts/AccessTabs';
import EntryLayout from "../layouts/EntryLayout";


export default function Login() {
    return (
        <EntryLayout activeTab="login">
            <AccessTabs activeTab="login">
                <div className="Hesap">
                    <Form.Group>
                        <Form.Label className="label">Eposta</Form.Label>
                        <Form.Control type="email" className="input" aria-describedby="emailHelp" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className="label">Şifre</Form.Label>
                        <Form.Control type="password" className="input" />
                    </Form.Group>

                    <button className="btn">Giriş Yap</button>
                    <a>Bilgilerinizi mi unutunuz?</a>
                </div>
            </AccessTabs>
        </EntryLayout>
    );
}