
var React = require('react');
import styled from 'styled-components';

const Container = styled.div`
    .body{
        height: 50px;
        background: rgb(236, 233, 233);
        color:#152931;
        border-bottom: 1px solid #f3f3f9;
        margin-top:-25px;
        display: flex;
        justify-content: space-between;
            .left{
                padding: 10px;
                align-items: center;
             }
             .right{
                display: flex;
                height: 100%;
                align-items: center;
                flex-direction: row;
                margin-right: 10px;
                gap:10px;
             p{
                margin-top: 17px;
            }
            a{
                color:black;
                text-decoration: none;
            }
          }
    }

`;

export default function Body({ collpase ,children}) {
    return (
        <Container>
            <div className={collpase ? "body p-l-260" : "body p-l-60"}>
                {children}
            </div>
        </Container>

    )
}