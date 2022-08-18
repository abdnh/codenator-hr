var React = require('react');
import styled from 'styled-components';


const Container = styled.div`
    .body{
        height: 100vh;
        .light{
            .content-header{
                padding: 15px;
                color:#152931;
                border-bottom: 1px solid #F9F9F9;
                background: #F9F9F9;
                display: flex;
                justify-content: space-between;
                align-items: center;
                p{
                    margin:0;
                }
                .left{
                    display: flex;
                    height: 100%;
                    align-items: center;
                }
                .right{
                    display: flex;
                    height: 100%;
                    align-items: center;
                    flex-direction: row;
                    margin-right: 10px;
                    color:black;
                    gap:5px;
                    a{
                        color:black;
                        text-decoration: none;
                    }
                    span{
                        color:black;
                    }
                    .icon{
                        color:black;
                        margin: -5px 5px 0 0;
                    }
                }
            }
            .content-body{
                height: 100vh;
                padding: 40px;
                background: #fff;
                .head{
                    height:50px;
                    .nav{
                        background: #112a45;
                        height:48px;
                        border-radius: 5px;
                        align-items: center;
                        justify-content: space-between;
                        .left{
                            padding-left:20px;
                            color:#fff;
                        }
                        .right{
                            padding-right:20px;
                            button{
                                border-radius: 10px;
                                border:none;
                                color:#002B5B;
                            }
                        }
                    }
                }
                .ant-table-thead{
                    .ant-table-cell{
                        background:#F9F9F9;
                        line-height:10px;
                    }
                }
                
                .search{
                    background: rgb(245, 244, 244);
                    border-radius:20px;
                    border:none;
                    width:35%;
                    margin:0 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: rgb(0, 0, 0,0.3);
                    span {
                        display: flex;
                        font-size: 14px;
                        align-items: center;
                        justify-content: center;
                        width: 30px;
                        height: 40px;
                    }
                    input {
                        background: rgb(245, 244, 244);
                        width: 100%;
                        height:40px;
                        border-radius: 20px;
                        border:none;
                        padding: 10px 0;
                        font-size: 14px;
                        color: rgb(0, 0, 0,0.1);
                    }
                }
            }
        }
    }
    .body{
        height: 100vh;
        background: #000;
        .dark{
           
            .content-header{
                padding: 15px;
                color:#fff;
                border-bottom: 1px solid #000;
                background: #000;
                display: flex;
                justify-content: space-between;
                align-items: center;
                p{
                    margin:0;
                }
                
                .left{
                    display: flex;
                    height: 100%;
                    align-items: center;
                }
                .right{
                    display: flex;
                    height: 100%;
                    align-items: center;
                    flex-direction: row;
                    margin-right: 10px;
                    color:#fff;
                    gap:5px;
                    a{
                        color:#fff;
                        text-decoration: none;
                    }
                    span{
                        color:#fff;
                    }
                    .icon{
                        color:#fff;
                        margin: -5px 5px 0 0;
                    }
                }
            }
            .content-body{
                background:#000;
                color:#fff;
                padding: 40px;
                .head{
                    height:50px;
                    .nav{
                        background: #000;
                        color:#fff;
                        height:48px;
                        border-radius: 5px;
                        align-items: center;
                        justify-content: space-between;
                        .left{
                            padding-left:20px;
                        }
                        .right{
                            padding-right:20px;
                            button{
                                border-radius: 10px;
                                border:none;
                            }
                        }
                    }
                }
                .ant-table-thead{
                    .ant-table-cell{
                        background:#000;
                        line-height:10px;
                        color:#fff;
                    }
                }
                .ant-table-cell{
                    background:#000;
                    color:#fff;
                    border-bottom:none;
                    .svg{
                        color:red;
                    }
                }
                .card{
                    background:#000;
                    color:#fff;
                    .card-header{
                        background:#000;
                        color:#fff;
                    }
                }
                
                .search{
                    background: #000;
                    border-radius:20px;
                    border:none;
                    width:35%;
                    margin:0 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #fff;
                    span {
                        display: flex;
                        font-size: 14px;
                        align-items: center;
                        justify-content: center;
                        width: 30px;
                        height: 40px;
                    }
                    input {
                        background: #000;
                        width: 100%;
                        height:40px;
                        border-radius: 20px;
                        border:none;
                        padding: 10px 0;
                        font-size: 14px;
                        color: #fff;
                    }
                }
            }
        }
        
    }
`;
export default function Body({ collpase, children, moon }) {
    return (
        <Container>
            <div className={collpase ? "body p-l-240" : "body p-l-40"}>
                <div className={moon ? "dark" : "light"}>
                    {children}
                </div>
            </div>
        </Container>
    )
}