import { Outlet } from "react-router-dom"
import HederLeayout from "./HederLeayout"



const Layout = ()=>{
    return (
        <div>
            <HederLeayout/>
            <Outlet />
            {/* <footer>dd;flkjhdkls;</footer> */}
        </div>
    )
}


export default Layout 