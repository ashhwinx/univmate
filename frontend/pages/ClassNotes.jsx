import React,{useContext} from 'react'
import Navbar from '../components/home/Navbar';
import CNHero from '../components/CNnotes/CNHero';
import CNHero2 from '../components/CNnotes/CNHero2';
import { UserDataContext } from "../src/context/UserContext";

const ClassNotes = () => {
  const { user } = useContext(UserDataContext);
  return (
    <>
    <Navbar/>
    {user.section=="A"?<CNHero/>:<CNHero2/>}
    </>
  )
}

export default ClassNotes