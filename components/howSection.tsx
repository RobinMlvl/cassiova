"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import Image from 'next/image'
import one from "../app/assets/one.png";
import two from "../app/assets/two.png";
import three from "../app/assets/three.png";
import four from "../app/assets/4.png";


type FeaturesProps = {
  icon: {
    src: string;
    alt: string;
  };
  heading: string;
  description: string;
};

type Props = {
  tagline: string;
  heading: string;
  buttons: ButtonProps[];
  features: FeaturesProps[];
  setIsOpen: (isOpen: boolean) => void;
};

export type Layout121Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout121 = (props: Layout121Props) => {

  let setIsOpen = props.setIsOpen;

  const { tagline, heading, buttons, features } = {
    ...props,
    ...Layout121Defaults,
  } as Props;

  const scrollSection = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollSection,
    offset: ["start 55%", "start start"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 items-start gap-y-8 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
        <div>
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <div className="mt-6 flex items-center gap-4 md:mt-8">
            {buttons.map((button, index) => (

              <Button key={index} {...button} className="text-black bg-yellow-300 border-black w-3/4" onClick={() => setIsOpen(true)}>
                {button.title}
              </Button>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-8 right-auto top-[10%] h-3/4 w-0.5 bg-black/15 md:left-[2.4375rem]">
            <motion.div ref={scrollSection} className="bg-black" style={{ height }} />
          </div>
          {features.map((feature, index) => (
            <div key={index} className="grid grid-cols-[max-content_1fr] gap-x-6 lg:gap-x-10">
              <div className="relative flex flex-col items-center justify-start py-10">
                <div className="relative z-0 -mt-4 bg-white px-2 py-4 md:px-4 rounded-full border-2 border-black ml-2">
                  <Image
                    src={feature.icon.src}
                    width={30}
                    height={30}
                    alt={feature.icon.alt}
                  />

                </div>
              </div>
              <div className="py-10">
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  {feature.heading}
                </h6>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Layout121Defaults: Layout121Props = {
  tagline: "How It Works",
  heading: "Boost Your Restaurant's Reviews in 4 Simple Steps",
  buttons: [{ title: "Try for free" }],
  features: [
    {
      icon: {
        src: one,
        alt: "Relume icon 1",
      },
      heading: "Collect Reviews",
      description:
        "Use the power of our intuitive review system to gather feedback from your customers. Whether through a QR code or an email, leaving a review is just a tap away.",
    },
    {
      icon: {
        src: two,
        alt: "Relume icon 2",
      },
      heading: "Smart Filtering",
      description:
        "Redirect automatically only your top reviews to Google, improving your ranking and attracting more potential customers. Lower ratings are kept on your Cassiova dashboard, allowing you to address concerns privately and improve your service.",
    },
    {
      icon: {
        src: three,
        alt: "Relume icon 3",
      },
      heading: "Reward Engagement",
      description:
        "Incentivize customers to leave reviews with our flexible reward system. Chose do offer discounts, free items or implement our exciting roulette feature. After leaving a review, customers can spin the wheel for a chance to win prizes you’ve selected.",
    },
    {
      icon: {
        src: four,
        alt: "Relume icon 4",
      },
      heading: "Analyze and Improve",
      description:
        "Centralize all your ratings, both from the web and those you collect, in one easy-to-use smart dashboard to gain deep insights into your restaurant’s performance. Monitor review trends, identify areas for improvement and track your online reputation growth.",
    },
  ],
};
