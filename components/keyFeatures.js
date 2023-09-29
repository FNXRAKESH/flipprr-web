import React, { useEffect, useState } from 'react';
import Lottie from "lottie-react";
import animationData from "@/public/json/6QAdlXXg26.json";
import animationData2 from "@/public/json/animation_lmt4mp31.json";
import animationData3 from "@/public/json/animation_lmt52aou.json";
import animationData4 from "@/public/json/animation_lmqbla14.json";
import { Controller, Scene } from "react-scrollmagic";
import { Chip } from '@nextui-org/react';
import { CheckIcon } from './checkIcon';

const KeyFeatures = () => {
    const [animations, setAnimations] = useState([
      animationData,
      animationData2,
      animationData3
    ]);
    const [currentAnimationIndex, setCurrentAnimationIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

   const handleAnimationComplete = () => {
     if (currentAnimationIndex < animations.length - 1) {
       setCurrentAnimationIndex(currentAnimationIndex + 1);
     } else {
       setCurrentAnimationIndex(0)
     }
   };
const animationOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData // Replace with your actual animation data
};
   useEffect(() => {
     // Start playing the first animation when the component mounts
     setIsPlaying(true);
   }, []);
     useEffect(() => {
       // Reset animation to the beginning when changing animations
       setIsPlaying(true);
     }, [currentAnimationIndex]);
    return (
      //   <>
      //     <div
      //       className="grid grid-cols-2 gap-2 overflow-y-auto"
      //       style={{ paddingBottom: 0 }}
      //     >
      //       <Controller>
      //         <Scene duration={4000} pin triggerPosition="50%">
      //           <div className="pt-0 flex flex-col">
      //             <h1 className="text-4xl pb-5">Key Feature</h1>
      //             <div className="mb-3">
      //               <Chip size="lg" startContent={<CheckIcon size={18} />}>
      //                 Lightning-Fast Transfers
      //               </Chip>
      //             </div>
      //             <div className="mb-3">
      //               <Chip size="lg" startContent={<CheckIcon size={18} />}>
      //                 Bank-Level Security
      //               </Chip>
      //             </div>
      //             <div className="mb-3">
      //               <Chip size="lg" startContent={<CheckIcon size={18} />}>
      //                 Competitive Rates
      //               </Chip>
      //             </div>
      //             <div className="mb-3">
      //               <Chip size="lg" startContent={<CheckIcon size={18} />}>
      //                 User-Friendly Interface
      //               </Chip>
      //             </div>
      //             <div className="mb-3">
      //               <Chip size="lg" startContent={<CheckIcon size={18} />}>
      //                 Real-Time Tracking
      //               </Chip>
      //             </div>
      //             <div className="mb-3">
      //               <Chip size="lg" startContent={<CheckIcon size={18} />}>
      //                 24/7 Customer Support
      //               </Chip>
      //             </div>
      //           </div>
      //         </Scene>
      //       </Controller>
      //       <div className="pb-0">
      //         <Lottie
      //           animationData={animationData}
      //           loop={true} // Set to true if you want the animation to loop
      //           autoplay={true} // Set to true if you want the animation to play automatically
      //         />
      //         <div class="h-screen"></div>
      //         <Lottie
      //           animationData={animationData}
      //           loop={true} // Set to true if you want the animation to loop
      //           autoplay={true} // Set to true if you want the animation to play automatically
      //         />

      //       </div>
      //     </div>
      //     <p>
      //       Join millions of satisfied users who trust flipprr for their money
      //       transfer needs. Download the app today and experience the future of
      //       hassle-free, secure, and lightning-fast financial transactions. Your
      //       money, your way, with flipprr.
      //     </p>
      //   </>
      <div
        id="keyFeatures"
        className="grid grid-cols-2 gap-2 pb-12 items-start"
      >
        <div>
          <h1 className="text-4xl pb-5 text-amber-500">
            Key Features
          </h1>
          <div className="py-5 border-b-1">
            <h1 className="text-xl pb-3">Lightning-Fast Transfers</h1>
            <p className="text-slate-500">
              Say goodbye to long waiting times. flipprr ensures your money
              reaches its destination quickly, so you can take care of what
              matters most.
            </p>
          </div>
          <div className="py-5 border-b-1">
            <h1 className="text-xl pb-3">Bank-Level Security</h1>
            <p className="text-slate-500">
              Your financial security is our top priority. We employ
              state-of-the-art encryption and security protocols to safeguard
              your transactions.
            </p>
          </div>
          <div className="py-5 border-b-1">
            <h1 className="text-xl pb-3">Competitive Rates</h1>
            <p className="text-slate-500">
              Enjoy competitive exchange rates and low fees, ensuring you get
              more value for your money.
            </p>
          </div>
          {/* <div className="py-5 border-b-1">
            <h1 className="text-xl pb-3">Global Reach</h1>
            <p className='text-slate-500'>
              flipprr connects you to a vast network of international
              partners, making it easy to send money to over 150 countries
              worldwide.
            </p>
          </div> */}
          {/* <div className="py-5 border-b-1">
            <h1 className="text-xl pb-3">User-Friendly Interface</h1>
            <p className='text-slate-500'>
              Our intuitive app design ensures a seamless experience, even for
              first-time users. Sending money has never been this easy.
            </p>
          </div> */}
          <div className="py-5 border-b-1">
            <h1 className="text-xl pb-3">Real-Time Tracking</h1>
            <p className="text-slate-500">
              Stay in the loop with real-time transaction tracking, so you
              always know the status of your transfers.
            </p>
          </div>
          {/* <div className="py-5 border-b-1">
            <h1 className="text-xl pb-3">Business Solutions</h1>
            <p className='text-slate-500'>
              flipprr offers business accounts with customized features for
              corporate clients, simplifying payroll, vendor payments, and more.
            </p>
          </div> */}
          <div className="py-5 border-b-1">
            <h1 className="text-xl pb-3">24/7 Customer Support</h1>
            <p className="text-slate-500">
              Have a question or need assistance? Our dedicated customer support
              team is available around the clock to assist you.
            </p>
          </div>
        </div>
        <Lottie
          animationData={animations[currentAnimationIndex]}
          isStopped={!isPlaying}
          isPaused={!isPlaying}
          onComplete={handleAnimationComplete}
          loop={false}
        />
      </div>
    );
};

export default KeyFeatures;