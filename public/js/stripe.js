/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe('pk_test_51I86SbBsIz8Ih2IBRN0Pt3h3sXZKjt67nOEavvdgi1oxzjmmeNmPfgKgz8mpQHM13I0r8GeFfv6wK28Yjkr32SUU00yZjL24wf');

export const bookTour = async tourId => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // console.log(session);

    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
