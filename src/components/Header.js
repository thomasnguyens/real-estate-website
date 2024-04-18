import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <div className="row bg-warning d-flex align-items center"> {/* centers items */}
            <div className="col-sm-3 my-2"> {/* adjusting the margin of y*/}
                {/* link to allows for going to that specific tab */}
                <Link to="/"><img className = "w-25" src="/imgs/logo.jpg" alt="logo.jpg"/></Link>
            </div>
            <div className="col-sm-5">
                <h3><b>GET YOUR DREAM HOUSE WITH US !</b></h3>
            </div>
            <div className="col-sm-4">
                <Link to="/login"><button className="btn btn-primary"> Login </button></Link>
                <Link to="/signup"><button className="btn btn-secondary">Signup</button></Link>
            </div>
        </div>
     );
}
 
export default Header;