import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from "./Button";

import styles from "../styles/InternshipsPreview.module.scss";

export default function InternshipsPreview() {
    return <div>
        <div className={styles.header}>
            <h3 className="homesection-header">Internships</h3>
            <Button buttonStyle="secondary">More</Button>
        </div>
        <CardGroup>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/placeholder.svg" />
                <Card.Body>
                    <Card.Title>Card #1 Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button>Details</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/placeholder.svg" />
                <Card.Body>
                    <Card.Title>Card #2 Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button>Details</Button>
                </Card.Body>
            </Card>
        </CardGroup>
        <style global jsx>{`
            [class^=card-img] {
                width: 35%;
                height: 35%;
                margin: 8px auto;
            }
            .card-body, .card-title {
                text-align: center;
            }
            .card {
                border: none;
                background-color: #f3fafc;
            }
        `}</style>
    </div>
}
