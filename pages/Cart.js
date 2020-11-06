import React from 'react'
import BottomNav from './bottom_nav';
import Nav from './MainNav.js';


export default function Cart() {
    return (
        <>
          <Nav pageName="Cart" />
          <div>
            <h1>Cart Page</h1>
            </div>
      <BottomNav currentValue={2} />
        </>
    )
}


