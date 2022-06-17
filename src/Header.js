import React from 'react'
import './Header.css';
function Header() {
  return (
    <div className='header'>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <img className='header__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt='amazon'/>
      <div className='header__search'>
        <input className='header__searchInput' type='text'/>
        <span class="material-symbols-outlined header__searchIcon" >search</span>
      </div>
      <div className='header__nav'>
        <div className='header__option'>
            <span className='header__optionLineOne'> Hello Guest</span>
            <span className='header__optionLineTwo'> Sign In</span>
        </div>
        <div className='header__option'>
            <span className='header__optionLineOne'> Returns</span>
            <span className='header__optionLineTwo'> & Orders</span>
        </div>
        <div className='header__option'>
            <span className='header__optionLineOne'> Your</span>
            <span className='header__optionLineTwo'> Prime</span>
        </div>

        <div className='header__optionBasket'>
          <span class="material-symbols-outlined">shopping_cart</span>
          <span className='header__optionLineTwo header__basketCount'>0</span>
        </div>
      </div>
    </div>
  )
}

export default Header
