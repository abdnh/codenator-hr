import Link from "next/link"
import Image from "next/image"

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import MainLayout from '../layouts/MainLayout'
import CustomForm from '../layouts/CustomForm'

export default function Signup(props) {
    return (
        <MainLayout subtitle="Sign up">
            {/* TODO: a different icon */}
            <Image src="/favicon.svg" width="64" height="64" alt="site logo"></Image>
            <h2>Sign up</h2>
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
                    Sign in
                </Button>
                <div className="fs-6 text-start mt-2">
                    Already have an account? <Link href="/login">Log in</Link>
                </div>
            </CustomForm>
        </MainLayout>

    )
}
