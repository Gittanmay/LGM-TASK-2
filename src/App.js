import './App.css';
import React, { useState, useEffect } from 'react';
import Header from "./Components/Header";
import UserCard from './Components/UserCard';
import Loader from './Components/Loader';
import Axios from 'axios';


function App() {
  const [isClicked, setIsClicked] = useState(0);
  const [data, setData] = useState(null);


  const [loading, setloading] = useState(false);

  const getUsers = () => {

    setloading(true)

    Axios.get("https://reqres.in/api/users?page=1").then(
      (response) => {
        console.log("API DATA")
        setData(response.data.data);

        setloading(false)
      }
    )
  }
  
  
  useEffect(() => {
    isClicked && getUsers();
  }, [isClicked])


  return (
    <>
    
    <Header onSetIsClicked={setIsClicked}/>
      <div className='row'>

        {data&&data.map((val) => {

          return <UserCard first_name={val.first_name} last_name={val.last_name} email={val.email} avatar={val.avatar}/>
          
        })}
      </div>

      <Loader load={loading} />
    
    </>
  );
}

export default App;

