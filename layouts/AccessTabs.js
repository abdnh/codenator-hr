import Image from "next/image";
import { useRouter } from 'next/router';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';

export default function AccessTabs({ children, activeTab }) {

    const router = useRouter();
    function handleTabSelect(selected) {
        router.push(`/${selected}`);
    }

    return <Form>
        <Nav justify variant="tabs" defaultActiveKey={activeTab} onSelect={handleTabSelect}>
            <Nav.Item>
                <Nav.Link eventKey="login">Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="signup">Sign up</Nav.Link>
            </Nav.Item>
        </Nav>

        <Image src="/codenator.png" width="512" height="192" alt="site logo"></Image>
        {children}
        <style global jsx>
            {
                `
                    form {
                        display: flex;
                        flex-direction: column;
                        min-height: 50vh;
                    }
                    a {
                        text-decoration: none;
                    }
                `
            }
        </style>
    </Form>
}