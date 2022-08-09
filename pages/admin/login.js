import React ,{useState}from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword]=useState("");

    async function handelLogin (e){
        const data={
            useremail:email,
            userpassword:password,
        }
        const response = fetch(`http://localhost:8000/user`,{
        method:"POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      });
    }
     
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control style={{width:500}} type="email"  onClick={((e) => {setEmail(e.target.value)})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control style={{width:500}} type="password"  onClick={((e) => {setPassword(e.target.value)})}/>
      </Form.Group>
      <Button variant="primary" type="submit" onSubmit={handelLogin()} href="/login">
        Login
      </Button>
    </Form>
  )
}
