import React from 'react';
const Header = () => {
  return (
    <>
        <nav className='navbar'>
            <div className="logo">Food Recipe</div>
            <ul className='list'>
                <li>Home</li>
                <li>Menu</li>
                <li>More</li>
            </ul>
        </nav>
    </>
  );
}

export default Header;
