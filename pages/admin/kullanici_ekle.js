import React,{ useState,useEffect} from 'react';
import Breadcrumb1 from './breadcrumb';
import Layout from '../../layouts/admin/layout';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import CardCustum from '../../components/ant/Card';
import styled from 'styled-components';
import { Switch, Input, Space } from 'antd';
import { useRouter } from 'next/router';

const Kart = styled.div`
padding:40px;
background: white;
height:100vh;
.card{
    margin:0;
    border-radius:10px;
    .head{
        height:50px;
        .nav{
           .left{
                background: white;
                align-items: center;
                display:flex;
                flex-direction: row;
                color:  #112a45;
                height: 48px;
               
           }
        }
    }
    .kullanici{
        padding:30px;
        input{
            border-radius:15px;
            border:none;
            background:#fff;
        }
    }
    .parola{
       
        .btn{
            padding:30px 90px ;
            button{
                color:#fff;
                background:#112a45;
                flex-direction: row;
                border:none;
                margin:10px;
                width:20vh;
                height:7vh;
                border-radius:5px;
            }
        }
        
    }
}
`;
const d = [
    {
        text: 'Kullanıcı',
        link: '/admin/Kullanıcı/Ekle',
    },
];

export default function Kullanici_ekle() {
    const [datas, setDatas] = useState([]);
    const router = useRouter();
    const [ad,setAd]=useState('');
    useEffect(() => {
        var id=router.query.id;
            fetch(id?"http://localhost:3001/admins?id="+id :"http://localhost:3001/admins").then(res => res.json())
         .then(datas => {
           setDatas(datas);
         });
     }, [router.query.id]);

     const handleSubmit = (e) =>{
        e.preventDefault();
        const body={
            ad:ad,
        }
     }
    return (
        <Layout>
            <Breadcrumb1 data={d} />
            <Kart>
            <div className='card'>
                
                <CardCustum>
                <Card >
                    <Card.Header >
                            <div className='head'>
                                <div className='nav'>
                                    <div className='left' >
                                        <FontAwesomeIcon style={{ paddingRight: "10px" }} icon={faUserGroup} />
                                         kullanıcı Ekle
                                    </div>
                                </div>
                            </div>
                    </Card.Header>
                    <Card.Body>
                        <form onSubmit={handleSubmit}>
                            <div className='kullanici'>
                                <div className='kullanici-durum'style={{padding:"0 0 20px 10px" }}>
                                Kullanıcı Durumu
                                    <span style={{padding:"20px"}}>
                                        :
                                    </span>
                                    <Switch className='icon' checkedChildren="ON" unCheckedChildren="OFF" defaultChecked />
                                </div>

                                   
                                <div className='kullanici-ad' style={{paddingLeft:"110px"}}>
                                    Ad
                                    <span style={{padding:"20px"}}>
                                        :
                                    </span>
                                    <input placeholder="Ad Soyad Giriniz" style={{width:"40vh"}}  onChange={(e) => { setAd(e.target.value) }}/>
                                </div>
                                <div className='kullanici-email' style={{padding:"20px 0 0 89px"}}>
                                    E-mail
                                    <span style={{padding:"20px"}}>
                                        :
                                    </span>
                                    <input placeholder="Email Giriniz" style={{width:"40vh"}}/>
                                </div>
                                <hr  style={{width:"90vh"}}/>
                            </div>
                            <div className='parola'>
                            <div className='kullanici-ad' style={{paddingLeft:"130px"}}>
                                    Şifre
                                    <span style={{padding:"20px"}}>
                                        :
                                    </span>
                                    <Input.Password placeholder="input password" style={{width:"30vh"}}/>
                                </div>
                                <div className='kullanici-email' style={{padding:"20px 0 0 80px"}}>
                                    Şifre Tekrarı
                                    <span style={{padding:"20px"}}>
                                        :
                                    </span>
                                    <Input.Password placeholder="input password" style={{width:"30vh"}}/>
                                </div>
                                <div className="btn btn-sm">
                                <button type="button" >Vazgeç</button>
                                <button type="button" >Bilgileri Sakla</button>
                                </div>
                                
                            </div>
                            
                        </form>
                    </Card.Body>
                </Card>
                </CardCustum>
               
            </div>
            </Kart>
        </Layout>
    )
}
