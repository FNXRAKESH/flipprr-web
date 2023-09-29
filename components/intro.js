import Lottie from "lottie-react";
import animationData from "@/public/json/animation_lmotyht1.json";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Chip
} from "@nextui-org/react";
import { PlayStore } from "@/public/svg/PlayStore";
import { AppStore } from "@/public/svg/AppStore";
import { Card, Skeleton } from "@nextui-org/react";
import React from "react";

export default function Intro() {
  const [loading, setLoading] = React.useState(true);
  return (
    <div className="py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:justify-between items-center sm:justify-center mt-12">
        <div className="lg:text-left text-center">
          <Chip className="p-8 md:text-xl text-sm">
            Seamless Payments, Anytime, Anywhere
          </Chip>
          <h1 className="tracking-tight font-semibold text-[2.5rem] lg:text-6xl mt-10 text-balance">
            Your Fast and Secure
            <br className="xl:block hidden" /> Money Transfer App
          </h1>
          <h1 className="py-10 md:text-xl text-sm">
            Welcome to flipprr, the ultimate solution for hassle-free money
            transfers. Whether you're sending money to family, friends, or
            conducting business transactions, flipprr is your trusted partner
            for seamless financial transfers.
          </h1>
          <Button variant="bordered" color="primary" endContent={<PlayStore />}>
            Available in Play Store
          </Button>
          <Button
            className="md:ms-5 mt-5"
            variant="solid"
            color="primary"
            endContent={<AppStore />}
          >
            Available in App Store
          </Button>
          {/* <Dropdown
            showArrow
            radius="sm"
            classNames={{
              base: "p-0 border-small border-divider",
              arrow: "bg-default-200"
            }}
          >
            <DropdownTrigger>
              <Button variant="bordered">Download Now</Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem
                key="google"
                className="text-primary"
                color="primary"
              >
                <h1 className="text-xl text-center">Play Store</h1>
              </DropdownItem>
              <DropdownItem key="apple" className="text-danger" color="danger">
                <h1 className="text-xl text-center">App Store</h1>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown> */}
        </div>
        {loading ? (
          <Card className="w-full space-y-5 p-4 h-full" radius="2xl">
            <Skeleton height="100%" width="100%" />
          </Card>
        ) : null}
        <Lottie
          onDOMLoaded={() => {
            setLoading(false);
          }}
          animationData={animationData}
          loop={true} // Set to true if you want the animation to loop
          autoplay={true} // Set to true if you want the animation to play automatically
        />
      </div>
    </div>
  );
}
