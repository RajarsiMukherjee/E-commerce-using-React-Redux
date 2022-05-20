import React from 'react'
import "./ProductDetails.css";
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux'
// import store from "../../Redux/Store"
import { addCart } from '../../Redux/Cart/Action'

export default function ProductDetails() {
    const { id } = useParams()
    const [data, setData] = useState(null)
     

    const dispatch = useDispatch()
    const cart = useSelector((store) => store.cart.cart)
     
    useEffect(() => {

        if (id) axios.get(`https://macbackendraj.herokuapp.com/products/${id}`).then((res) => setData(res.data))
    }, [])

    const handleAddBag = () => {
        console.log(data)

        dispatch(addCart(data))
        alert("Product Added To Cart Successfully")
    }



    // console.log("data", data)
    const navigate = useNavigate()
    return (
        <div>
            <div className='CategoryHeading'>
                <p>Product Details</p>
                <p>
                    <span onClick={() => navigate("/")}>Home |</span>
                    <span onClick={() => navigate("/mens_Fashion")}> Category</span>
                </p>
            </div>

            <div className='ProdDetails'>
                <div className='ProdImage'>
                    <a class="each-product" ><img src={data ? data.images[0] : ""} alt="" /></a>
                    <a class="each-product" ><img src={data ? data.images[1] : ""} alt="" /></a>
                    <a class="each-product" ><img src={data ? data.images[2] : ""} alt="" /></a>
                    <a class="each-product" ><img src={data ? data.images[4] : ""} alt="" /></a>

                </div>

                <div className='ProdInfo'>
                    <div><p>{data ? data.brand_name : ""}</p></div>
                    <div><p>{data ? data.name : ""}</p></div>
                    <div><p>{data ? data.customer_rating : 0}<span class="fa fa-star checked"></span></p></div>

                    <div className='linebreak'><hr /></div>

                    <div className='PriceDiv'>
                        <div><p>Rs. {data ? data.price.sp : 0}</p></div>
                        <div><p>Rs. {data ? data.price.mrp : 0}</p></div>
                        <div><p> {data ? data.price.discount : 0} % OFF </p></div>
                    </div>
                    <p className='tax'>Inclusive of all taxes</p>

                    <div className='SelectSizeDiv'><span>SELECT SIZE</span><span>SIZE CHART</span></div>

                    <div className='sizesDiv'>
                        <div><p>S</p></div>
                        <div><p>M</p></div>
                        <div><p>L</p></div>
                        <div><p>XL</p></div>
                        <div><p>XXL</p></div>
                    </div>

                    <div className='AddButton'>
                        <button onClick={() => {handleAddBag(data._id)}}>ADD TO BAG</button>
                        <button>WISHLIST</button>
                    </div>

                    <div className='PorductDetailDiv'>
                        <p>PRODUCT DETAILS</p>
                    </div>

                    <div>
                        <p>{data ? data.product_details : ""}</p>
                    </div>

                </div>
            </div>
        </div>

        
    )
}
