import React from "react"
import data from '../data.json'
import GroceryItem from "./GroceryItem"
const style={
    border:'3px solid gray',
    borderRadius:'10px',
    color:'red',
    textAlign:'center'
    
}

const style1={
    fontWeight:'bold',
    marginLeft:'20px'
}

const GroceryDetails = ()=>{
console.log(data)

    return(
        <>
        <h1 style={style}>Groceries</h1>
        <span style={style1}>TOP DEALS</span>
        <div className="container">
            {/* map through the data and display the cards */}
            
        </div>
        </>
    )
}
export default GroceryDetails