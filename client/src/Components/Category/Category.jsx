import React from 'react'
import "./Category.css"
import { useNavigate } from 'react-router-dom'

export default function Category() {
    const navigate = useNavigate()
  return (
    <div className='Category'>
      <div onClick={() => navigate("/mens_Fashion")}><p className='CategoryName'>Men's Fashion</p><p className='CategoryShopNow'>Shop Now</p></div>
      <div onClick={() => navigate("/womens_Fashion")}><p className='CategoryName'>Women's Fashion</p><p className='CategoryShopNow'>Shop Now</p></div>
      <div onClick={() => navigate("/kid's_Fashion")}><p className='CategoryName'>Kid's Fashion</p><p className='CategoryShopNow'>Shop Now</p></div>
    </div>
  )
}
