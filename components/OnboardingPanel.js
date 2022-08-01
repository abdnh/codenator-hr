import Carousel from 'react-bootstrap/Carousel';

import styles from "../styles/OnboardingPanel.module.scss";

function CarouselImage({ src, width, height, alt }) {
    return <>
        <img
            width={width}
            height={height}
            className={styles.image}
            src={src}
            alt={alt}
        />
    </>
}
export default function OnboardingPanel() {
    return (
        <div id="onboarding-panel">
            <Carousel interval={null} >
                <Carousel.Item>
                    <CarouselImage
                        width="100px"
                        height="100px"
                        className="d-block w-25"
                        src="/placeholder.svg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <CarouselImage

                        width="100px"
                        height="100px"
                        className="d-block w-25"
                        src="/placeholder.svg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim tortor at auctor urna nunc id cursus metus..</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <CarouselImage

                        width="100px"
                        height="100px"
                        className="d-block w-25"
                        src="/placeholder.svg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
