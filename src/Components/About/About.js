import React from 'react';
import classes from './About.module.css';
const About = () => {
    return (<>

        <div className={classes.landingSection}>

            <h1>Your Adventure Awaits</h1>
            <p>Acme Outdoors has everything you need to help you get started today. Check out our wonderful collection of gear that will make your next adventure complete.</p>
            <button>Shop Now</button>
            <div className={classes.overlay}></div>
        </div>
        <div className={classes.whyacmeSection}>
            <div className={classes.whyacmeblock}>
                <p className={classes.whyacmesmalltext}>Why Acme Outdoors?</p>
                <h1>We’re the best in the business.</h1>
                <p>From more than 30 years, we’ve been leading the way across Oklahoma — creating the best possible customer experience since 1989.</p>

            </div>
            <div className={classes.container}>
                <div className={classes.aboutColumnWrapper}>


                    <div className={classes.aboutColumn}>
                        <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84b9ccd071025d67c7e431_verified.svg" alt="Warranty Icon" className={classes.image}></img>
                        <h3>Lifetime Warranty</h3>
                        <p>All our products — whether we make them or not — are backed by our lifetime warranty.</p>
                    </div>
                    <div className={classes.aboutColumn}>
                        <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84ba18359d4c7fc8ba04d2_cart.svg" alt="Shopping Cart Icon" className={classes.image}></img>
                        <h3>Shopping Experience</h3>
                        <p>All our products — whether we make them or not — are backed by our lifetime warranty.</p>
                    </div>
                    <div className={classes.aboutColumn}>
                        <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84ba26d07102b2bcc7e4fb_transport.svg" alt="Delivery Icon" className={classes.image}></img>
                        <h3>On-time Delivery</h3>
                        <p>All our products — whether we make them or not — are backed by our lifetime warranty.</p>
                    </div>
                    <div className={classes.aboutColumn}>
                        <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84ba313e8232516a7da902_chat-alt.svg" alt="Service Icon" className="image"></img>
                        <h3>Best in Class Service</h3>
                        <p>All our products — whether we make them or not — are backed by our lifetime warranty.</p>
                    </div>

                </div>
            </div>




            <div className={classes.contentSection}>
                <div className={classes.shopLocalContainer}>
                    <div className={classes.contentWrapper}>
                        <div className={classes.meetTheOwnersWrapper}>
                            <div className={classes.meetTheOwnersLeft}></div>
                            <div className={classes.meetTheOwnersWrapperRight}>
                                <div className={classes.ownerRichText}>
                                    <h2>Meet the Owners</h2>
                                    <p>John and Jane met on a backpacking adventure in Nepal. John, a former sheep shearer, went on the trip to get some clarity about his next adventures in life. Jane — a Peloton instructor — went on the trip to explore the landscape in Nepal.<br></br>While on the trip, John and Jane realized that they had one common love — the love for hiking and the love for being outdoors.<br></br>Returning back to their home state of Oklahoma, John and Jane hatched a plan to launch a retail store centered around their passions. <br></br>While John handled the sourcing of goods and customer service, Jane focused on the web + e-commerce side of the business, building this website in the best design platform on the web — Webflow!<br></br>In 1989, John and Jane Doe officially launched Acme Outdoors, the premiere store for outdoor enthusiasts around the state.<br></br>To this day, John and Jane return to Nepal yearly to ensure that they never forget their roots and where they came from.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </>);
}

export default About;