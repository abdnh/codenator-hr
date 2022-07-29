import Form from 'react-bootstrap/Form';

export default function CustomForm({ children }) {

    return <Form>
        {children}
        <style global jsx>
            {
                `
                    form {
                        min-width: 25vw;
                        font-size: 1.5em;
                    }
                `
            }
        </style>
    </Form>
}