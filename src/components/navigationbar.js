import React from 'react'
import '../App.css'

const Navigationbar = () => {
    return(
       <div className = "navigationabr">    
           <button className = "navigationbuttons" variant="outline-primary">Github</button>
           <button className = "navigationbuttons" variant="outline-primary">Linkedin</button>
           <button className = "navigationbuttons" variant="outline-primary">Contact me</button>        
       </div>
    )
}

export default Navigationbar
