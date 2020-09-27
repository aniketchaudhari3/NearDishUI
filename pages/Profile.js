import React from 'react'
import BottomNav from './bottom_nav';
import Nav from './MainNav.js';


export default function Profile() {
    return (
        <div>
        <Nav />
        <div class=" top_20"> <h1>Profile Page</h1></div>
           
      <BottomNav currentValue={3} />
        </div>
    )
}
