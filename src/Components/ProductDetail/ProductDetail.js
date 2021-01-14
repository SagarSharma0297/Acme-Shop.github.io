import axios from "axios";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import classes from './ProductDetail.module.css';
import { addItemToCart } from '../ActionCreater';


const ProductDetail = ({addToCart}) => {

    let { pId } =useParams();
    let [product,setproduct] = useState();

    useEffect(()=>{
        axios.get(`https://5d76bf96515d1a0014085cf9.mockapi.io/product/${pId}`)
        .then(apiresult=>{
            setproduct(apiresult.data)
        })
        .catch(apiError=>console.log('This is your error',apiError))
    },[pId])
    
    return ( 
        <>
        {!product ? <h1>Loading....</h1> : <DetailsComponent product={product} addToCart={addToCart}/>}     
        </>
     );
}

const DetailsComponent = ({addToCart,product}) => {
    return ( 
        <>
        <div className={classes.mainTitle}>
            <h1>{product.name}</h1>
        </div>
        <div className={classes.mainDiv}>
            <div className={classes.imageSection}>
                <img src={product.preview} alt="detailphoto"></img>
            </div>
            <div className={classes.detailsSection}>
                <h1>{product.name}</h1>
                <p>{product.price}</p>
                <p> Enter Quantity:</p>
                <input type="text"></input> <br></br>
                <button onClick = {()=>{addToCart(product)}}>Add To Cart</button>
                <h4>{product.brand}</h4>
                <p>{product.description}</p>
            </div>
        </div>
        </>
     );
}

const mapDispatchToProps = (dispatch) => ({

    addToCart:(item) => dispatch(addItemToCart(item))

})
 
export default connect(null,mapDispatchToProps)(ProductDetail);