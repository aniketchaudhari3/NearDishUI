import React from 'react'
import BottomNav from './bottom_nav';
import Nav from './MainNav.js';


export default function Cart() {
    return (
        <div>
          <Nav />
            <h1>Cart Page</h1>
      <BottomNav currentValue={2} />
        </div>
    )
}


