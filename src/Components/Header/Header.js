import { Link} from 'react-router-dom';
import classes from './Header.module.css';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';
import SideBar from './sidebar';
import { visibleCart1 } from '../ActionCreater';


const Header = ({count,visibleCart}) => {
    let history = useHistory(); 
    return (  
       
        <>
        <div className={classes.headerWrapper}>
            <div className={classes.header1} onClick={()=>{
              history.push('/CovidAlert')
            }}>
                <div className={classes.ancmnt}>Announcement</div>
                <div style={{'color':'white',fontSize:"18px"}}>How we're responding to COVID-19</div>
            </div>
            <div className={classes.header2}>
                <div style={{cursor:"pointer"}} onClick={()=>{history.push('/')}}>
                <img style={{backgroundColor:"blue"}} src="https://www.pngitem.com/pimgs/m/178-1783030_online-shopping-logo-png-transparent-png.png" alt="logo" width="50px">

                </img>
                </div>
                <div className={classes.menuWrapper}>
                    <Link className={classes.menuItems} to="/">Home</Link>
                    <Link className={classes.menuItems} to="/about">About</Link>
                    <Link className={classes.menuItems} to="/shop">Shop</Link>
                    <Link className={classes.menuItems} to="/donation">Donate</Link>
                    <Link className={classes.menuItems} to="/contact">Contact</Link>
                    <div onClick={()=>{
                        visibleCart()
                    }
                    } className={classes.cartIcon}><i className="fas fa-shopping-cart"></i><span>{count}</span></div>
                </div>
            </div>
        </div>
            <SideBar/>
        </>
    );
}
const mapStateToProps = (store) =>({
    count: store.cart.length,
    cartItems: store.cart
})

const mapDispatchToProps = (dispatch) => ({
    visibleCart:() => dispatch(visibleCart1())
})
export default connect(mapStateToProps,mapDispatchToProps)(Header);

