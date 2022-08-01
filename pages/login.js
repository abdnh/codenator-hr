import Link from "next/link"

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import AccessTabs from '../layouts/AccessTabs'
import EntryLayout from "../layouts/EntryLayout";


export default function Login() {
    return (
        <EntryLayout activeTab="login">
            <AccessTabs activeTab="login">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email address" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                    <div className="fs-6 text-start mt-2">
                        <Link href="/forgot_password">Forgot password?</Link>
                    </div>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Log in
                </Button>
                <div className="fs-6 text-start mt-2">
                    Don&apos;t have an account? <Link href="/signup">Sign up</Link>
                </div>
            </AccessTabs>
        </EntryLayout>
    );
}