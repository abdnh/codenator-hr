import Link from "next/link";
import Nav from "react-bootstrap/Nav";

export default function Navlink({ href, children, ...rest }) {
    return (
        <Link href={href} ><Nav.Link href={href} {...rest}>{children}</Nav.Link></Link>
    )
}
