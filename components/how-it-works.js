import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import qrcode from '@/public/qrcode.png'
import signup from "@/public/signup.png";
import cc from "@/public/creditcard.png";
import bankTransfer from "@/public/banktransfer.png";
import agent from "@/public/agent.png";
import instanttransfer from "@/public/instanttransfer.png";
import Image from "next/image";
const HowItWorks = () => {
  return (
    <div id="howItWorks">
      <h1 className="text-4xl text-amber-500 text-center pb-12" color="warning">
        How it Works?
      </h1>
      <Controller>
        <div className="grid md:grid-cols-2 gap-2">
          <div className="w-full hidden md:block">
            <Scene pin triggerHook="0.15">
              <div className="mt-12">
                <Scene
                  duration="80%"
                  triggerElement="#step1Content"
                  classToggle="listContainer"
                >
                  <div>
                    <p className="opacity-0 text-sm">Step 01</p>
                    <p className="pb-5 text-2xl">Download our app</p>
                  </div>
                </Scene>
                <Scene
                  duration="70%"
                  triggerElement="#step2Content"
                  classToggle="listContainer"
                >
                  <div>
                    <p className="opacity-0 text-sm">Step 02</p>
                    <p className="pb-5 text-2xl">Register with your mobile</p>
                  </div>
                </Scene>
                <Scene
                  duration="250%"
                  triggerElement="#step3"
                  classToggle="listContainer"
                >
                  <div>
                    <p className="opacity-0 text-sm">Step 03</p>
                    <p className="pb-5 text-2xl">Load your wallet</p>
                  </div>
                </Scene>
                <Scene
                  duration="100%"
                  triggerElement="#step6Content"
                  classToggle="listContainer"
                >
                  <div>
                    <p className="opacity-0 text-sm">Step 04</p>
                    <p className="pb-5 text-2xl">Transfer money instantly</p>
                  </div>
                </Scene>
              </div>
            </Scene>
          </div>
          <div className="w-full">
            <Scene
              triggerHook="0.6"
              duration="50%"
              triggerElement="#step1Content"
              classToggle="fade-in"
            >
              <div
                id="step1Content"
                className="steps ease-in duration-300 w-full"
              >
                <h1 className="text-2xl pb-12 balance" color="warning">
                  Download our app by scanning the qr code below
                </h1>
                <Image src={qrcode} alt="qrcode" height={200} />
              </div>
            </Scene>
            <Scene
              triggerHook="0.6"
              duration="50%"
              triggerElement={"#step2Content h1"}
              classToggle="fade-in"
            >
              <div
                id="step2Content"
                className="steps ease-in duration-300 w-full"
              >
                <h1 className="text-2xl pb-5 balance">
                  Sign up using your mobile number
                </h1>
                <Image src={signup} alt="sign up" />
              </div>
            </Scene>
            <div id="step3">
              <Scene
                triggerHook="0.6"
                duration="50%"
                triggerElement={"#step3Content h1"}
                classToggle="fade-in"
              >
                <div
                  id="step3Content"
                  className="steps ease-in duration-300 w-full"
                >
                  <h1 className="text-2xl pb-5 balance">
                    Choose any of these options to fill up your wallet
                  </h1>
                  <p className="text-xl pb-10">
                    1. Via a credit card or a debit card
                  </p>

                  <Image src={cc} alt="credit card" />
                </div>
              </Scene>
              <Scene
                triggerHook="0.6"
                duration="50%"
                triggerElement={"#step4Content p"}
                classToggle="fade-in"
              >
                <div
                  id="step4Content"
                  className="steps ease-in duration-300 w-full"
                >
                  <p className="text-xl">2. Via a bank transfer</p>

                  <Image src={bankTransfer} alt="bank Transfer" />
                  {/* <p className="p-10">
                    Through an agent - Find a flipprr user on the app and hand
                    them cash and request them to transfer money to your wallet.
                  </p> */}
                </div>
              </Scene>
              <Scene
                triggerHook="0.6"
                duration="50%"
                triggerElement={"#step5Content p"}
                classToggle="fade-in"
              >
                <div
                  id="step5Content"
                  className="steps ease-in duration-300 w-full"
                >
                  <p className="text-xl pb-3">3. Through an agent</p>
                  <p>
                    Find a flipprr user on the app and hand them cash and
                    request them to transfer money to your wallet.
                  </p>
                  <Image src={agent} alt="agent" />
                </div>
              </Scene>
            </div>
            <Scene triggerElement={"#step6Content h1"} classToggle="fade-in">
              <div
                id="step6Content"
                className="steps ease-in duration-300 w-full"
              >
                <h1 className="text-2xl pb-5 balance">
                  Transfer money instantly
                </h1>
                <Image src={instanttransfer} alt="instant transfer" />
              </div>
            </Scene>
          </div>
        </div>
      </Controller>
    </div>
  );
};

export default HowItWorks;
