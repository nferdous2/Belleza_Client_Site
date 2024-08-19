import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import Title from '../../../Shared/Title';


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway);


const Payment = () => {
    return (
        <div>
            <Title heading="Payment" />
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
    );
};

export default Payment;