import React ,{useContext}from 'react'
import Navbar from '../components/home/Navbar';
import Lab1 from '../components/labw/Lab1';
import Lab2 from '../components/labw/Lab2';
import { UserDataContext } from "../src/context/UserContext";

const LabWork = () => {
  const { user } = useContext(UserDataContext);
  return (
    <>
    <Navbar/>
    {user.section=="A"?<Lab1/>:<Lab2/>}
    </>
  )
}

export default LabWork