import classes from './Shop.module.css';
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productData:[],
            loader:true,
          }
    }
    
    componentDidMount(){
        axios.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
        .then((apiResult)=>{
            console.log(apiResult.data)
            this.setState({
                productData:apiResult.data,
                loader:false,
            })

        })
        .catch((apiError)=>{
            console.log("Product Api Is Giving Error=>",apiError)
        })
    }

    render() { 
        return (
        <>
        <div className={classes.mainTitle}>
            <h1>Shop Our Products</h1>
        </div>
        <div className={classes.mainDiv}>
            <div className={classes.featureItemWrapper}>
                <div className={classes.featureItem}>
                    <h1>White Tent</h1>
                    <p>$ 200.00 USD</p>
                </div>
                <div>Feature Item</div>
            </div>

            <div className={classes.itemsWrappers}>
                <div className={classes.filterWrapper}>
                    <h4>Shop By Category</h4>
                    <div className={classes.filter}>Gift Cards</div>
                    <div className={classes.filter}>Tents</div>
                    <div className={classes.filter}>Accessories</div>
                    <div className={classes.filter}>Packs</div>
                </div>
                <div style={{maxWidth:"75%",minWidth:'75%',minHeight:'300px',flexWrap:'wrap',display:'flex',justifyContent:'center',alignItems:'center'}} className={classes.cardWrapper}>
                    {this.state.loader ? <div className="spinner-border"></div> : this.state.productData.map(item=><Card props={item} />)}
                </div>
            </div>
        </div>
        </> 
        );
    }
}

const Card = (props) => {
    let path = "/productdetail/"+props.props.id;
    return (  
        <>  
            <Link className={classes.card} to={path}>
                <img src={props.props.preview} alt='itemphoto'></img>
                <div className={classes.cardDetail}>
                    {console.log(props.props.brand)}
                    <h1>{props.props.name}</h1>
                    <p>Rs. {props.props.price}</p>
                    <button>Details</button>
                </div>
            </Link>
        </>
    );
}
 
export default Shop ;