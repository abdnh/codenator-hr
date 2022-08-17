import { useState, useEffect } from "react";
import classNames from "classnames";

export default function Spinner() {
    const [shown, setShown] = useState(true);

    useEffect(() => {
        console.log(shown)
        setTimeout(() => {
            setShown(false);
            console.log(shown)
        }, 1);
    }, [shown]);

    return (
        <>
            <div id="spinner-container" className={classNames({ show: shown }, 'bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center')}>
                <div id="spinner"></div>
            </div>
            <style global jsx>{
                `
            #spinner {
                width: 40px;
                height: 40px;
                background: var(--primary);
                margin: 100px auto;
                -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;
                animation: sk-rotateplane 1.2s infinite ease-in-out;
            }
            #spinner-container {
                opacity: 0;
                visibility: hidden;
                transition: opacity 0.5s ease-out, visibility 0s linear 0.5s;
                z-index: 99999;
            }
            #spinner-container.show {
                transition: opacity 0.5s ease-out, visibility 0s linear 0s;
                visibility: visible;
                opacity: 1;
            }
            `
            }</style>
        </>
    )
}
