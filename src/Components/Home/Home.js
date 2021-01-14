import classes from "./Home.module.css";

const Home = () => {
    return (<>
    <div className={classes.landingSection}>

    <h1>Serving you since 1989.</h1>
    <p>Acme Outdoors is an outdoor and adventure shop located in the Boathouse District in Oklahoma City.</p>
    <button>Shop Now</button>
    <div className={classes.overlay}></div>
    </div>
    </>  );
}
 
export default Home;