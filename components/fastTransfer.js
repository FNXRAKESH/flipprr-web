import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
   
} from "@nextui-org/react";
import Image from "next/image";
import Lottie from "lottie-react";
 
import transfer from "@/public/money.png";
import animationData2 from "@/public/json/animation_lmt4mp31.json";
 
import { HandShake } from "@/public/svg/HandShake";
import { Clock } from "@/public/svg/clock";
import { MoneyTransferSVG } from "@/public/svg/MoneyTransfer";
 
const FastTransfer = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-2 overflow-y-auto items-center">
        <div>
          <h1 className="text-4xl text-amber-500 text-center" color="warning">
            Lightning-Fast Transfers
          </h1>
          <p className="text-center py-5">
            Say goodbye to long waiting times. flipprr ensures your money
            reaches its destination quickly, so you can take care of what
            matters most.
          </p>
        </div>

        <Lottie animationData={animationData2} loop autoPlay />
      </div>
      <div className="flex lg:flex-nowrap flex-wrap gap-10 my-12 justify-center">
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <div className="svgContainer">
              <Clock />
            </div>
            <div className="flex flex-col">
              <p className="text-md ">Tired of Waiting?</p>
              <p className="text-default-900">flipprr is the Solution:</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="">
              Are you tired of the frustratingly long waiting times associated
              with financial transactions? With flipprr, those days are over. We
              understand that time is precious, and we've designed our service
              with your convenience in mind.
            </p>
          </CardBody>
        </Card>
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <div className="svgContainer">
              <MoneyTransferSVG />
            </div>
            <div className="flex flex-col">
              <p className="text-md ">Money Transfers</p>
              <p className="text-default-900">Fast and secure</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="">
              Our commitment to efficiency means that flipprr excels in ensuring
              your money reaches its intended destination with remarkable speed.
              Whether you're sending money to a loved one, paying bills, or
              conducting business transactions, flipprr is your go-to solution
              for swift, reliable, and hassle-free money transfers.
            </p>
          </CardBody>
        </Card>
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <div className="svgContainer">
              <HandShake />
            </div>
            <div className="flex flex-col">
              <p className="text-md ">The Promise of Reliability</p>
              <p className="text-default-900">Always there for you</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="">
              We don't just promise quick transfers; we guarantee them. flipprr
              has built a reputation for reliability, backed by cutting-edge
              technology and a network of trusted partners. When you choose
              flipprr, you can rest assured that your funds will be where they
              need to be when they need to be there.
            </p>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default FastTransfer;
