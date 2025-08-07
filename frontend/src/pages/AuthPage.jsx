import { useState } from "react";

import CheckOtpForm from "../components/templates/CheckOtpForm";
import SendOtpForm from "../components/templates/SendOtpForm";

const AuthPage = () => {
  const [step, setStep] = useState(2);
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");

  return (
    <div>
      {step === 1 && (
        <SendOtpForm setStep={setStep} mobile={mobile} setMobile={setMobile} />
      )}
      {step === 2 && (
        <CheckOtpForm
          otp={otp}
          setOtp={setOtp}
          mobile={mobile}
          setStep={setStep}
        />
      )}
    </div>
  );
};

export default AuthPage;
