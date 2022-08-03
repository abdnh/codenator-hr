import AccessTabs from '../layouts/AccessTabs'
import EntryLayout from "../layouts/EntryLayout";

export default function Signup(props) {
    return (
        <EntryLayout activeTab="signup">
            <AccessTabs activeTab="signup">
                <div className="sign_up">
                    <h2>Hesap Oluştur</h2>
                    <form>
                        <div className="user-box">
                            
                            <input type="text" className="input form-control" id="Name" aria-describedby="emailHelp"/>
                            <label for="text" className="label">Kullanıcı Adı</label>
                        </div>
                        <div className="user-box">
                            <input type="email" className="input form-control" placeholder=''  id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <label for="exampleInputEmail1" className="label">Eposta</label>
                        </div>
                        <div className="user-box">
                            <input type="password" className="input form-control" id="exampleInputPassword1"/>
                            <label for="exampleInputPassword1" className="label">Şifre</label>
                        </div>
                        <button className="bttn">Kaydet</button>
                    </form>
                </div>
            </AccessTabs>
        </EntryLayout>
    )
}
