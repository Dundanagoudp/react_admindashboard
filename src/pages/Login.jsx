import { useContext, useEffect } from 'react';
import '../css/Login.css';
import { myContext } from '../components/AppLayout';

export const Login = () => {
  const context = useContext(myContext);

  useEffect(() => {
    context.setIsHideSidebarAndHeader(true);
  }, [context]);

  return (
    <>
    <img src="" />
    <section className="loginSection">
      <div className="loginBox">
        <div className="logo">
          <img src="/logo1.png" alt="Logo" width="60px" />
          <h5 className="font-weight-bold">Login to Dashboard</h5>
        </div>
      </div>
    </section>
    </>
  );
};
