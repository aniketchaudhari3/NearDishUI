import React from 'react'
import BottomNav from './bottom_nav';
import Nav from './MainNav.js';


export default function Profile() {
    return (
        <div>
        <Nav />
            <h1>Profile Page</h1>
      <BottomNav currentValue={3} />
        </div>
    )
}
