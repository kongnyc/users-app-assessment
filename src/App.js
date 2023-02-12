import SearchBar from './components/SearchBar/SearchBar';
import Users from './components/Users/Users';
import './App.css';
import axios from 'axios';
import { useEffect,useState } from 'react';

const API_URL = 'https://users-app-backend.onrender.com/users';

function App() {
  // TODO: Fetch data here
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      //Fetch data here from API
      const response = await axios.get(API_URL);
      // debugger;
      setUsers(response.data.data);
  }
    fetchData();
  },[])

  return (
    <div className="App">
      <SearchBar />
      <Users users={users}/>
    </div>
  );
}

export default App;
