import React, { useState , useEffect} from "react";
import { motion, AnimatePresence } from "framer-motion";
import Background1 from "../components/home/Background 1.png";
import Background2 from "../components/home/Background 2.png";
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/home/Navbar';


const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

 
useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
    }
  }, []); 



  return (
    <div className="h-screen w-full bg-gradient-to-br from-[#0e0e0e] to-[#1f1f1f] text-white font-[Poppins] overflow-hidden">
      {/* Navbar */}
      <Navbar/>
      
      {/* Hero Section */}
      <div className="relative w-full h-[calc(100vh-240px)] overflow-hidden">
        <img
          src={Background1}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-2 grid md:grid-cols-2 gap-6 items-center h-full">
          {/* Text */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-center md:text-left"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#e2e8f0]">
              All Your College Needs in One Place
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Class notes, lab work, previous year questions, syllabus — you
              name it, UnivMate has it.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            whileHover={{ rotate: 3, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="flex justify-center"
          >
            <img
              src={Background2}
              alt="Student"
              className="w-64 md:w-[22rem] object-contain rounded-xl shadow-xl "
            />
          </motion.div>
        </div>
      </div>

  
    </div>
  );
};

export default Home;
