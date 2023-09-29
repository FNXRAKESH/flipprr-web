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
import animationData from "@/public/json/tracking.json";
import layers from "@/public/layers.gif";

const Tracking = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-2 overflow-y-auto items-center">
        <div>
          <h1 className="text-4xl text-amber-500 text-center" color="warning">
            Real-Time Tracking
          </h1>
          <p className="py-5">
            In today's fast-paced world, keeping a close eye on your finances is
            essential for maintaining financial stability and achieving your
            monetary goals. Real-time tracking of your expenses is a powerful
            tool that empowers you to take control of your financial well-being.
            </p><p>Imagine having the ability to monitor every penny you spend as it
            happens, instantly gaining insights into your financial habits. This
            is precisely what flipprr offers. Whether you're
            an individual trying to stick to a budget, a small business owner
            aiming to optimize cash flow, or a large corporation looking to
            enhance expense management, flipprr can revolutionize the
            way you handle your finances.
          </p>
        </div>

        <Lottie animationData={animationData} loop autoPlay />
      </div>
      
    </>
  );
};

export default Tracking;
