import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import SearchFilter from './components/SearchFilter';
import SearchResults from './components/SearchResults';
import SearchedHouse from './components/SearchedHouse';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Footer from './components/Footer';
import House from './components/House';

function App() {

  

  // make sure you use useState hook if you want to access the scope within the program
  let [housesData, setHousesData] = useState([]);
  
  // get the data here
  // need to double check if the data is able to be retrieved from server ! this is the process
  // async await with fetch and get json --> retreiving data from houses.json
  // console.log to check if data is correct
  useEffect( () => {
    let fetchdata = async () => {
      let response = await fetch("houses.json"); // creating response variable for fetching data
      let data = await response.json(); // also seeing if it can read the data
      setHousesData(data); // now adding data to setHouses so it can be called from main fxn

      console.log(response);  // now print response to see if it retrieved the data
      console.log(data);
    }
    fetchdata();
  }, ([])); // allows it to print once!


  return (
    <div className="container-fluid"> {/* making sure everytihng is in a container */}
      <Header/>
      <SearchFilter allhouses={housesData}/> {/* fixing the search filter, retrieving houses */}
      {/* address,photo, price, description all found from houses.json */}
      {/* <House address={housesData[0].address} picture = {housesData[0].photo} price = {housesData[0].price} desc = {housesData[0].description} /> */}
      {/* Need to add routing for calling in props */}
      <Routes>
        {/* houseInfo used in all components */}
        <Route path="/" element={<House houseInfo={housesData[7]} />} />
        <Route path ="searchresults/:county" element= {<SearchResults allhouses={housesData}/>} /> {/* being able to search results using :county given from houses.json */}
        <Route path="searchedhouse" element= {<SearchedHouse/>} />
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
