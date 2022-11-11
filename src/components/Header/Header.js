import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default class Header extends Component {
    render() {
        return (<>
            <header className="header">
                <Link className='link'>Home</Link>
                <Link className='link'>Movie</Link>
            </header>
            </>
        )
    }
}