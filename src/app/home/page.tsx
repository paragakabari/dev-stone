"use client";

import { useRouter } from "next/navigation";
import HomeBanner from "./homeBanner/homeBanner";
import WhatLookingFor from "./whatLookingFor/whatLookingFor";
import MakeAsBetter from "./makeAsBetter";
import InvestingDetails from "./investingDetails/investingDetails";
import FeaturedPEFirms from "./featuredPEFirms/featuredPEFirms";
import HowItWork from "./howItWork/howItWork";
import RecentNews from "./recentNews/recentNews";
import EasyUsing from "./easyUsing/easyUsing";
import Testimonials from "./testimonials/testimonials";
import HomeFooter from "@/component/home-footer/HomeFooter";

export default function HomePage() {
  const router = useRouter();
  return <>
    <div>
      <HomeBanner />
      <WhatLookingFor />
      <MakeAsBetter />
      <InvestingDetails />
      <FeaturedPEFirms />
      <HowItWork />
      <RecentNews />
      <EasyUsing />
      <Testimonials />
      <HomeFooter />
    </div>
  </>;
}
