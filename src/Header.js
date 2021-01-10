import { Link } from 'react-router-dom';
import classes from './Header.module.css';
import { useHistory } from 'react-router-dom';
import { Redirect } from "react-router-dom";

const Header = () => {
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
                    <Link className={classes.menuItems} to="./About">About</Link>
                    <Link className={classes.menuItems} to="./Shop">Shop</Link>
                    <Link className={classes.menuItems} to="./Donation">Donate</Link>
                    <Link className={classes.menuItems} to="./Contact">Contact</Link>
                    <div className={classes.cartIcon}><i class="fas fa-shopping-cart"></i><span>0</span></div>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default Header;
