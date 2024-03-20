import React, { FormEvent } from "react";
import { useRouter } from "next/navigation";
import CreditCardInput from "./CreditCardInput";
import useStripePayment from "./useStripePayment";

interface StripeFormProps {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>; // Updated signature
}

const index: React.FC<StripeFormProps> = ({ handleSubmit }) => {
  const router = useRouter();
  const { onStripeSubmit } = useStripePayment();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await onStripeSubmit();

    if (res?.success) {
      handleSubmit(e);
      console.log("payment success");
      router.push('/thank-you');
    }
  };

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <CreditCardInput />
        <input
          className="w-full py-3 outline-none border-b bg-transparent placeholder-[#fff] pl-[14px] border-b-[#FFFFFF]/20 text-[16px] text-[#FFFFFF] font-normal mb-6 "
          type="text"
          placeholder="Name on card"
        />

        <div className="flex items-center mb-4">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100  border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-checkbox"
            className="text-[16px] ml-4 text-[#FFFFFF] leading-[20.16px] font-normal font-jakrata"
          >
            Use shipping address as billing address
          </label>
        </div>

        {/* button */}
        <button
          type="submit"
          className="w-full uppercase my-14  h-[59px] rounded-[150px] bg-[#FFFFFF] text-[#121212] tracking-[2px] text-[15px] leading-[18.9px] font-semibold font-jakrata"
        >
          PAy Now
        </button>
      </form>
    </div>
  );
};

export default index;
