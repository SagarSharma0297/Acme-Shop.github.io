(this["webpackJsonpacmeapp-assignment4-react"]=this["webpackJsonpacmeapp-assignment4-react"]||[]).push([[0],{13:function(e,t,a){e.exports={mainWrapper:"Contact_mainWrapper__tLa2w",backgroundwWrapper:"Contact_backgroundwWrapper__3gw9g",contactCardWrapper:"Contact_contactCardWrapper__uJ8rO",contactCard:"Contact_contactCard__16MVR",contactCardInnerWrapper:"Contact_contactCardInnerWrapper__3DMiy",container:"Contact_container__CoV5T",contactFormWrapper:"Contact_contactFormWrapper__3g5r_"}},19:function(e,t,a){e.exports={mainTitle:"ProductDetail_mainTitle__eMvI_",mainDiv:"ProductDetail_mainDiv__jEB5K",imageSection:"ProductDetail_imageSection__354aU",detailsSection:"ProductDetail_detailsSection__3P8AC"}},34:function(e,t,a){e.exports={landingSection:"Home_landingSection__2lji2",overlay:"Home_overlay__vMEdh"}},35:function(e,t,a){e.exports={pageTitle:"CovidAlert_pageTitle__1QgHO",container:"CovidAlert_container__1s_25"}},4:function(e,t,a){e.exports={landingSection:"About_landingSection__3LETw",overlay:"About_overlay__2DIY0",whyacmeSection:"About_whyacmeSection__31Cyg",whyacmeblock:"About_whyacmeblock__3uuMU",whyacmesmalltext:"About_whyacmesmalltext__1y48O",container:"About_container__3yAGQ",aboutColumnWrapper:"About_aboutColumnWrapper__2JFTx",aboutColumn:"About_aboutColumn__dHvZK",image:"About_image__3OZjK",contentSection:"About_contentSection__3A63q",shopLocalContainer:"About_shopLocalContainer__hmh0B",meetTheOwnersWrapper:"About_meetTheOwnersWrapper__VW26t",meetTheOwnersLeft:"About_meetTheOwnersLeft__31LHa",meetTheOwnersRight:"About_meetTheOwnersRight__2nb6j"}},5:function(e,t,a){e.exports={header1:"Header_header1__1awXA",ancmnt:"Header_ancmnt__10CL4",header2:"Header_header2__Xe5vr",menuWrapper:"Header_menuWrapper__3R6h2",menuItems:"Header_menuItems__3gws6",cartIcon:"Header_cartIcon__2HdF6",sidebar:"Header_sidebar__14Y8h",itemInCart:"Header_itemInCart__23DFt"}},53:function(e,t,a){},59:function(e,t,a){},7:function(e,t,a){e.exports={mainDiv:"Shop_mainDiv__mpzNe",featureItemWrapper:"Shop_featureItemWrapper__-3kEc",featureItem:"Shop_featureItem__2fZiW",mainTitle:"Shop_mainTitle__1p9-9",itemsWrappers:"Shop_itemsWrappers__6jET4",filterWrapper:"Shop_filterWrapper__2qgYd",cardsWrapper:"Shop_cardsWrapper__BtwKP",card:"Shop_card__10_Ix",filter:"Shop_filter__1UIKE",cardDetail:"Shop_cardDetail__2js_n"}},78:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),r=a(20),s=a.n(r),i=(a(53),a(12)),o=a(5),l=a.n(o),d=a(3),j=a(15),h=a(23),b=a(24),p=a(28),m=a(27),u=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var c;return Object(h.a)(this,a),(c=t.call(this,e)).state={itemincart:c.props.cartItems,left:c.props.show},c}return Object(b.a)(a,[{key:"render",value:function(){var e=this;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:l.a.sidebar,style:{left:this.props.left},children:[Object(c.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 16px",fontSize:"20px",borderBottom:"1px solid gray",fontWeight:"600"},children:[Object(c.jsx)("span",{children:"Your Cart"}),Object(c.jsx)("div",{style:{cursor:"pointer"},onClick:function(){e.props.hideCart()},children:Object(c.jsx)("i",{className:"fas fa-times"})})]}),this.props.cartItems.map((function(t,a){return Object(c.jsxs)("div",{className:l.a.itemInCart,children:[Object(c.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(c.jsx)("img",{width:"70px",style:{borderRadius:"4px",marginRight:"16px"},src:t.preview,alt:"itemPhoto"}),Object(c.jsxs)("div",{children:[t.name,Object(c.jsx)("br",{}),t.price]})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{onClick:function(a){e.props.removeFromCart(t.id)},children:"Remove"})})]},a)}))]})})}}]),a}(n.Component),O=Object(j.b)((function(e){return{cartItems:e.cart,left:e.showCart}}),(function(e){return{removeFromCart:function(t){return e({type:"REMOVE_PRODUCT",payload:t})},hideCart:function(){return e({type:"CHANGE_HIDE_CART",payload:t});var t}}}))(u),x=Object(j.b)((function(e){return{count:e.cart.length,cartItems:e.cart}}),(function(e){return{visibleCart:function(){return e({type:"CHANGE_HIDE_CART_TO_SHOW",payload:t});var t}}}))((function(e){var t=e.count,a=e.visibleCart,n=Object(d.e)();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:l.a.headerWrapper,children:[Object(c.jsxs)("div",{className:l.a.header1,onClick:function(){n.push("/CovidAlert")},children:[Object(c.jsx)("div",{className:l.a.ancmnt,children:"Announcement"}),Object(c.jsx)("div",{style:{color:"white",fontSize:"18px"},children:"How we're responding to COVID-19"})]}),Object(c.jsxs)("div",{className:l.a.header2,children:[Object(c.jsx)("div",{style:{cursor:"pointer"},onClick:function(){n.push("/")},children:Object(c.jsx)("img",{style:{backgroundColor:"blue"},src:"https://www.pngitem.com/pimgs/m/178-1783030_online-shopping-logo-png-transparent-png.png",alt:"logo",width:"50px"})}),Object(c.jsxs)("div",{className:l.a.menuWrapper,children:[Object(c.jsx)(i.b,{className:l.a.menuItems,to:"/",children:"Home"}),Object(c.jsx)(i.b,{className:l.a.menuItems,to:"/about",children:"About"}),Object(c.jsx)(i.b,{className:l.a.menuItems,to:"/shop",children:"Shop"}),Object(c.jsx)(i.b,{className:l.a.menuItems,to:"/donation",children:"Donate"}),Object(c.jsx)(i.b,{className:l.a.menuItems,to:"/contact",children:"Contact"}),Object(c.jsxs)("div",{onClick:function(){a()},className:l.a.cartIcon,children:[Object(c.jsx)("i",{className:"fas fa-shopping-cart"}),Object(c.jsx)("span",{children:t})]})]})]})]}),Object(c.jsx)(O,{})]})})),f=(a(59),a(34)),_=a.n(f),v=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:_.a.landingSection,children:[Object(c.jsx)("h1",{children:"Serving you since 1989."}),Object(c.jsx)("p",{children:"Acme Outdoors is an outdoor and adventure shop located in the Boathouse District in Oklahoma City."}),Object(c.jsx)("button",{children:"Shop Now"}),Object(c.jsx)("div",{className:_.a.overlay})]})})},g=a(4),y=a.n(g),C=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:y.a.landingSection,children:[Object(c.jsx)("h1",{children:"Your Adventure Awaits"}),Object(c.jsx)("p",{children:"Acme Outdoors has everything you need to help you get started today. Check out our wonderful collection of gear that will make your next adventure complete."}),Object(c.jsx)("button",{children:"Shop Now"}),Object(c.jsx)("div",{className:y.a.overlay})]}),Object(c.jsxs)("div",{className:y.a.whyacmeSection,children:[Object(c.jsxs)("div",{className:y.a.whyacmeblock,children:[Object(c.jsx)("p",{className:y.a.whyacmesmalltext,children:"Why Acme Outdoors?"}),Object(c.jsx)("h1",{children:"We\u2019re the best in the business."}),Object(c.jsx)("p",{children:"From more than 30 years, we\u2019ve been leading the way across Oklahoma \u2014 creating the best possible customer experience since 1989."})]}),Object(c.jsx)("div",{className:y.a.container,children:Object(c.jsxs)("div",{className:y.a.aboutColumnWrapper,children:[Object(c.jsxs)("div",{className:y.a.aboutColumn,children:[Object(c.jsx)("img",{src:"https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84b9ccd071025d67c7e431_verified.svg",alt:"Warranty Icon",className:y.a.image}),Object(c.jsx)("h3",{children:"Lifetime Warranty"}),Object(c.jsx)("p",{children:"All our products \u2014 whether we make them or not \u2014 are backed by our lifetime warranty."})]}),Object(c.jsxs)("div",{className:y.a.aboutColumn,children:[Object(c.jsx)("img",{src:"https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84ba18359d4c7fc8ba04d2_cart.svg",alt:"Shopping Cart Icon",className:y.a.image}),Object(c.jsx)("h3",{children:"Shopping Experience"}),Object(c.jsx)("p",{children:"All our products \u2014 whether we make them or not \u2014 are backed by our lifetime warranty."})]}),Object(c.jsxs)("div",{className:y.a.aboutColumn,children:[Object(c.jsx)("img",{src:"https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84ba26d07102b2bcc7e4fb_transport.svg",alt:"Delivery Icon",className:y.a.image}),Object(c.jsx)("h3",{children:"On-time Delivery"}),Object(c.jsx)("p",{children:"All our products \u2014 whether we make them or not \u2014 are backed by our lifetime warranty."})]}),Object(c.jsxs)("div",{className:y.a.aboutColumn,children:[Object(c.jsx)("img",{src:"https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84ba313e8232516a7da902_chat-alt.svg",alt:"Service Icon",className:"image"}),Object(c.jsx)("h3",{children:"Best in Class Service"}),Object(c.jsx)("p",{children:"All our products \u2014 whether we make them or not \u2014 are backed by our lifetime warranty."})]})]})}),Object(c.jsx)("div",{className:y.a.contentSection,children:Object(c.jsx)("div",{className:y.a.shopLocalContainer,children:Object(c.jsx)("div",{className:y.a.contentWrapper,children:Object(c.jsxs)("div",{className:y.a.meetTheOwnersWrapper,children:[Object(c.jsx)("div",{className:y.a.meetTheOwnersLeft}),Object(c.jsx)("div",{className:y.a.meetTheOwnersWrapperRight,children:Object(c.jsxs)("div",{className:y.a.ownerRichText,children:[Object(c.jsx)("h2",{children:"Meet the Owners"}),Object(c.jsxs)("p",{children:["John and Jane met on a backpacking adventure in Nepal. John, a former sheep shearer, went on the trip to get some clarity about his next adventures in life. Jane \u2014 a Peloton instructor \u2014 went on the trip to explore the landscape in Nepal.",Object(c.jsx)("br",{}),"While on the trip, John and Jane realized that they had one common love \u2014 the love for hiking and the love for being outdoors.",Object(c.jsx)("br",{}),"Returning back to their home state of Oklahoma, John and Jane hatched a plan to launch a retail store centered around their passions. ",Object(c.jsx)("br",{}),"While John handled the sourcing of goods and customer service, Jane focused on the web + e-commerce side of the business, building this website in the best design platform on the web \u2014 Webflow!",Object(c.jsx)("br",{}),"In 1989, John and Jane Doe officially launched Acme Outdoors, the premiere store for outdoor enthusiasts around the state.",Object(c.jsx)("br",{}),"To this day, John and Jane return to Nepal yearly to ensure that they never forget their roots and where they came from."]})]})})]})})})})]})]})},w=a(7),N=a.n(w),W=a(25),S=a.n(W),A=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var c;return Object(h.a)(this,a),(c=t.call(this,e)).state={productData:[],loader:!0},c}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=this;S.a.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product").then((function(t){e.setState({productData:t.data,loader:!1})})).catch((function(e){console.log("Product Api Is Giving Error=>",e)}))}},{key:"render",value:function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:N.a.mainTitle,children:Object(c.jsx)("h1",{children:"Shop Our Products"})}),Object(c.jsxs)("div",{className:N.a.mainDiv,children:[Object(c.jsxs)("div",{className:N.a.featureItemWrapper,children:[Object(c.jsxs)("div",{className:N.a.featureItem,children:[Object(c.jsx)("h1",{children:"White Tent"}),Object(c.jsx)("p",{children:"$ 200.00 USD"})]}),Object(c.jsx)("div",{children:"Feature Item"})]}),Object(c.jsxs)("div",{className:N.a.itemsWrappers,children:[Object(c.jsxs)("div",{className:N.a.filterWrapper,children:[Object(c.jsx)("h4",{children:"Shop By Category"}),Object(c.jsx)("div",{className:N.a.filter,children:"Gift Cards"}),Object(c.jsx)("div",{className:N.a.filter,children:"Tents"}),Object(c.jsx)("div",{className:N.a.filter,children:"Accessories"}),Object(c.jsx)("div",{className:N.a.filter,children:"Packs"})]}),Object(c.jsx)("div",{style:{maxWidth:"75%",minWidth:"75%",minHeight:"300px",flexWrap:"wrap",display:"flex",justifyContent:"center",alignItems:"center"},className:N.a.cardWrapper,children:this.state.loader?Object(c.jsx)("div",{className:"spinner-border"}):this.state.productData.map((function(e,t){return Object(c.jsx)(I,{props:e},t)}))})]})]})]})}}]),a}(n.Component),I=function(e){var t="/productdetail/"+e.props.id;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(i.b,{className:N.a.card,to:t,children:[Object(c.jsx)("img",{src:e.props.preview,alt:"itemphoto"}),Object(c.jsxs)("div",{className:N.a.cardDetail,children:[Object(c.jsx)("h1",{children:e.props.name}),Object(c.jsxs)("p",{children:["Rs. ",e.props.price]}),Object(c.jsx)("button",{children:"Details"})]})]})})},T=A,k=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("h1",{children:"Donation Page"})})},D=a(13),F=a.n(D),H=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:F.a.mainWrapper,children:[Object(c.jsxs)("div",{className:F.a.contactCardWrapper,children:[Object(c.jsx)("h1",{children:"Contact Acme Outdoors"}),Object(c.jsxs)("div",{className:F.a.contactCardInnerWrapper,children:[Object(c.jsxs)("div",{className:F.a.contactCard,children:[Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:"https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84ba313e8232516a7da902_chat-alt.svg",alt:"",className:"contact-icon"})}),Object(c.jsx)("h1",{children:"Contact Us"}),Object(c.jsx)("p",{children:"Just want to say hi? We'd love to hear from you. We love our customers and community! "}),Object(c.jsx)("button",{children:"Send Us A Message"})]}),Object(c.jsxs)("div",{className:F.a.contactCard,children:[Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:"https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e850414db1f6ebfba8bc42d_chat-warning.svg",alt:"",className:"contact-icon"})}),Object(c.jsx)("h1",{children:"Get Support"}),Object(c.jsx)("p",{children:"Have an issue with an order or with a product you purchased from us? Fill out our support form."}),Object(c.jsx)("button",{children:"Contact Support"})]})]})]}),Object(c.jsx)("div",{className:F.a.backgroundwWrapper})]}),Object(c.jsx)("section",{className:F.a.container,children:Object(c.jsxs)("div",{className:F.a.contactFormWrapper,children:[Object(c.jsxs)("div",{className:F.a.contactDetails,children:[Object(c.jsx)("h1",{children:"Contact Us"}),Object(c.jsxs)("p",{children:["Acme Outdoors ",Object(c.jsx)("br",{}),"123 Rainy Street ",Object(c.jsx)("br",{}),"Oklahoma City, OK 73129"]}),Object(c.jsxs)("h4",{children:["General Inquiries: ",Object(c.jsx)("span",{children:"(405) 555-5555"})]}),Object(c.jsxs)("h4",{children:["Customer Support: ",Object(c.jsx)("span",{children:"(405) 555-5556"})]})]}),Object(c.jsx)("form",{children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Contact Form"}),Object(c.jsx)("p",{children:"Send us a message and we'll get back to you as soon as we can! "}),Object(c.jsx)("h5",{children:"Name"}),Object(c.jsx)("input",{type:"text",placeholder:"Enter your name"}),Object(c.jsx)("h5",{children:"Email Address"}),Object(c.jsx)("input",{type:"text",placeholder:"Enter your email address"}),Object(c.jsx)("h5",{children:"Your Message"}),Object(c.jsx)("textarea",{placeholder:"Enter your message"}),Object(c.jsx)("input",{type:"submit"})]})})]})})]})},E=a(35),R=a.n(E),J=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:R.a.pageTitle,children:[" ",Object(c.jsx)("h1",{children:"How we're responding to COVID-19"})]}),Object(c.jsxs)("div",{className:R.a.container,children:[Object(c.jsx)("h1",{children:"What\u2019s a Rich Text element?"}),Object(c.jsx)("p",{children:"The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content."}),Object(c.jsx)("h3",{children:"Static and dynamic content editing"}),Object(c.jsx)("p",{children:"A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!"}),Object(c.jsx)("h3",{children:"How to customize formatting for each rich text"}),Object(c.jsx)("p",{children:'Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the "When inside of" nested selector system.'})]})]})},P=a(47),L=a(19),M=a.n(L),U=function(e){var t=e.addToCart,a=e.product;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:M.a.mainTitle,children:Object(c.jsx)("h1",{children:a.name})}),Object(c.jsxs)("div",{className:M.a.mainDiv,children:[Object(c.jsx)("div",{className:M.a.imageSection,children:Object(c.jsx)("img",{src:a.preview,alt:"detailphoto"})}),Object(c.jsxs)("div",{className:M.a.detailsSection,children:[Object(c.jsx)("h1",{children:a.name}),Object(c.jsx)("p",{children:a.price}),Object(c.jsx)("p",{children:" Enter Quantity:"}),Object(c.jsx)("input",{type:"text"})," ",Object(c.jsx)("br",{}),Object(c.jsx)("button",{onClick:function(){t(a)},children:"Add To Cart"}),Object(c.jsx)("h4",{children:a.brand}),Object(c.jsx)("p",{children:a.description})]})]})]})},B=Object(j.b)(null,(function(e){return{addToCart:function(t){return e({type:"ADD_PRODUCT",payload:t})}}}))((function(e){var t=e.addToCart,a=Object(d.f)().pId,r=Object(n.useState)(),s=Object(P.a)(r,2),i=s[0],o=s[1];return Object(n.useEffect)((function(){S.a.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product/".concat(a)).then((function(e){o(e.data)})).catch((function(e){return console.log("This is your error",e)}))}),[a]),Object(c.jsx)(c.Fragment,{children:i?Object(c.jsx)(U,{product:i,addToCart:t}):Object(c.jsx)("h1",{children:"Loading...."})})})),G=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{style:{height:"100px",backgroundColor:"#222",marginTop:"50px"}})})};var V=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(i.a,{children:[Object(c.jsx)(x,{}),Object(c.jsx)(d.a,{exact:!0,path:"/",component:v}),Object(c.jsx)(d.a,{path:"/About",component:C}),Object(c.jsx)(d.a,{path:"/Shop",component:T}),Object(c.jsx)(d.a,{path:"/Donation",component:k}),Object(c.jsx)(d.a,{path:"/Contact",component:H}),Object(c.jsx)(d.a,{path:"/CovidAlert",component:J}),Object(c.jsx)(d.a,{path:"/productdetail/:pId",component:B}),Object(c.jsx)(G,{})]})})},K=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,79)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))},Y=a(22),q=a(36),z=a(14),Q={cart:[],showCart:"100%"},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0,a=t.type,c=t.payload;switch(a){case"ADD_PRODUCT":return Object(z.a)(Object(z.a)({},e),{},{cart:[].concat(Object(q.a)(e.cart),[c])});case"REMOVE_PRODUCT":for(var n=0;n<e.cart.length;n++)e.cart[n].id===c&&e.cart.splice(n,1);return Object(z.a)(Object(z.a)({},e),{},{cart:Object(q.a)(e.cart)});case"CHANGE_HIDE_CART":return Object(z.a)(Object(z.a)({},e),{},{showCart:"100%"});case"CHANGE_HIDE_CART_TO_SHOW":return Object(z.a)(Object(z.a)({},e),{},{showCart:"65%"});default:return e}},X=function(){return Object(Y.b)(Z)}();s.a.render(Object(c.jsx)(j.a,{store:X,children:Object(c.jsx)(V,{})}),document.getElementById("root")),K()}},[[78,1,2]]]);
//# sourceMappingURL=main.6be39e2e.chunk.js.map