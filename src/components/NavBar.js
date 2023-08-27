import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = (props) => {

    return(
        <div className='nav'>
            <Link to="/"><button>Home</button></Link>
            <Link to="/Services"><button>Our Services</button></Link>
            <Link to="/About"><button>About Us</button></Link>
            <Link to="/Contact"><button>Contact Us</button></Link>
            <Link to="/Tips"><button>Cleaning Tips</button></Link>
            <Link to="/Referrals"><button>Referrals</button></Link>
        </div>
    )
}

export default NavBar