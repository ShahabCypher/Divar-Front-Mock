import { ToastContainer, toast } from "react-toastify";

import { sendOtp } from "../../services/auth";

const SendOtpForm = ({ setStep, mobile, setMobile }) => {
  const submitHandler = async (e) => {
    e.preventDefault();

    if (mobile.length !== 11) return;

    const { response, error } = await sendOtp(mobile);

    if (response) setStep(2);
    if (error)
      toast.error(error.response.data.message, {
        position: "top-center",
      });
  };

  return (
    <form onSubmit={submitHandler}>
      <p>ورود به حساب کاربری</p>
      <span>
        برای استفاده از امکانات دیوار، لطفاً شمارهٔ موبایل خود را وارد کنید. کد
        تأیید به این شماره پیامک خواهد شد.
      </span>
      <label htmlFor="input">شمارهٔ موبایل خود را وارد کنید</label>
      <input
        type="text"
        id="input"
        placeholder="شماره موبایل"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <button type="submit">ارسال کد تایید</button>
      <ToastContainer />
    </form>
  );
};

export default SendOtpForm;
