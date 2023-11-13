
import './App.css';
import  { BsPlus } from "react-icons/bs";
import { useEffect, useState } from 'react';
import { BiFilterAlt } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

function Dashboard() {
  
    const [userData, setUserData] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    useEffect(() => {
      // Fetch user data from the API
      fetch('https://dummyjson.com/users')
        .then((response) => response.json())
        .then((data) => setUserData(data.users))
        .catch((error) => console.error('Error fetching user data:', error));
    }, []);
  
    // Function to handle click on a user's name
    const handleUserClick = (user) => {
      setSelectedUser(user);
      setIsSidebarVisible(true);
    };
  
    const handleCloseClick = () => {
      setSelectedUser(null);
      setIsSidebarVisible(false);
    };
     

  

   



  return (
    <div className="dashboard-container">
    <div className={`dashboard ${isSidebarVisible ? 'sidebar-visible' : ''}`}>
       {isSidebarVisible && <div className="overlay"></div>}
       <div className='dash-header'>
         <div className='head-text'>
            <h3>Users</h3>
            <p>Here are all the users for this projects</p>
         </div>
         <div>
            <button className='addbtn'><BsPlus/> ADD NEW</button>
         </div>
        </div>

        <div className='fil'>
          <input type='text' value='' className='search-input' placeholder='Search user'/>
          <p><BiFilterAlt/> Filter</p>
        </div>

        <div className="user-table">
        <table>
          <thead>
            <tr className='table-head'>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Gender</th>
              
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr key={user.id} onClick={() => handleUserClick(user)} className='tr'>
                <td>{user.id}</td>
                <td><img src={user.image} alt='profile' className='profile'/>{`${user.firstName} ${user.lastName}`}</td>
                <td>{user.email}</td>
                <td>{user.company.title}</td>
                <td>{user.gender}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>

       {/* Side div to display detailed information */}
       {selectedUser && (
       <div className="side-div">
        
          <div>
            <div className='sb-title'><AiOutlineClose onClick={handleCloseClick} /><h5>User Details</h5></div>
            <div className='sb-head'><div className='sb-pic'><img src={selectedUser.image} alt='pic'/></div><h3>{`${selectedUser.firstName} ${selectedUser.lastName}`}</h3></div>
            <div className='sb-info'>
            <p><span>ID:</span> {selectedUser.id}</p>
            <p><span>Email:</span> {selectedUser.email}</p>
            <p><span>Role:</span> {selectedUser.company.title}</p>
            <p><span>Address:</span> {selectedUser.address.address}</p>

            </div>
            {/* Add more details as needed */}
          </div>
          </div>
        )}
      

    </div>
    </div>
  );
}

export default Dashboard;
