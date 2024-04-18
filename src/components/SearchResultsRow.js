import { useNavigate } from "react-router-dom";

const SearchResultsRow = (props) => {

    let navigate = useNavigate(); 

    // this allows it to run
    let clickHandler = () => {
        console.log("clicked row"); // tells us if the handler is working

        // navigates to respective searchedHouse > state path of selected filter house
        navigate('/searchedhouse', {state:{searchedHouse:props.filteredHouse}});
    };

    return ( 
        // displays the data for each house
        <tr onClick={clickHandler} className="" key ={props.filteredHouse._id}>
            <th scope="row">{props.filteredHouse.address}</th> {/* filteredHouse's address*/}
            <td>{props.filteredHouse.price}</td> {/* filteredHouse's price */}
            <td>{props.filteredHouse.description}</td> {/* filteredHouse's description*/}
        </tr>
     );
}
 
export default SearchResultsRow;