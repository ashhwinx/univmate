import React ,{useContext}from 'react'
import Navbar from '../components/home/Navbar';
import PYQs1 from '../components/Pyq/PYQs1';
import PYQs2 from '../components/Pyq/PYQs2';
import { UserDataContext } from "../src/context/UserContext";

const PYQ = () => {
  const { user } = useContext(UserDataContext);
  return (
    <>
    <Navbar/>
    {user.section=="A"?<PYQs1/>:<PYQs2/>}
    </>
  )
}

export default PYQ