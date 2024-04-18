import { useParams } from "react-router-dom";
import SearchResultsRow from "./SearchResultsRow";

const SearchResults = (props) => {
    
    // useParams is used to read values and input that in the URL for county selected
    let paramsObj = useParams(); 

    // now we want to get all the houses, filter them by county and store it in an array in state!
    // this is a filter function that only keeps the same houses in county selected in a new array
    let filteredHousesArray = props.allhouses.filter((house) => 
        (house.county === paramsObj.county));
        console.log(filteredHousesArray);
    


    return ( 
        <div className="row">
            <h5> Search results for {paramsObj.county} </h5> {/* results for selected county is */}
            {/* Higher Order Component as it returns another component */}
            {/* bs5-table-default for the filtered houses data of selected county */}
            <div
                className="table-responsive"
            >
                <table
                    className="table table-primary"
                >
                    <thead>
                        <tr>
                            <th scope="col">Address</th>
                            <th scope="col">Price</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredHousesArray.map((filteredHouse) => {
                                return( // returns each filteredHouses's data (ID and name from SearchResultsRow component)
                                    <SearchResultsRow key={filteredHouse._id} filteredHouse={filteredHouse}/>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            

        </div>
     );
}
 
export default SearchResults;