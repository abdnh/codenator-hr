import AccessTabs from '../layouts/AccessTabs'
import EntryLayout from "../layouts/EntryLayout";

export default function Signup(props) {
    return (
        <EntryLayout activeTab="signup">
            <AccessTabs activeTab="signup">
                <div className="sign_up">
                    <h2>Hesap Oluştur</h2>
                        <div className="user-box">
                            
                            <input type="text" className="input" id="Name" aria-describedby="emailHelp" required/>
                            <label for="text" className="label">Kullanıcı Adı</label>
                        </div>
                        <div className="user-box">
                            <input type="email" className="input " placeholder=''  id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                            <label for="exampleInputEmail1" className="label">Eposta</label>
                        </div>
                        <div className="user-box">
                            <input type="password" className="input" id="exampleInputPassword1" required/>
                            <label for="exampleInputPassword1" className="label">Şifre</label>
                        </div>
                        <button className="bttn">Kaydet</button>
                </div>
            </AccessTabs>
        </EntryLayout>
    )
}
