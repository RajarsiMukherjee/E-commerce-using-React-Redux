import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import "./Product.css";
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Product() {
  const navigate = useNavigate()
  const {id} = useParams()
  console.log("hi", id)

  const [data, setData] = useState([])
  const[sortorder, SetSortorder] = useState("")
  const[sortby, SetSortby] = useState("")
  const[size , SetSize] = useState("")
  const[discount, SetDiscount] = useState("")
  const[rating, SetRating] = useState("")

  useEffect(()=> {
    axios.get(`https://macbackendraj.herokuapp.com/${id}`,{
      params: {
          _sort: sortorder,
          _order: sortby,
          sizes_like : size,
          'price.discount_gte' : discount,
          customer_rating_gte : rating
      }
    }).then((res) => setData(res.data))
  },[id,sortorder,sortby,size, discount, rating ])

  console.log("append data",  sortorder,sortby)
  return (
    <div className='main'>
      <div className='CategoryHeading'>
        <p>{id} Category</p>
        <p>
        <span onClick={()=> navigate("/")}>Home |</span>
                    <span >{id}</span>
        </p>
      </div>

    <div className='CategoryBelowCategory'>

      <div className='FilterDiv'>
      <FormControl >
      <FormLabel className='checkDiv' id="demo-radio-buttons-group-label">CATEGORIES</FormLabel>
      <RadioGroup className='checkDiv'
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel onClick={() => navigate("/category/women-kurtas-suits/products")} value="womenKurtas" control={<Radio />} label="Women Kurtas" />
        <FormControlLabel onClick={() => navigate("/category/women-tops/products")} value="womenTops" control={<Radio />} label="Women Tops" />
        <FormControlLabel onClick={() => navigate("/category/men-jeans/products")} value="MenJeans" control={<Radio />} label="Men Jeans" />
        <FormControlLabel onClick={() => navigate("/category/men-t-shirts/products")} value="MenTshirt" control={<Radio />} label="Men T-Shirt" />
        <FormControlLabel onClick={() => navigate("/category/baby-jeans/products")} value="BabyWears" control={<Radio />} label="Baby Wears" />
      </RadioGroup>
      <br></br>

      <FormLabel className='checkDiv' id="demo-radio-buttons-group-label">PRICE</FormLabel>
      <RadioGroup className='checkDiv'
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="highLow" onClick={()=> { SetSortorder("price.sp"); SetSortby("desc")}} control={<Radio />} label="High To Low" />
        <FormControlLabel value="lowHigh" onClick={()=> {SetSortorder("price.sp"); SetSortby("asc")}} control={<Radio />} label="Low To High" />
      </RadioGroup>
      <br></br>
      <FormLabel className='checkDiv' id="demo-radio-buttons-group-label">DISCOUNT RANGE</FormLabel>
      <RadioGroup className='checkDiv'
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="10A" onClick={()=> {SetDiscount("10")}} control={<Radio />} label="10% and Above" />
        <FormControlLabel value="20A" onClick={()=> {SetDiscount("20")}} control={<Radio />} label="20% and Above" />
        <FormControlLabel value="30A" onClick={()=> {SetDiscount("30")}} control={<Radio />} label="30% and Above" />
        <FormControlLabel value="40A" onClick={()=> {SetDiscount("40")}} control={<Radio />} label="40% and Above" />
        <FormControlLabel value="50A" onClick={()=> {SetDiscount("50")}} control={<Radio />} label="50% and Above" />
        <FormControlLabel value="60A" onClick={()=> {SetDiscount("60")}} control={<Radio />} label="60% and Above" />
        <FormControlLabel value="70A" onClick={()=> {SetDiscount("70")}} control={<Radio />} label="70% and Above" />
        <FormControlLabel value="80A" onClick={()=> {SetDiscount("80")}} control={<Radio />} label="80% and Above" />
      </RadioGroup>
      <br></br>
      <FormLabel className='checkDiv' id="demo-radio-buttons-group-label">RATING</FormLabel>
      <RadioGroup className='checkDiv'
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="1" onClick={()=> { SetRating("1")}} control={<Radio />} label=" 1 +" />
        <FormControlLabel value="2" onClick={()=> { SetRating("2")}} control={<Radio />} label=" 2 +" />      
        <FormControlLabel value="3" onClick={()=> { SetRating("3")}} control={<Radio />} label=" 3 +" />
        <FormControlLabel value="4" onClick={()=> { SetRating("4")}} control={<Radio />} label=" 4 +" />
        </RadioGroup>

        <br></br>
      <FormLabel className='checkDiv' id="demo-radio-buttons-group-label">SIZE</FormLabel>
      <RadioGroup className='checkDiv'
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="28" onClick={()=> {SetSize("XL")}} control={<Radio />} label="28" />
        <FormControlLabel value="32" onClick={()=> {SetSize("L")}} control={<Radio />} label="32" />
        <FormControlLabel value="34" onClick={()=> {SetSize("XX")}} control={<Radio />} label="34" />
        <FormControlLabel value="36" onClick={()=> {SetSize("XXX")}} control={<Radio />} label="36" />      </RadioGroup>
      

      
      
    </FormControl>
        </div>
 

        <div className='products-right' >
          {
            data.map((e) => (
                <div className ='each-product' onClick={()=> navigate(`/${id}/${e.id}`)} >
                  <div lassName ='each-product1' >
                    <img src={e.images[0]} alt="" />
                    <div className = 'brand'>{e.brand_name}</div>
                    <div className='name'>{e.name}</div>
                    <div className='price'>
                      Rs. {e.price.sp}
                      <span className = 'line-through'> Rs. {e.price.mrp} </span>
                      <span className='discount'>  {e.price.discount} % OFF</span>
                    </div>
                  </div>
                </div>
            ))
          }
        </div>

      </div>
    </div>
  )
}
