import React from 'react'
import logo from "../../images/logo.svg";
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const [users, setUsers] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState("");

  React.useEffect(() => {
    fetch ("https://62c4e487abea8c085a7e022a.mockapi.io/users")
    .then ((response) => response.json())
    .then ((data) => setUsers(data));
  }, []);

  const handleUserChange = (event) => {
    setCurrentUser(event.target.value);
  };

  const handleConfirmClick = (event) => {
    navigate(`/users/${currentUser}`);
  };


  return (
    <div className="home center">
    <div className="home__logo">
      <img src={logo} className="responsive" alt="" />
    </div>
    <select onChange={handleUserChange} className="home__select-users">
      <option value="" >Selecionar usuário</option>
      {users
      .sort((a, b) => a.fn.localeCompare(b.fn)) 
      .map((user) => (
      <option value={user.id} >{`${user.fn} ${user.ln}`}</option>))}
    </select>
    {!!currentUser && (
    <button onClick={handleConfirmClick} className="button-primary">Entrar</button>)}
    
  </div>
  )
}
