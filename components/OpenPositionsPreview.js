// import Image from "next/image";

import Carousel from 'react-bootstrap/Carousel';
import styles from "../styles/OpenPositionsPreview.module.scss";

// TODO: use <Image>
function CarouselImage({ src, width, height, alt }) {
    return <img
        width={width}
        height={height}
        className={styles.image}
        src={src}
        alt={alt}
    />
}


export default function OpenPositionsPreview(props) {
    return (
        <>
            <h3>Open Positions</h3>
            <Carousel interval={null} id="open-positions-preview">
                <Carousel.Item>
                    <CarouselImage
                        className="d-block w-25"
                        width="100px"
                        height="100px"
                        src="/placeholder.svg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Quality Control Engineer</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <CarouselImage
                        className="d-block w-25"
                        width="100px"
                        height="100px"
                        src="/bug.svg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Test engineer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <CarouselImage
                        className="d-block w-25"
                        width="100px"
                        height="100px"
                        src="/db.svg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Database engineer</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}
