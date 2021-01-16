import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Header.module.css'
class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemincart:this.props.cartItems,
        }     
    }
    componentDidMount(){
        this.setState({left:this.props.left})
    }
    render() { 
        return ( <>
        <div className={classes.sidebar} style={{display:'none' }}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'8px 16px',fontSize:'20px',borderBottom:'1px solid gray',fontWeight:'600'}}>
                <span>Your Cart</span>
                <div style={{cursor:'pointer'}} onClick={()=>{
                    this.setState({left:'100%'});
                }}><i className="fas fa-times"></i></div>
            </div>
            {this.props.cartItems.map((item,index)=>{ return(
            <div className={classes.itemInCart} key={index}>
                <div style={{display:'flex',alignItems:'center'}}>
                    <img width="70px" style={{borderRadius:'4px',marginRight:'16px'}} src={item.preview} alt='itemPhoto'></img>
                    <div>{item.name}<br></br>{item.price}</div>
                    
                </div>
                <div>
                    <button>Remove</button>
                </div>
            </div>)
        })}                      
        </div>
        </> );
    }
    
}


const mapStateToProps = (store) =>({
    cartItems: store.cart
})
export default connect(mapStateToProps)(SideBar);