import {
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import axios from "axios";

import useToast from "@/hooks/useToast";

import useShoppingCart from "@/hooks/useShoppingCart";

const useStripePayment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const toast = useToast();

  const { cartProductsTotalPrice } = useShoppingCart();

  const onStripeSubmit = async () => {
    if (!stripe || !elements) {
      //! Stripe.js has not yet loaded. // Make sure to disable form submission until Stripe.js has loaded.
      // console.log("Stripe has not yet loaded");
      return { success: false };
    }

    //! Generating user info and payment method to send to stripe
    const createPaymentMethodResult = await createPaymentMethod();

    if (createPaymentMethodResult?.error) {
      toast.error(
        createPaymentMethodResult?.error?.message || "Something went wrong"
      );
      return { success: false };
    }

    //! getting paymentMethod ID
    const paymentMethodID = createPaymentMethodResult?.paymentMethod?.id;

    const paymentRes = await createPayment(paymentMethodID);

    return paymentRes;
  };

  const createPayment = async (paymentMethodID: string) => {
    try {
    const { billing_details, metadata } = getMetaDataAndBillingDetails();

      const res = await axios.post("/api/stripe", {
        amount: cartProductsTotalPrice,
        metadata
      });

      const { client_secret, success } = res?.data?.data;
      //   console.log({ client_secret, success });
      //! Now confirm CardPayment

      const confirmedCardPaymentResult = await stripe?.confirmCardPayment(
        client_secret,
        {
          payment_method: paymentMethodID,
        }
      );

      //   console.log("confirm payment result", confirmedCardPaymentResult);

      //! if there's some error in confirming payment
      if (confirmedCardPaymentResult?.error) {
        toast.error(
          confirmedCardPaymentResult?.error?.message || "Something went wrong"
        );

        return { success: false };
      }

      //! success
      if (!confirmedCardPaymentResult?.error) {
        toast.success("Payment Successful");
        return { success: true };
      }
    } catch (error: any) {
      console.log("axios paymentIntent error", error?.message);
      return { success: false };
    }
  };

  const createPaymentMethod = async () => {
    const cardElement = elements?.getElement(CardNumberElement);

    const { billing_details, metadata } = getMetaDataAndBillingDetails();

    if (cardElement && stripe) {
      const createPaymentMethodResult: any = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        //   billing_details,
        metadata,
      });

      //! if error in creating payment
      if (createPaymentMethodResult.error) {
        return {
          paymentMethod: null,
          success: false,
          error: createPaymentMethodResult.error,
        };
      }
      //! if create payment method success
      return {
        paymentMethod: createPaymentMethodResult.paymentMethod,
        success: true,
        error: null,
      };
    }

    //! if stripe or card is not found
    return {
      paymentMethod: null,
      success: false,
      error: {
        message: "Something went wrong with Stripe Loading",
        code: "missing_stripe",
        type: "Stipe_load_error",
      },
    };
  };

  const getMetaDataAndBillingDetails = () => {
    const billing_details = {
      email: "test@gmail.com",
      // name: "test",
      // address: {
      //   city: "Lahore",
      //   country: "pk",
      //   postal_code: "54000",
      //   state: "punjab",
      //   line1: "MM ALam Road",
      // },
    };

    const metadata = {
      email: "test@gmail.com",
      uid: "currentUser?.uid" || "",
    };

    // console.log({ metadata, billing_details });

    return { metadata, billing_details };
  };

  return { onStripeSubmit };
};

export default useStripePayment;
