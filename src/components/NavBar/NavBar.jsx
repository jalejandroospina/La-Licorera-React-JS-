import React from "react";
import {Link} from "react-router-dom";
import '../NavBar/NavBar_styles.css';
import CartWidget from "../CartWidget/CartWidget";



export default function NavBar()

{
    return (
        
    <>
        
        <div className="  pill-nav container-fluid">

            <span> <Link to="/" className="logo"> <h1>La Licorera</h1></Link> </span>
            <span> <Link to="category/Cerveza" className="menu">Cerveza</Link> </span>
            <span> <Link to="category/Ron" className="menu">Ron</Link> </span>
            <span> <Link to="category/Tequila" className="menu">Tequila</Link> </span>
            <span> <Link to="category/Vodka" className="menu">Vodka</Link> </span>
            <span> <Link to="category/Whisky" className="menu">Whisky</Link> </span>
            
            <CartWidget/> 

        </div> 
        
    </>
       
    )

}