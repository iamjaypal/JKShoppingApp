import React , {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/PaymentPage.css'

const PaymentPage = () => {
  const navigate = useNavigate(); 

  useEffect(() => {
  
    const timer = setTimeout(() => {
      navigate('/');  
    }, 4000);  
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="payment-container">
      <div className="congratulations-message">
        <h1>🎉 Congratulations! 🎉</h1>
        <p>Your payment was successful.</p>
      </div>
    </div>
  );
};

export default PaymentPage;
