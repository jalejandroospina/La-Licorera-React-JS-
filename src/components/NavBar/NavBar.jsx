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
            <span> <Link to="category/cerveza" className="menu">Cerveza</Link> </span>
            <span> <Link to="category/ron" className="menu">Ron</Link> </span>
            <span> <Link to="category/tequila" className="menu">Tequila</Link> </span>
            <span> <Link to="category/vodka" className="menu">Vodka</Link> </span>
            <span> <Link to="category/whisky" className="menu">Whisky</Link> </span>

            <CartWidget/> 

        </div> 
        
    </>
       
    )

}