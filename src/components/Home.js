//!---------------------using connect()--------------------------

// import React from 'react'

// function Home(props) {
//     //props have data,  addToCartHandler() & removeFromCartHandler() of HomeContainer
//     return (
//         <div>
           
//             <h1>Home Component</h1>
//             <div className="cart-wrapper">
//                 <div className="img-wrapper item">
//                     <img src="https://www.fdfproject.com/wp-content/uploads/2018/12/iphone-png.png" />
//                 </div>
//                 <div className="text-wrapper item">
//                     <span>
//                         I-Phone
//                     </span>
//                     <span>
//                         Price: $1000.00
//                     </span>
//                 </div>
//                 <div className="btn-wrapper item">
//                     <button 
//                     onClick={
//                         ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
//                         }>
//                         Add To Cart</button>

//                         <button 
//                         className="remove-cart-btn"
//                     onClick={
//                         ()=>{props.removeFromCartHandler()}
//                         }>
//                         Remove From Cart</button>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Home


//!------------------------------------using hooks------------------------

import React from 'react'
import {useSelector,useDispatch} from "react-redux";
import {addToCart, removeFromCart} from "../service/actions/actions.js"

function Home() {
const myState=useSelector((state)=>state.cardItems);
const dispatch=useDispatch();    
    return (
        <div>
                    <div className="add-to-cart">
    <span className="cart-count">{myState.length}</span>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
            </div>


            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.fdfproject.com/wp-content/uploads/2018/12/iphone-png.png" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        ()=>dispatch(addToCart({pice:1000,name:'i phone 11'}))
                        }>
                        Add To Cart</button>

                        <button 
                        className="remove-cart-btn"
                    onClick={
                        ()=>dispatch(removeFromCart())
                        }>
                        Remove From Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home