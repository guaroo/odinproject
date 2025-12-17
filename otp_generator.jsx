const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {
    const [otp, setOtp] = useState(""); //generate via useState to change the value, creation of otp and adding in realtime to the <h2>
    const [count, setCount] = useState(0); //generate via useState to change the value, creation of timer
    const [isDisabled, setIsDisabled] = useState(false); //generate via useState to change the value, flag for button disable/enable
    const timerRef = useRef(null); //useRef to store the timer ID for clearing the interval later


    function generateOTP() {
        if (timerRef.current) {
            clearInterval(timerRef.current); //clear the timer if it already exists so that multiple timers don't run simultaneously
        }

        setIsDisabled(true);
        setCount(5);
        setOtp(Math.floor(100000 + Math.random() * 900000).toString()); //generate a random 6 digit otp and convert to string

        timerRef.current = setInterval(() => { //creation of a timer
            setCount((prevCount) => { //setting count every second by decrementing previous count value
                if (prevCount <= 1) {
                    clearInterval(timerRef.current);
                    setIsDisabled(false);
                    return 0;
                }
                return prevCount - 1;
            });
        }, 1000);
    }
    return(
        <>
            <div className="container">
                <h1 id="otp-title">OTP Generator</h1>
                <h2 id="otp-display">
                    {otp === "" ? "Click 'Generate OTP' to get a code" : otp}
                </h2>
                <p id="otp-timer" aria-live="assertive">
                    {count > 0 ? `Expires in: ${count} seconds` : otp === "" ? "" : "OTP expired. Click the button to generate a new OTP."}
                </p>
                <button id="generate-otp-button" onClick={generateOTP} disabled={isDisabled}>Generate OTP</button>
            </div>
        </>
    );
};