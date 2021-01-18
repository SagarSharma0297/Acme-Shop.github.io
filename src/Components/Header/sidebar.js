import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Header.module.css'
import { removeItemFromCart,hideCart1 } from '../ActionCreater';

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemincart:this.props.cartItems,
            left:this.props.show,
        }     
    }
    render() { 
        return ( <>
        <div className={classes.sidebar} style={{left:this.props.left}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'8px 16px',fontSize:'20px',borderBottom:'1px solid gray',fontWeight:'600'}}>
                <span>Your Cart</span>
                <div style={{cursor:'pointer'}} onClick={()=>{
                    this.props.hideCart()
                }}><i className="fas fa-times"></i></div>
            </div>
            {this.props.cartItems.map((item,index)=>{ return(
            <div className={classes.itemInCart} key={index}>
                <div style={{display:'flex',alignItems:'center'}}>
                    <img width="70px" style={{borderRadius:'4px',marginRight:'16px'}} src={item.preview} alt='itemPhoto'></img>
                    <div>{item.name}<br></br>{item.price}</div>
                    
                </div>
                <div>
                    <button onClick={(e) => {
                        this.props.removeFromCart(item.id)
                    }}>Remove</button>
                </div>
            </div>)
        })}                      
        </div>
        </> );
    }    
}


const mapStateToProps = (store) =>({
    cartItems: store.cart,
    left:store.showCart,
})

const mapDispatchToProps = (dispatch) => ({
    removeFromCart:(id) => dispatch(removeItemFromCart(id)),
    hideCart:() => dispatch(hideCart1())
    
})
export default connect(mapStateToProps,mapDispatchToProps)(SideBar);