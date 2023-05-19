import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import {NavLink} from 'react-router-dom';

export const Header = () => {
    const [value,setValue]=useState();
    return (
        <div>
            <AppBar sx={{backgroundColor:"#09013E"}} position='sticky'>
                
                <Toolbar>
                <NavLink to="/" style={{color:"white"}}>
                    <Typography><MenuBookIcon></MenuBookIcon></Typography></NavLink>
                    <Tabs sx={{ml:"auto"}} textColor='inherit' indicatorColor='secondary' value={value} onChange={(e,val)=>setValue(val)}>
                        <Tab LinkComponent={NavLink} to="/add" label='Add Product'></Tab>
                        <Tab LinkComponent={NavLink} to="/books" label='Books'></Tab>
                        <Tab LinkComponent={NavLink} to="/about" label='About Us'></Tab>
                    </Tabs>
                </Toolbar>

            </AppBar>
        </div>
    )
}
