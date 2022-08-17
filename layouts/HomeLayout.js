import Navbar from "../components/home/Navbar";
import Spinner from "../components/home/Spinner";
import Topbar from "../components/home/Topbar";

export default function HomeLayout({ children, navbarProps, subcontainerAddon }) {
    return (
        <>
            <Spinner />
            <Topbar />
            <div className="container-fluid position-relative p-0">
                <Navbar {...navbarProps} />
                {subcontainerAddon}
            </div>
            {children}
        </>
    )
}
