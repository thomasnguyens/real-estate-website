const House = (props) => { // importing the props data

    // if having JSX rendering issues, do this! to see if there are issues (debugging)
    // houseinfo declared in app.js
    if(!props.houseInfo) {
        return <h4> ............ loading </h4>
    }

    return ( 
        <div className="row"> {/* adding in proper rows and columns */}
            <div className="col-sm-6 mt-3">
                <b>Address:</b> {props.houseInfo.address} {/* same variable declared from app.js */}
            </div>
            <div className="col-sm-6 mt-3">
                <b>Price:</b> {props.houseInfo.price} {/* same variable declared from app.js */}
            </div>
            <div className="row">
                <div className="col-sm-6"> <img className="img-thumbnail mt-3 mb-3" src={`imgs/${props.houseInfo.photo}`} alt="house here" /></div>
                <div className="col-sm-6"> {props.houseInfo.description} </div>
            </div>
        </div>
     );
}
 
export default House;