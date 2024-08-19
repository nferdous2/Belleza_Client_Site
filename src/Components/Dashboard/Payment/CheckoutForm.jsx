import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useCart from '../../../hooks/useCart';
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const CheckoutForm = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [cart, refetch] = useCart();
    const navigate = useNavigate();

    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    useEffect(() => {
       if(totalPrice > 0) {
        axiosSecure.post('/create-payment-intent', { price: totalPrice })
        .then(res => {
            setClientSecret(res.data.clientSecret);
            console.log(res.data.clientSecret);

        })
        .catch(err => {
            console.error('Error creating payment intent:', err);
        });
       }
    }, [axiosSecure, totalPrice]);
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (!stripe || !elements) {
            return;
        }
    
        const card = elements.getElement(CardElement);
    
        if (card === null) {
            return;
        }
    
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
    
        if (error) {
            console.log('payment error', error);
            setError(error.message);
        } else {
            console.log('payment method', paymentMethod);
            setError('');
        }
    
        // Confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        });
    
        if (confirmError) {
            console.log('confirm error', confirmError);
        } else {
            console.log('payment intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);
    
                // Now save the payment in the database
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    cartId: cart.map(item => item._id),
                    serviceId: cart.map(item => item.serviceId),
                    status: 'pending'
                };
    
                const res = await axiosSecure.post('/payments', payment);
                console.log('payment saved', res.data);
                refetch();
                if (res.data?.payResult?.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Payment Successful! Thank you for your purchase.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setTimeout(() => {
                        navigate('/');
                    }, 1600); 
                }
            }
        }
    };
    
    return (
<form 
    onSubmit={handleSubmit} 
    className="flex flex-col items-center space-y-4 max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg"
>
    <div className="w-full">
        <CardElement
            options={{
                style: {
                    base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                            color: '#aab7c4',
                        },
                    },
                    invalid: {
                        color: '#9e2146',
                    },
                },
            }}
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
    </div>
    
    <button 
        className="btn btn-primary my-4 w-full sm:w-52 transition-all duration-300 transform hover:scale-105 disabled:opacity-50" 
        type="submit" 
        disabled={!stripe || !clientSecret}
    >
        Pay
    </button>

    {error && <p className="text-red-600 text-sm text-center">{error}</p>}
    {transactionId && <p className="text-green-600 text-sm text-center">Your transaction ID: {transactionId}</p>}
</form>

    );
};

export default CheckoutForm;