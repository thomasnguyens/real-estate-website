import { useLocation } from "react-router-dom";
import House from "./House";


const SearchedHouse = () => {

    // displays a house image based on an id

    let loca = useLocation(); // UseLocation hook to retrieve the url data
    console.log(loca.state.searchedHouse);

    return ( 
        <>
        <h4> Searched House: </h4>
        {/* kind of lost where the houseInfo comes from */}
        <House houseInfo = {loca.state.searchedHouse}/> {/* houseInfo is the path info of searchedHouse */}
        </>
     );
}
 
export default SearchedHouse;