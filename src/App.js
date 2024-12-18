import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CheckoutForm from './CheckoutForm';
import CompletePage from './CompletePage';
import './App.css';

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  'pk_test_51QMYD5H00jC7Ty5A1mWcoCy54ex7BDwoHuoE3kHBdOPsarf6lhxgltAmfT2LZz8Fjh4zR1s6gmiu4L2XPo2L2u7t002J5aImqy'
);

export default function App() {
  const [clientSecret, setClientSecret] = useState('');
  const [dpmCheckerLink, setDpmCheckerLink] = useState('');

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch('https://moonlit-crostata-889efb.netlify.app/payments/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 4999, currency: 'usd' }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setClientSecret(data.clientSecret);
        // [DEV] For demo purposes only
        setDpmCheckerLink(data.dpmCheckerLink);
        //setLoading(false);
      });
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  // Enable the skeleton loader UI for optimal loading.
  const loader = 'auto';

  return (
    <Router>
      <div className='App'>
        {clientSecret && (
          <Elements
            options={{ clientSecret, appearance, loader }}
            stripe={stripePromise}
          >
            <Routes>
              <Route
                path='/checkout'
                element={<CheckoutForm dpmCheckerLink={dpmCheckerLink} />}
              />
              <Route path='/complete' element={<CompletePage />} />
            </Routes>
          </Elements>
        )}
      </div>
    </Router>
  );
}
