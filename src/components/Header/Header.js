import React, { Component } from 'react'
import {  NavLink, Outlet } from 'react-router-dom'
import './Header.css'

export default class Header extends Component {
    render() {
        return (<>
            <header className="header">
                <NavLink style={({isActive}) => ({color: isActive ? 'red' : 'bisque'})} to='/' className='link'>Home</NavLink>
                <NavLink style={({isActive}) => ({color: isActive ? 'red' : 'bisque'})} to='/movies' className='link'>Movies</NavLink>
            </header>
            <Outlet/>
            </>
        )
    }
}