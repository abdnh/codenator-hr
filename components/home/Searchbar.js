import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Search } from 'react-bootstrap-icons';
import { InputGroup } from 'react-bootstrap';

export default function Searchbar({ shown, onHide }) {

    return <Modal show={shown} tabIndex="-1" centered onHide={onHide}>
        <Modal.Dialog>
            <Modal.Header className="border-0">
            </Modal.Header>
            <Modal.Body >
                <Form>
                    <InputGroup style={{ 'max-width': '600px' }}>
                        <Form.Control type="text" className="border-primary p-3" placeholder="Type search keyword" />
                        <Button className="px-4"><Search /></Button>
                    </InputGroup>
                </Form>
            </Modal.Body>
        </Modal.Dialog>
        <style global jsx>
            {
                `
                .modal-content {
                    border: none;
                    background: rgba(9, 30, 62, 0);
                }
                `
            }
        </style>
    </Modal>
}
