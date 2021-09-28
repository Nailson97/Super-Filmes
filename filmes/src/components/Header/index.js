import React, { Component } from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import '../../pages/Home/home.css'

class Header extends Component {
    render(){
        return(
            <div className='header'>
                <Link to='/'>Super Filmes</Link>
            </div>
        )
    }
}

export default Header