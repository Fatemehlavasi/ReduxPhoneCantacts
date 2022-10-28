import { Link } from "react-router-dom"
import './HomeHeaderStyle.css'
const HomeHeader = () => {
    return (
        <div>
            <div className="btnhome">
                <Link to={`/AddContact`} >
                    <button className="btmaddhome">
                        addcontact
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default HomeHeader