'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const SplashScreen = () => {

  const router = useRouter();
	const handleBack = () => {
		router.back();
	};
  
	 


  return (
    <>

      <section className="spalsh-screen">
        <div className="circle text-center">
          <div>
            <h1>Totché Gbé</h1>
            <p>Communiquez plus facilement dans nimporte quelle langue.</p>
          </div>
        </div>
        <div className="loader-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>


      <div className="appbar">
        <button onClick={handleBack} className="back-page-btn">
          <img src="/assets/svg/menu/back-white.svg" alt="icon" />
        </button>
        <h1>Splash screen</h1>
      </div>
    </>
  );
};

export default SplashScreen;
