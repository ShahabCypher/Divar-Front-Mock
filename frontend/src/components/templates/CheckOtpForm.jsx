import { ToastContainer, toast } from "react-toastify";

import { checkOtp } from "../../services/auth";

const CheckOtpForm = ({ otp, setOtp, mobile, setStep }) => {
  const submitHandler = async (e) => {
    e.preventDefault();

    if (otp.length !== 5) return;

    const { response, error } = await checkOtp(mobile, otp);

    if (response) console.log(response);
    if (error)
      toast.error(error.response.data.message, {
        position: "top-center",
      });
  };

  return (
    <form onSubmit={submitHandler}>
      <p>ورود به حساب کاربری</p>
      <span>کد پیامک‌شده به شمارۀ «{mobile}» را وارد کنید.</span>
      <label htmlFor="input">کد تأیید را وارد کنید</label>
      <input
        type="text"
        id="input"
        placeholder="کد تأیید"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button type="submit">ورود</button>
      <button onClick={() => setStep(1)}>تغییر شماره موبایل</button>
      <ToastContainer />
    </form>
  );
};

export default CheckOtpForm;
