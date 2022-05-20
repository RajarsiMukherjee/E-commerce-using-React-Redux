import React from 'react'
import "./CartPage.css"
import { useEffect, useState } from 'react'
import { addCart, removeOneCart } from '../../Redux/Cart/Action'
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { useDispatch,useSelector } from "react-redux"
import { Store } from "../../Redux/Store"
import { deleteItemCart } from '../../Redux/Cart/Action';
import { useNavigate } from 'react-router-dom';
export default function CartPage() {
  const navigate = useNavigate()
  const data = useSelector((store) => store.cart.cart)
  const [totalMRP , setTotalMRP] = useState(0)
  console.log("cart", data)
  //console.log("cart frontend", data)
  var total = 0 ;

  for(var i=0; i<data.length; i++){
    console.log("qty" , data[i].qty, "price" , data[i].price.sp)
    total += (data[i].price.sp *  data[i].qty)
    
  }
  const dispatch = useDispatch()
  console.log("total all",total)

  useEffect(() => {
    setTotalMRP(total)
  },[total])

  const handleAddBag = (e) => {
    console.log("data",e)
    dispatch(addCart(e))
    // alert("Product Added To Cart Successfully")
    toast.success("Product Added To Cart Successfully")
}

const handleRemoveQuantity = (e) => {
  console.log("remove",e)
  dispatch(removeOneCart(e))
  // alert("Product Added To Cart Successfully")
  // toast.success("Product Added To Cart Successfully")
}

  return (
    <div style={{ padding: "2.5% 0%" }}>
       <div id="cart_div">
       
      
        <div className="cart_products">
           
          <h3>SHOPPING BAG</h3>
          <hr></hr>
          <p>Enjoy Free Standard Shipping on any $65+ order.</p>
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
            data.map((e)=> (
              <div>
              <div className='cartProduct'>
                <img src={e.images[0]} alt="" width={80} height={90} />
                <div className='first'><p>{e.name}</p>
                    <button onClick={ () =>  dispatch(deleteItemCart(e.id))}>REMOVE</button>
                </div>
                <div className='quantity'>
                  <button onClick={() => handleAddBag(e)}>+</button>
                  <p>{e.qty}</p>
                  <button onClick={() => handleRemoveQuantity(e)}>-</button>
                </div>
                <p>${e.price.sp}</p>
                <p>${(e.qty)*(e.price.sp)}</p>
            
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

          <div>
            <hr></hr>
            <p>
              Afterpay cannot be used to purchase backordered, pre-ordered or
              auto-replenishment products, donations or gift cards{" "}
            </p>
          </div>
        </div>
      
        <div className="cart_summary">
         <button className='checkBtn' onClick={() => navigate("/checkout")}>CHECKOUT</button> 
          

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
          </div>
          <h3>OFFER CODE</h3>
          <hr></hr>
          <input
            placeholder="Offer Code"
            style={{ width: "95%", padding: "2.5%" }}
          />
          <div
            className="flex_table"
            style={{ justifyContent: "space-between", fontSize: "15px" }}
          >
            <p>One offer code per order</p>
            <p style={{ color: "grey", textDecoration: "underline" }}>
              SEE ALL OFFERS
            </p>
          </div>
          <button className="apply">APPLY</button>
          <hr></hr>
          <p style={{ textAlign: "center", fontWeight: "bold" }}>
            Join BB Access and earn 144 points with your purchase today.
          </p>
          <hr></hr>

          <p style={{ fontSize: "15px" }}>
            Afterpay cannot be used to purchase backordered, pre-ordered or
            auto-replenishment products, donations or gift cards{" "}
          </p>
          <h3>DONATE</h3>
          <hr></hr>
          <div className="donate_div">
            <div>
              <img
                style={{ width: "20%" }}
                src="https://www.bobbibrowncosmetics.com/media/export/cms/products/80x80/bb_prod_555877_80x80_0.jpg"
                alt=""
              ></img>
            </div>
            <select style={{ width: "95%", margin: "auto", padding: "5px" }}>
              <option value="BCRF">BCRF DONATION</option>
              <option value="SheisFirst">She's The First</option>
            </select>
            <p style={{ fontSize: "15px" }}>
              Donate today to The Breast Cancer Research Foundation to support
              life-saving research. Learn More about BCRF.
            </p>
            <form>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  width: "60%",
                }}
              >
                <section>
                  <input type="radio" name="selected" value="onetime"></input>
                  <label>1.00$</label>
                </section>
                <section>
                  <input type="radio" name="selected" value="replenish"></input>
                  <label>5.00$</label>
                </section>
                <section>
                  <input type="radio" name="selected" value="replenish"></input>
                  <label>10.00$</label>
                </section>
              </div>
            </form>
            <br></br>
            <button className="apply">ADD TO CART</button>
          </div>
        </div>
      </div>
     
    
      <div id="fans_also_like">
        <hr></hr>
        <h3>FANS ALSO LIKE</h3>
      </div>
    </div>
  )
}
