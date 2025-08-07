import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { checkOtp } from "services/auth";
import { setCookie } from "utils/cookie";
import { getProfile } from "services/user";

import styles from "./CheckOtpForm.module.css";

const CheckOtpForm = ({ otp, setOtp, mobile, setStep }) => {
  const navigate = useNavigate();
  const queryKey = ["profile"];
  const queryFn = () => getProfile();
  const { refetch } = useQuery({ queryKey, queryFn });

  const submitHandler = async (e) => {
    e.preventDefault();

    if (otp.length !== 5) return;

    const { response, error } = await checkOtp(mobile, otp);

    if (response) {
      setCookie(response.data);
      navigate("/");
      refetch();
    }
    if (error)
      toast.error(error.response.data.message, {
        position: "top-center",
      });
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
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
      <button onClick={() => setStep(1)} className={styles.backButton}>
        تغییر شماره موبایل
      </button>
      <ToastContainer />
    </form>
  );
};

export default CheckOtpForm;
