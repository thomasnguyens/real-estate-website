// import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchFilter = (props) => {

    // let [counties, setCounties] = useState([]); // for saving current county selected in setCounties
    let navigate = useNavigate(); // for retrieving data in another component


    // took out useEffects() hook
    // get unique counties and keep them ready to be mapped in return
    console.log(props.allhouses);
    // get all the counties (includes duplicates)
    let countyArrayWithDuplicates = props.allhouses.map( elem => elem.county); 
    console.log(countyArrayWithDuplicates); 

    // removes duplicates from an array using set and convert it back to array
    let distinctCountiesArr = Array.from(new Set(countyArrayWithDuplicates)) // Array.from()creatting new array from set
    console.log(distinctCountiesArr); // prints the unique counties
    // setCounties(distinctCountiesArr); // setting the county to setCounties variable

    // when an option is selected event is happening
    // e is for event (event handling)
    let changeCountyHandler = (e) => {
        // console.log("county picked/changed");
        console.log(e.target.value); // from event get target (HTML element) and get its value
        let county = e.target.value; // set the county to the selected e.target.value

        // when you want to import from another component
        // navigates to searchResults/countyName after search result is given
        navigate('searchresults/'+county); 
    }

    // bs-5-form-selected-custom (is the command to input a form with selection)
    return ( 
        <div className = "row justify-content-center">
            <div className="col-sm-5"> {/* adding a dropdown menu, with a smaller viewport size */}
            
                <select
                    className="form-select form-select-sm" // fixing the dropdown size to small
                    name=""
                    id=""
                    onChange = {changeCountyHandler} // when an option is selected, it will run changeCountyHandler
                >
                    <option selected> Search By County </option>
                    {/* great way to get the county displayed from the map in JSX, use curly brackets for JS script */}
                    {/* always use a key when iterating through something, kind of confused here */}
                    {
                        distinctCountiesArr.map((elem) => {
                            return <option key={elem} 
                            value={elem}>{elem}</option>
                        })
                    }
                </select>
            </div>
        </div>
     );
}
 
export default SearchFilter;