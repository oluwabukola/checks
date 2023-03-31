import React, { useState, useEffect } from 'react';
import {
    Nav, NavContainer, NavLogo, NavIcon, MobileIcon,
    NavMenu, NavItem, NavLink, NavBtn, NavBtnLink} from './Landingpage.elements'

export const LandingPage = () => {

    
    return (
        <>
         <Nav>
                <NavContainer>
                    <NavLogo to ='/'>
                        <NavIcon />
                        IBc
                    </NavLogo>
                    <MobileIcon>

                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink to='/about'>About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/services'>Services</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/contact'>Contact</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/register'>Register</NavLink>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signIn'>Sign In</NavBtnLink>
                    </NavBtn>
                </NavContainer>
            </Nav> 
        </>
    )
}
