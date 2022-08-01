import Link from "next/link"

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AccessTabs from '../layouts/AccessTabs'
import EntryLayout from "../layouts/EntryLayout";

export default function Signup(props) {
    return (
        <EntryLayout activeTab="signup">
            <AccessTabs activeTab="signup">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email address" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicTOS">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="tos" />
                        <label class="form-check-label" htmlFor="tos">
                            I agree to the <Link href="/tos">terms of service</Link>
                        </label>
                    </div>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Sign in
                </Button>
                <div className="fs-6 text-start mt-2">
                    Already have an account? <Link href="/login">Log in</Link>
                </div>
            </AccessTabs>
        </EntryLayout>
    )
}
