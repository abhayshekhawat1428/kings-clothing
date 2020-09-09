import React from 'react';
import StripeCheckout from  'react-stripe-checkout';

const onToken = token =>{
    console.log(token);
    alert('Payment Successful!');
}

const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price*100; //cents
    const pubKey = 'pk_test_51HPQmbJTpwVxHXBNlqhxsK4DDHobqVdOtjXMWsgBwjenmw5L8Xzvn9rxn9IP4eSq4Ac8Pf5FmCRDZO3E2t1MOe8L00LCI1ijXn';
    return (
        <StripeCheckout
        label = 'Pay Now'
        name = 'Kings Clothing Ltd.'
        billingAddress
        shippingAddress
        image = 'https://svgshare.com/i/CUz.svg'
        description = {`Your total is $${price}`}
        amount = {priceForStripe}
        panelLabel = 'Pay Now'
        token = {onToken}
        stripeKey = {pubKey}
        />
    )
}

export default StripeCheckoutButton;