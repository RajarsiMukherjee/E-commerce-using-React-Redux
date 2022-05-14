import React from 'react';
import "./Navbar.css";
import pic from "../image/website-logo.png"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import Avatar from '@mui/material/Avatar';

import store from "../../Redux/Store"
import { addCart, addWishlist } from '../../Redux/Cart/Action'

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
export default function Navbar() {

  const navigate = useNavigate()

  const handleLogin = () => {
    navigate("/login")
  }

  const cart = useSelector((store) => store.cart.cart)
    const wishlist = useSelector((store) => store.cart.wishlist)
    console.log("navbar",wishlist)

  return (
    <div>
      
        <div className='Navbar'>
           
              <div onClick={() => navigate("/")}><img className='logo' src={pic} /></div>
               
            <div className='options'>
              <div className='home' onClick={() => navigate("/")}>Home</div>
              <div class="dropdown">
                <div className='name'>Men</div>
                <div className='dropdown-content'>
                  <a href="#" onClick={() => navigate("/category/men-jeans/products")}>Men Jeans</a>
                  <a href="#" onClick={() => navigate("/category/men-t-shirts/products")}>Men t-shirts</a>
                </div>
              </div>

              <div class="dropdown">
              <div className='name'>Women</div>
                <div className='dropdown-content'>
                  <a href="#" onClick={() => navigate("/category/women-kurtas-suits/products")}>Kurtas-Suits</a>
                  <a href="#" onClick={() => navigate("/category/women-tops/products")}>Tops</a>
                </div>
              </div>
              
               
              <div className='name' onClick={() => navigate("/category/baby-wares/products")}>Kid's Wears</div>
                 
               
              
               
                <div className='blog' onClick={() => navigate("/blog")}>Blog</div>
                
              
              <div className='contact' onClick={() => navigate("/contact_us")}>Contact</div>
               
              

            </div>
              <div ><input className='search' type="text" placeholder='Search for products' /></div>
          <div className='thired'>
            <div onClick={handleLogin}>
              <Avatar src="/broken-image.jpg" />
            </div>

            <div  className='cart' onClick={() => navigate("/cart")}>
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={cart.length} color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            </div>
            </div>
      </div>
    </div>
  
  )
}
