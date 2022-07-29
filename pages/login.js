import Link from "next/link"
import Image from "next/image"
import MainLayout from '../layouts/MainLayout'
import CustomForm from '../layouts/CustomForm'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Login() {
    return (
        <MainLayout subtitle="Login">
            {/* TODO: a different icon */}
            <Image src="/favicon.svg" width="64" height="64" alt="site logo"></Image>
            <h2>Log in</h2>
            <CustomForm>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Log in
                </Button>
                <div className="fs-6 text-start mt-2">
                    Don&apos;t have an account? <Link href="/signup">Sign up</Link>
                </div>
            </CustomForm>

        </MainLayout>
    );
}