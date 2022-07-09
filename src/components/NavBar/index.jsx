import React from "react";
import '../NavBar/styles.css';
import brand from'../../images/La Licorera(liquor store)2.png' 

export default function NavBar()

{
    return (
        
        <>
        
        <div class="pill-nav">
            <a className="logo" href=""> <h1>La Licorera</h1></a>
            <a className="menu" href="#beer">Cerveza</a>
            <a className="menu" href="#ron">Ron</a>
            <a className="menu" href="#tequila">Tequila</a>
            <a className="menu" href="#vodka">Vodka</a>
            <a className="menu" href="#wisky">Wisky</a>
        </div> 
        </>
       
    )

}