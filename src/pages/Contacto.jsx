import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Navbar from "../components/Navbar";
import SignUpForm from "../components/Form";


const Contacto = ()=>{
    return(
        <>
        <Navbar></Navbar>
        <main>
            <SignUpForm></SignUpForm>
        </main>
        </>
    );
}

export default Contacto