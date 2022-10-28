import HomeHeader from "../component/Home/HomeHeader"
import RowTablecontact from "../component/Home/RowTablecontact"
import './HomeStyle.css'

const Home = ()=>{
    return (
        <div className="Containerhome">
            <HomeHeader />
            <RowTablecontact />
        </div>
    )
}

export default Home