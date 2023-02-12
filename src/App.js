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
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <div className='user_Avatar'>
              <img src={user.photo} alt={user.name} />
            </div>
            <div className='user_Info'>
            <h2>{user.name}</h2>
            <p>{user.country}</p>
            <p>{user.company}</p>
            </div>
            <div className='user_About'>
              <h3>Abourt {user.name}:</h3>
              <p>{user.about}</p>
            </div>
            <div className='user_control'>
              <button>Show More</button>
            </div>
          </div>
        ))}
      </div>

      <SearchBar />
      <Users />
    </div>
  );
}

export default App;
