(this["webpackJsonpredux-example"]=this["webpackJsonpredux-example"]||[]).push([[0],{12:function(e,t,a){e.exports={cartItem:"CartItem_cartItem__2cfjr",cartItem__image:"CartItem_cartItem__image__3_p6L",cartItem__details:"CartItem_cartItem__details__1qLLQ",details__title:"CartItem_details__title__Tiwsf",details__desc:"CartItem_details__desc__GZqzD",details__price:"CartItem_details__price__1CpEI",cartItem__actions:"CartItem_cartItem__actions__1CrTt",cartItem__qty:"CartItem_cartItem__qty__1hCMo",actions__deleteItemBtn:"CartItem_actions__deleteItemBtn__3WzBc"}},13:function(e,t,a){e.exports={navbar:"Navbar_navbar__CLYHD",navbar__logo:"Navbar_navbar__logo__aP_Pp",navbar__links:"Navbar_navbar__links__3rvti",navbar__link:"Navbar_navbar__link__3lSxM",navbar__cart:"Navbar_navbar__cart__3aCcm",cart__title:"Navbar_cart__title__38gUd",cart__image:"Navbar_cart__image__BZY9s",cart__counter:"Navbar_cart__counter__3Tvmc"}},14:function(e,t,a){e.exports={cart:"Cart_cart__3GqLz",cart__items:"Cart_cart__items__1bRU_",cart__summary:"Cart_cart__summary__3-tX3",summary__title:"Cart_summary__title__33avP",summary__price:"Cart_summary__price__2ivFV",summary__checkoutBtn:"Cart_summary__checkoutBtn__1ZC9Q"}},15:function(e,t,a){e.exports={singleItem:"SingleItem_singleItem__3fW5x",singleItem__image:"SingleItem_singleItem__image__1FSjO",singleItem__details:"SingleItem_singleItem__details__GdK_V",details__title:"SingleItem_details__title__1bCfn",details__price:"SingleItem_details__price__2X__E",details__description:"SingleItem_details__description__1M4ll",details__addBtn:"SingleItem_details__addBtn__1zKPM"}},33:function(e,t,a){e.exports={products:"Products_products__3Zab5"}},36:function(e,t,a){e.exports=a(50)},41:function(e,t,a){},42:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),n=a(21),i=a.n(n),_=(a(41),a(11)),l=a(3),o=(a(42),a(4)),s=a(17),m=a(13),u=a.n(m),d=a(25),p=a(24),b=Object(o.b)((function(e){return{cart:e.shop.cart}}))((function(e){var t=e.cart,a=Object(r.useState)(0),n=Object(s.a)(a,2),i=n[0],l=n[1];return Object(r.useEffect)((function(){var e=0;t.forEach((function(t){e+=t.qty})),l(e)}),[t,i]),c.a.createElement("div",{className:u.a.navbar},c.a.createElement(_.b,{to:"/"},c.a.createElement("h2",{className:u.a.navbar__logo},"React Redux Webshop")),c.a.createElement("div",{className:u.a.navbar__links},c.a.createElement(_.b,{to:"/"},c.a.createElement("a",{className:u.a.navbar__link},"Products")),c.a.createElement("p",null," | "),c.a.createElement(_.b,{to:"/cart"},c.a.createElement("a",{className:u.a.navbar__link},"Cart")),c.a.createElement("p",null," | "),c.a.createElement(_.b,{to:"/cart"},c.a.createElement("a",{className:u.a.navbar__link},"Checkout"))),c.a.createElement(_.b,{to:"/cart"},c.a.createElement("div",{className:u.a.navbar__cart},c.a.createElement(d.a,{icon:p.a,style:{color:"white",fontSize:"1.5em"}}),c.a.createElement("div",{className:u.a.cart__counter},i))))})),f=a(33),E=a.n(f),v=a(9),h=a.n(v),N=function(e){return{type:"ADD_TO_CART",payload:{id:e}}},y=Object(o.b)(null,(function(e){return{addToCart:function(t){return e(N(t))},loadCurrentItem:function(t){return e(function(e){return{type:"LOAD_CURRENT_ITEM",payload:e}}(t))}}}))((function(e){var t=e.product,a=e.addToCart,r=e.loadCurrentItem;return c.a.createElement("div",{className:h.a.product},c.a.createElement("img",{className:h.a.product__image,src:t.image,alt:t.title}),c.a.createElement("div",{className:h.a.product__details},c.a.createElement("p",{className:h.a.details__title},t.title),c.a.createElement("p",{className:h.a.details__price},"$",t.price.toFixed(2))),c.a.createElement("div",{className:h.a.product__details},c.a.createElement("p",{className:h.a.details__desc},t.description)),c.a.createElement("div",{className:h.a.product__buttons},c.a.createElement(_.b,{to:"/product/".concat(t.id)},c.a.createElement("button",{onClick:function(){return r(t)},className:"".concat(h.a.buttons__btn," ").concat(h.a.buttons__view)},"View Item")),c.a.createElement("button",{onClick:function(){return a(t.id)},className:"".concat(h.a.buttons__btn," ").concat(h.a.buttons__add)},"Add To Cart")))})),g=Object(o.b)((function(e){return{products:e.shop.products}}))((function(e){var t=e.products;return c.a.createElement("div",{className:E.a.products},t.map((function(e){return c.a.createElement(y,{key:e.id,product:e})})))})),x=a(14),I=a.n(x),w=a(12),C=a.n(w),j=Object(o.b)(null,(function(e){return{adjustQty:function(t,a){return e({type:"ADJUST_ITEM_QTY",payload:{id:t,qty:a}})},removeFromCart:function(t){return e({type:"REMOVE_FROM_CART",payload:{id:t}})}}}))((function(e){var t=e.item,a=e.adjustQty,n=e.removeFromCart,i=Object(r.useState)(t.qty),_=Object(s.a)(i,2),l=_[0],o=_[1];return c.a.createElement("div",{className:C.a.cartItem},c.a.createElement("img",{className:C.a.cartItem__image,src:t.image,alt:t.title}),c.a.createElement("div",{className:C.a.cartItem__details},c.a.createElement("p",{className:C.a.details__title},t.title),c.a.createElement("p",{className:C.a.details__desc},t.description),c.a.createElement("p",{className:C.a.details__price},"$",t.price.toFixed(2)),c.a.createElement("div",{className:C.a.cartItem__actions},c.a.createElement("div",{className:C.a.cartItem__qty},c.a.createElement("label",{htmlFor:"qty"},"Qty"),c.a.createElement("input",{min:"1",type:"number",id:"qty",name:"qty",value:l,onChange:function(e){o(e.target.value),a(t.id,e.target.value)}})),c.a.createElement("div",{onClick:function(){return n(t.id)},className:C.a.actions__deleteItemBtn},c.a.createElement(d.a,{icon:p.b,style:{color:"#764abc",fontSize:"1.2em"}})))))})),O=Object(o.b)((function(e){return{cart:e.shop.cart}}))((function(e){var t=e.cart,a=Object(r.useState)(0),n=Object(s.a)(a,2),i=n[0],_=n[1],l=Object(r.useState)(0),o=Object(s.a)(l,2),m=o[0],u=o[1];return Object(r.useEffect)((function(){var e=0,a=0;t.forEach((function(t){e+=t.qty,a+=t.qty*t.price})),u(e),_(a)}),[t,i,m,_,u]),c.a.createElement("div",{className:I.a.cart},c.a.createElement("div",{className:I.a.cart__items},t.map((function(e){return c.a.createElement(j,{key:e.id,item:e})}))),c.a.createElement("div",{className:I.a.cart__summary},c.a.createElement("h4",{className:I.a.summary__title},"Cart Summary"),c.a.createElement("div",{className:I.a.summary__price},c.a.createElement("span",null,"Subtotal:"),c.a.createElement("span",null,"$",i.toFixed(2))),c.a.createElement("div",{className:I.a.summary__price},c.a.createElement("span",null,"Items qty:"),c.a.createElement("span",null,m)),c.a.createElement("button",{className:I.a.summary__checkoutBtn},c.a.createElement("span",null,"Total $",i.toFixed(2)))))})),B=a(15),M=a.n(B),S=Object(o.b)((function(e){return{current:e.shop.currentItem}}),(function(e){return{addToCart:function(t){return e(N(t))}}}))((function(e){var t=e.current,a=e.addToCart;return c.a.createElement("div",{className:M.a.singleItem},c.a.createElement("img",{className:M.a.singleItem__image,src:t.image,alt:t.title}),c.a.createElement("div",{className:M.a.singleItem__details},c.a.createElement("p",{className:M.a.details__title},t.title),c.a.createElement("p",{className:M.a.details__description},t.description),c.a.createElement("p",{className:M.a.details__price},"$",t.price.toFixed(2)),c.a.createElement("button",{onClick:function(){return a(t.id)},className:M.a.details__addBtn},"Add To Cart")))}));var k=Object(o.b)((function(e){return{current:e.shop.currentItem}}))((function(e){var t=e.current;return c.a.createElement(_.a,null,c.a.createElement("div",{className:"app"},c.a.createElement(b,null),c.a.createElement(l.d,null,c.a.createElement(l.b,{exact:!0,path:"/",component:g}),c.a.createElement(l.b,{exact:!0,path:"/cart",component:O}),t?c.a.createElement(l.b,{exact:!0,path:"/product/:id",component:S}):c.a.createElement(l.a,{to:"/"}))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=a(16),T=a(34),D=a(35),A=a(5),H={products:[{id:1,title:"Nike Shoes",description:"Some cool Nike shoes",price:15,image:"https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"},{id:2,title:"Nike Shoes",description:"Another pair of Nike shoes",price:20,image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"},{id:3,title:"Nike Shoes",description:"Yet another pair of Nike shoes",price:150,image:"https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"},{id:4,title:"New Balance Shoes",description:"Awesome New Balance shoes",price:50,image:"https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"},{id:5,title:"New Balance Shoes",description:"Another pair of New Balance shoes",price:60,image:"https://images.unsplash.com/photo-1510414050375-8404bd196322?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"},{id:6,title:"New Balance Shoes",description:"Yet another pair of New Balance shoes",price:75,image:"https://images.unsplash.com/photo-1602487790202-27a673875ef7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"}],cart:[],currentItem:null},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":var a=e.products.find((function(e){return e.id===t.payload.id})),r=e.cart.find((function(e){return e.id===t.payload.id}));return Object(A.a)(Object(A.a)({},e),{},{cart:r?e.cart.map((function(e){return e.id===t.payload.id?Object(A.a)(Object(A.a)({},e),{},{qty:e.qty+1}):e})):[].concat(Object(D.a)(e.cart),[Object(A.a)(Object(A.a)({},a),{},{qty:1})])});case"REMOVE_FROM_CART":return Object(A.a)(Object(A.a)({},e),{},{cart:e.cart.filter((function(e){return e.id!==t.payload.id}))});case"ADJUST_ITEM_QTY":return Object(A.a)(Object(A.a)({},e),{},{cart:e.cart.map((function(e){return e.id===t.payload.id?Object(A.a)(Object(A.a)({},e),{},{qty:+t.payload.qty}):e}))});case"LOAD_CURRENT_ITEM":return Object(A.a)(Object(A.a)({},e),{},{currentItem:t.payload});default:return e}},G=Object(q.combineReducers)({shop:P}),R=Object(q.createStore)(G,Object(T.composeWithDevTools)());i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(o.a,{store:R},c.a.createElement(k,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports={product:"Product_product__1X-8I",product__image:"Product_product__image__2hAeh",product__details:"Product_product__details__1QOL0",details__title:"Product_details__title__2q6wg",details__desc:"Product_details__desc__d-VoZ",details__price:"Product_details__price__1QgPG",product__buttons:"Product_product__buttons__BM43S",buttons__btn:"Product_buttons__btn__2s4i7",buttons__view:"Product_buttons__view__1uKwU",buttons__add:"Product_buttons__add__1u5wV"}}},[[36,1,2]]]);
//# sourceMappingURL=main.79536010.chunk.js.map