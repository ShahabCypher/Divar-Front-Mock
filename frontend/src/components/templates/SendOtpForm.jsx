import toast from "react-hot-toast";

import { sendOtp } from "services/auth";
import { p2e } from "utils/numbers";

import styles from "./SendOtpForm.module.css";

const SendOtpForm = ({ setStep, mobile, setMobile }) => {
  const submitHandler = async (e) => {
    e.preventDefault();

    if (mobile.length !== 11) return;

    const { response, error } = await sendOtp(p2e(mobile));

    if (response) setStep(2);
    if (error) toast.error("مشکلی پیش آمده است");
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
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
    </form>
  );
};

export default SendOtpForm;
