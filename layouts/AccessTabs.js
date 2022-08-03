import { useRouter } from 'next/router';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AccessTabs({ children, activeTab }) {

     const router = useRouter();
     function handleTabSelect(selected){
        router.push(`/${selected}`);
     }

    return (
        <div className="access">
            <Container>
                <Row>
                    <Col xs={5} className="left">
                        <img className="d-none d-xl-block d-xxl-block"  src="/svg/img1.svg" alt="" width={200} height={180}/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                    </Col>
                    <Col xs={6} className="right">
                        <Form className="form">
                            <Nav  fill variant="tabs" defaultActiveKey={activeTab} onSelect={handleTabSelect}>
                                <Nav.Item>
                                    <Nav.Link className="btn" eventKey="login">Login</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="btn" eventKey="signup">Sign up</Nav.Link>
                                </Nav.Item> 
                                
                            </Nav>
                            {children} 
                            <div className="icon">
                                  <button><img src="/svg/facebook.svg" alt="" width={30} height={30}/></button>
                                  <button><img src="/svg/google.svg" alt="" width={40} height={40}/></button>
                                  <button><img src="/svg/github.svg" alt="" width={30} height={30}/></button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}