import Form from 'react-bootstrap/Form';
import AccessTabs from '../layouts/AccessTabs'
import EntryLayout from "../layouts/EntryLayout";

export default function Signup(props) {
    return (
        <EntryLayout activeTab="signup">
            <AccessTabs activeTab="signup">
                <div className="Hesap">
                    <Form.Group>
                        <Form.Label className="label">Kullanıcı Adı</Form.Label>
                        <Form.Control type="text" className="input" id="Name" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label for="exampleInputEmail1" className="label">Eposta</Form.Label>
                        <Form.Control type="email" className="input" aria-describedby="emailHelp" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label for="exampleInputPassword1" className="label">Şifre</Form.Label>
                        <Form.Control type="password" className="input" />
                    </Form.Group>

                    <button className="btn">Giriş Yap</button>
                </div>
            </AccessTabs>
        </EntryLayout>
    )
}
