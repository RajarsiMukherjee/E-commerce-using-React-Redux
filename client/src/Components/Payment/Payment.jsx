import { useEffect, useState } from 'react'
import "./Payment.css"
import { store } from '../../Redux/Store';
import { addCart, removeOneCart } from '../../Redux/Cart/Action'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
// import "./CartPage.css";
// import { store } from "../../Redux/Store"
import { deleteItemCart } from '../../Redux/Cart/Action';
import { useNavigate } from 'react-router-dom';
import { emptyCart } from '../../Redux/Cart/Action';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import { dataAdd } from '../../Redux/Shiping/Action';

export default function Payment() {

    const contactInfoAppend = useSelector((store) => store.shippingDataInfo.ShippingData)
    console.log("contact data o append", contactInfoAppend)
    const navigate = useNavigate()
    const [totalMRP, setTotalMRP] = useState(0)
    const dispatch = useDispatch()
    const data = useSelector((store) => store.cart.cart)

    console.log("cart", data)


    var total = 0;

    for (var i = 0; i < data.length; i++) {
        console.log("qty", data[i].qty, "price", data[i].price.sp)
        total += (data[i].price.sp * data[i].qty)

    }

    console.log("total all", total)

    useEffect(() => {
        setTotalMRP(total)
    }, [total])

    const handleAddBag = (e) => {
        console.log("data", e)
        dispatch(addCart(e))
        // alert("Product Added To Cart Successfully")
        toast.success("Product Added To Cart Successfully")
    }

    const handleRemoveQuantity = (e) => {
        console.log("remove", e)
        dispatch(removeOneCart(e))
        // alert("Product Added To Cart Successfully")
        // toast.success("Product Added To Cart Successfully")
    }

    const handleCheckout = () => {
        console.log("out")
        dispatch(emptyCart())
        navigate("/success")
    }

    const [cardNumber, setCardnumber] = useState("");
    const [cvv, setCvv] = useState("")

    console.log("numbera caer", cardNumber)
    return (
        <div className='ConatctDetailsMain'>

            <div className='ConatctDetails'>
                <div><p><b>PAYMENT</b></p>
                    <hr></hr></div><br />

                <div className="flex_table" id="payment_icons">
                    <img
                        src="https://www.bobbibrowncosmetics.com/media/export/cms/icons/visa_card.svg"
                        alt="visa"
                    ></img>
                    <img
                        src="https://www.bobbibrowncosmetics.com/media/export/cms/icons/master_card.svg"
                        alt="master"
                    ></img>
                    <img
                        src="https://www.bobbibrowncosmetics.com/media/export/cms/icons/maestro_card.svg"
                        alt="maestro"
                    />
                    <img
                        src="https://www.bobbibrowncosmetics.com/media/export/cms/icons/discover_card.svg"
                        alt="discover"
                    />
                    <img
                        src="https://www.bobbibrowncosmetics.com/media/export/cms/icons/amex_card.svg"
                        alt="amex_card"
                    />
                    <img
                        src="https://www.bobbibrowncosmetics.com/media/export/cms/icons/paypal_icon.svg"
                        alt="paypal"
                    />
                    <img
                        src="https://www.bobbibrowncosmetics.com/media/export/cms/icons/afterpay_icon.svg"
                        alt="afterpay"
                    ></img>
                </div><br />

                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '50ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <InputLabel htmlFor="standard-adornment-amount">CARD NUMBER</InputLabel>
                    <TextField id="outlined-basic" label="Must be 16 digit No*" onChange={(e) => {
                        {
                            setCardnumber(e.target.value)
                            if (cardNumber.length > 15) {
                                alert("number exceed")
                            }
                        }
                    }} variant="outlined" />
                    <div className='cvv'>
                        <div>
                            <InputLabel htmlFor="standard-adornment-amount">EXP MONTH /EXP YEAR</InputLabel><br />
                            <TextField id="outlined-basic" label="mm/year*" variant="outlined" />
                        </div>
                        <div>
                            <InputLabel htmlFor="standard-adornment-amount" >CVV</InputLabel>
                            <TextField id="outlined-basic" label="3 digits*" variant="outlined" onChange={(e) => {
                                setCardnumber(e.target.value)
                                if (cardNumber.length > 2) {
                                    alert("exceed")
                                }

                            }} />
                        </div>
                    </div>

                </Box>
                <button className='AddAddress1' onClick={handleCheckout}><b>CHECKOUT</b></button>
            </div>

            <div className='ProdAddress'>

                {
                    data.length !== 0 ?

                        <div className='ConatctCartData'>
                            <div className="flex_table">
                                <div>
                                    <b>PRODUCT</b>
                                </div>
                                <div>
                                    <b>QUANTITY</b>
                                </div>
                                <div>
                                    <b>PRICE</b>
                                </div>
                                <div>
                                    <b>TOTAL</b>
                                </div>
                            </div>
                            <hr></hr>

                            {
                                data.map((e) => (
                                    <div>
                                        <div className='cartProduct'>
                                            <img src={e.images[0]} alt="" width={80} height={90} />
                                            <div className='first'><p>{e.name}</p>
                                                <button onClick={() => dispatch(deleteItemCart(e.id))}>REMOVE</button>
                                            </div>
                                            <div className='quantity'>
                                                <button onClick={() => handleAddBag(e)}>+</button>
                                                <p>{e.qty}</p>
                                                <button onClick={() => handleRemoveQuantity(e)}>-</button>
                                            </div>
                                            <p>${e.price.sp}</p>
                                            <p>${(e.qty) * (e.price.sp)}</p>

                                        </div>

                                        <hr></hr>
                                        <br></br>
                                    </div>

                                ))
                            }

                            <div className='subTotal'>
                                <div className='heading'>
                                    <p>Subtotal</p>
                                    <p>Shipping</p>
                                    <p>SUBTOTAL</p>
                                </div>
                                <div className='price'>
                                    <p>$ {total}</p>
                                    <p>FREE</p>
                                    <p><b>$  {total}</b></p>
                                </div>
                            </div>
                        </div>
                        :
                        <div className='EmptyCart'><p><b>Your Cart is Empty</b></p></div>

                }

                <div className='Shipping'>
                    <p><b>Shipping Address</b></p><hr />
                    <p>Name: {contactInfoAppend ? contactInfoAppend.name : ""}</p>
                    <p>Address: {contactInfoAppend ? contactInfoAppend.address : ""}</p>
                    <p>Locality: {contactInfoAppend ? contactInfoAppend.locality : ""}, City / District: {contactInfoAppend ? contactInfoAppend.city : ""}</p>
                    <p>Pincode: {contactInfoAppend ? contactInfoAppend.pincode : ""}</p>
                    <p>Mobile: {contactInfoAppend ? contactInfoAppend.mobile : ""}</p>

                </div>
            </div>

        </div>
    )
}


