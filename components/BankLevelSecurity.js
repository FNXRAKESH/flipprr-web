import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link
} from "@nextui-org/react";
import Image from "next/image";
import Lottie from "lottie-react";
import storagesecurity from "@/public/storagesecurity.gif";
import security from "@/public/security.gif";
import animationData from "@/public/json/6QAdlXXg26.json";
import layers from "@/public/layers.gif";
import { Secured } from "@/public/svg/Secured";
import { MultiLayer } from "@/public/svg/MultiLayer";
import { DataStorage } from "@/public/svg/DataStorage";

const BankLevelSecurity = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-2 overflow-y-auto items-center">
        <div>
          <h1 className="text-4xl text-amber-500 text-center" color="warning">
            Bank-Level Security
          </h1>
          <p className="text-center py-5">
            Your financial security is our top priority. We employ
            state-of-the-art encryption and security protocols to safeguard your
            transactions
          </p>
        </div>

        <Lottie animationData={animationData} loop autoPlay />
      </div>
      <div className="flex xl:flex-nowrap flex-wrap gap-10 my-12 justify-center">
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <div className="svgContainer">
              <Secured />
            </div>
            <div className="flex flex-col">
              <p className="text-md">Bank-Grade Security</p>
              <p className="text-default-900">Your Peace of Mind</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>
              When it comes to the safety of your financial transactions,
              nothing is more important than peace of mind. At flipprr, we take
              security to the next level, providing you with bank-grade
              protection for all your transactions.
            </p>
          </CardBody>
        </Card>
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <div className="svgContainer">
              <MultiLayer />
            </div>
            <div className="flex flex-col">
              <p className="text-md">Multi-Layered Protection</p>
              <p className="text-default-900">Defend in depth</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>
              Our commitment to your security begins with a multi-layered
              approach. Each transaction you make with flipprr is shielded by
              multiple layers of security protocols and state-of-the-art
              encryption. This means that your financial data is encrypted and
              decrypted only at secure endpoints, ensuring that it remains
              confidential and protected throughout the entire process.
            </p>
          </CardBody>
        </Card>
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <div className="svgContainer">
              <DataStorage />
            </div>
            <div className="flex flex-col">
              <p className="text-md">Secure Data Storage</p>
              <p className="text-default-900">Fort Knox for data</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>
              We don't just protect your data during transactions; we also store
              it securely. Our servers are fortified with the latest security
              measures to safeguard your personal and financial information from
              any potential threats. Rest assured, your data is in safe hands.
            </p>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default BankLevelSecurity;
