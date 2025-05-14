import React ,{useContext,useEffect}from 'react'
import Navbar from '../components/home/Navbar';
import PYQs1 from '../components/Pyq/PYQs1';
import PYQs2 from '../components/Pyq/PYQs2';
import { UserDataContext } from "../src/context/UserContext";
import { useNavigate } from 'react-router-dom';

const PYQ = () => {
  const { user } = useContext(UserDataContext);
   const navigate = useNavigate();

 
useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
    }
  }, []); 
  return (
    <>
    <Navbar/>
    {user.section=="A"?<PYQs1/>:<PYQs2/>}
    </>
  )
}

export default PYQ