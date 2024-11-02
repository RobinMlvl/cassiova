import {
    Button,
    Accordion,
    AccordionTrigger,
    AccordionContent,
    AccordionItem,
  } from "@relume_io/relume-ui";
  
  import type { ButtonProps } from "@relume_io/relume-ui";
import React from "react";
  import { RxPlus } from "react-icons/rx";
  
  type QuestionsProps = {
    title: string;
    answer: string;
  };
  
  type Props = {
    heading: string;
    description: string;
    footerHeading: string;
    footerDescription: string;
    button: ButtonProps;
    questions: QuestionsProps[];
  };
  
  export type Faq4Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
  
  export const Faq4 = (props: Faq4Props) => {
    const { heading, description, questions, footerHeading, footerDescription, button } = {
      ...Faq4Defaults,
      ...props,
    } as Props;
    return (
      <section className="px-[5%] py-16 md:py-24 lg:py-28" id="faq">
        <div className="container mx-auto max-w-lg">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
            <p className="md:text-md">{description}</p>
          </div>
          <Accordion type="multiple" className="grid items-start justify-stretch gap-4">
            {questions.map((question, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border-primary px-5 md:px-6"
              >
                <AccordionTrigger
                  icon={
                    <RxPlus className="size-7 shrink-0 p-1 text-text-primary transition-transform duration-300 md:size-8" />
                  }
                  className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
                >
                  {question.title}
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">{question.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
            <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
              {footerHeading}
            </h4>
            <p className="md:text-md">{footerDescription}</p>
            <div className="mt-6 md:mt-8">
              <Button {...button}>{button.title}</Button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export const Faq4Defaults: Faq4Props = {
    heading: "FAQs",
    description:
      "Find answers to commonly asked questions about our platform and services.",
    questions: [
      {
        title: "How do I get started?",
        answer:
          "Simply subscribe through our website by entering the requested information. If you have questions about our product, you can watch our video that explains how it works and the steps for implementation in your business environment.",
      },
      {
        title: "How can I encourage my customers to give feedback using your solution?",
        answer:
          "We have several ways to collect feedback. The simplest method is to use your QR code and place it in a strategic location where your customers can easily access it. You can customize it to make it appealing to your clients, for example, by including a persuasive message. It is also possible to integrate our review system directly into your email campaigns or website. Additionally, we offer tools to encourage your customers to leave feedback. In the near future, you will be able to opt for the premium package to access our rewards system or prize draw system.",
      },
      {
        title: "Is it user-friendly?",
        answer:
          "Yes, we've put a lot of effort into improving the customer experience and making the platform as intuitive as possible. Our platform has been developed in such a way that our tools require as few clicks as possible to perform actions.",
      },
      {
        title: "How can I test the product?",
        answer:
          "We offer a video demonstration of the platform. In addition, an explanatory article, including screenshots, is available to guide users step by step. On request, a limited-time free trial can be included. The aim of the trial is to gather your feedback and check whether the quality of the platform meets your expectations. The trial allows you to try out the platform for a limited amount of time, so you can decide if you want to do business with us.",
      },
      {
        title: "Do I need a credit card to subscribe?",
        answer:
          "Yes, a credit card is required to subscribe. You will need to enter this information when choosing your subscription plan.",
      },
      {
        title: "What are the expected results?",
        answer:
          "When you have a good rating on Google, it will always place you higher in search results, making you much more visible. Naturally, more people will choose your business because they will feel more confident in it. More customers mean more revenue! Studies show that positive reviews can increase sales by 31%. In a world where consumers increasingly base their decisions on online ratings to build trust, it is crucial to manage them effectively. This is precisely the goal of our tool, which highlights positive reviews online while allowing you to quickly address less favorable ones before they appear online.",
      },
      {
        title: "What can AI do for me?",
        answer:
          "We are in an era where artificial intelligence is becoming increasingly advanced and serves as a great aid for businesses to improve their daily operations. We have integrated the best AI tools on the market to analyze less favorable customer feedback and provide recommendations with concrete actions. Our intelligent tool detects recurring issues and identifies trends in all the comments collected from your customers. This constantly generates feedback for decision-making. By following these recommendations and implementing the necessary corrections, you will naturally attract many more positive reviews over time.",
      },
    ],
    footerHeading: "Still have questions?",
    footerDescription: "Have more questions? Get in touch with us today.",
    button: {
      title: "Contact",
      variant: "secondary",
    },
  };
  
  Faq4.displayName = "Faq4";
  