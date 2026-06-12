import "./App.css";
import UserCard from "./UserCard";

function App() {
  const users = [
    {
      name: "Sree Sushanth",
      city: "Tiruppur",
      age: 24,
      mobile: "9876543210",
      address: "Thennampalayam, Tiruppur",
    },
    {
      name: "Ramachandran",
      city: "Chennai",
      age: 25,
      mobile: "9876501234",
      address: "Anna Nagar, Chennai",
    },
    {
      name: "Monish ",
      city: "Bangalore",
      age: 23,
      mobile: "9876545678",
      address: "Whitefield, Bangalore",
    },
    {
      name: "Arjun",
      city: "Hyderabad",
      age: 22,
      mobile: "9876547890",
      address: "Madhapur, Hyderabad",
    },
    {
      name: "Vasanth",
      city: "Mumbai",
      age: 21,
      mobile: "9876549999",
      address: "Andheri West, Mumbai",
    },
  ];

  return (
    <div className="container">
      <h1>React Props Implementation</h1>

      <div className="card-container">
        {users.map((user, index) => (
          <UserCard
            key={index}
            name={user.name}
            city={user.city}
            age={user.age}
            mobile={user.mobile}
            address={user.address}
          />
        ))}
      </div>
    </div>
  );
}

export default App;