import classes from './Contact.module.css';

const Contact = () => {
    return (
        <>
        <div style={{display:'flex',justifyContent:'space-between',backgroundColor:'#222'}}>
        <div style={{color:'white',padding:'70px'}}>
            <h1 style={{fontWeight:'bold'}}>Contact Acme Outdoors</h1>
            <div style={{display:'flex'}}>
                <div className={classes.contactCard}>
                    <div><img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84ba313e8232516a7da902_chat-alt.svg" alt="" className="contact-icon"></img></div>
                    <h1>Contact Us</h1>
                    <p>Just want to say hi? We'd love to hear from you. We love our customers and community! </p>
                    <button>Send Us A Message</button>
                </div>
                <div className={classes.contactCard}>
                    <div><img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e850414db1f6ebfba8bc42d_chat-warning.svg" alt="" className="contact-icon"></img></div>
                    <h1>Contact Us</h1>
                    <p>Just want to say hi? We'd love to hear from you. We love our customers and community! </p>
                    <button>Send Us A Message</button>
                </div>
            </div>
        </div>
        <div className={classes.mainWrapper}>
        </div>
        </div>
        </>
    );
}
 
export default Contact;