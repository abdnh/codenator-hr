import Container from 'react-bootstrap/Container';
import MainLayout from './MainLayout';


export default function ContainerLayout({ subtitle, children }) {
    return <MainLayout subtitle={subtitle}>
        <Container>
            {children}
        </Container>
    </MainLayout>

}
