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
import animationData from "@/public/json/analyitics.json";
import layers from "@/public/layers.gif";
import { Transparent } from "@/public/svg/Transparent";
import { Exchange } from "@/public/svg/Exchange";
import { HiddenCost } from "@/public/svg/HiddenCost";

const CompetitiveRates = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-2 overflow-y-auto items-center">
        <div>
          <h1 className="text-4xl text-amber-500 text-center" color="warning">
            Competitive Rates
          </h1>
          <p className="text-center py-5">
            When it comes to transferring money, getting the best value for your
            hard-earned currency is a top priority. At flipprr, we understand
            the importance of competitive rates, and we're committed to ensuring
            that you get the most out of every transfer.
          </p>
        </div>

        <Lottie animationData={animationData} loop autoPlay />
      </div>
      <div className="flex xl:flex-nowrap flex-wrap gap-10 my-12 justify-center">
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <div className="svgContainer">
              <Transparent />
            </div>
            <div className="flex flex-col">
              <p className="text-md">Transparent Pricing</p>
              <p className="text-default-900">See what you're paying for</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>
              We believe in transparency. Our rates are straightforward and
              devoid of hidden fees or surprises. What you see is what you get.
              When you transfer money with us, you'll know exactly how much will
              be sent and received.
            </p>
          </CardBody>
        </Card>
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <div className="svgContainer">
              <Exchange />
            </div>
            <div className="flex flex-col">
              <p className="text-md">Competitive Exchange Rates</p>
              <p className="text-default-900">The best rates, guaranteed</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>
              Exchange rates play a pivotal role in determining the value of
              your money when sending it internationally. We offer competitive
              exchange rates that are often better than those you'll find at
              traditional banks or other money transfer services. This means
              that you'll get more of the destination currency for your
              hard-earned money.
            </p>
          </CardBody>
        </Card>
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <div className="svgContainer">
              <HiddenCost />
            </div>
            <div className="flex flex-col">
              <p className="text-md">No Hidden Costs</p>
              <p className="text-default-900">
                Your satisfaction is our guarantee
              </p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>
              With flipprr, you won't encounter hidden costs that eat into your
              transferred amount. We believe in transparency and integrity in
              all our transactions.
            </p>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default CompetitiveRates;
