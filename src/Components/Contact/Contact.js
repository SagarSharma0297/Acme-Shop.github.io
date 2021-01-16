import classes from './Contact.module.css';

const Contact = () => {
    return (
        <>
            <div className={classes.mainWrapper}>
                <div className={classes.contactCardWrapper}>
                    <h1>Contact Acme Outdoors</h1>
                    <div className={classes.contactCardInnerWrapper}>
                        <div className={classes.contactCard}>
                            <div><img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84ba313e8232516a7da902_chat-alt.svg" alt="" className="contact-icon"></img></div>
                            <h1>Contact Us</h1>
                            <p>Just want to say hi? We'd love to hear from you. We love our customers and community! </p>
                            <button>Send Us A Message</button>
                        </div>
                        <div className={classes.contactCard}>
                            <div><img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e850414db1f6ebfba8bc42d_chat-warning.svg" alt="" className="contact-icon"></img></div>
                            <h1>Get Support</h1>
                            <p>Have an issue with an order or with a product you purchased from us? Fill out our support form.</p>
                            <button>Contact Support</button>
                        </div>
                    </div>
                </div>
                <div className={classes.backgroundwWrapper}>
                </div>
            </div>
            <section id>
            <div>
                <div className={classes.contactDetails}>
                    <h1>Contact Us</h1>
                    <p>Acme Outdoors <br></br>123 Rainy Street <br></br>Oklahoma City, OK 73129</p>
                    <h4>General Inquiries: <span>(405) 555-5555</span></h4>
                    <h4>Customer Support: <span>(405) 555-5556</span></h4>
                </div>
                <div>
                    <h1>Contact Form</h1>
                    <p>Send us a message and we'll get back to you as soon as we can! </p>
                    <h5>Name</h5>
                    <input type="text" placeholder="Enter your name"></input>
                    <h5>Email Address</h5>
                    <input type="text" placeholder="Enter your email address"></input>
                    <h5>Your Message</h5>
                    <textarea placeholder="Enter your message"></textarea>
                </div>
            </div>
            </section>
        </>
    );
}

export default Contact;