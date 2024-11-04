import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import DiscountWheel from "./discount-wheel";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Layout141Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout141 = (props: Layout141Props) => {
  const { tagline, heading, description, buttons, image } = {
    ...Layout141Defaults,
    ...props,
  } as Props;
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                {heading}
              </h2>
              <p className="md:text-md">{description}</p>
            </div>
          </div>
          <div>
            <DiscountWheel/>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout141Defaults: Layout141Props = {
  tagline: "",
  heading: "Try our solution, without any commitment",
  description:
    "After selecting the number of stars, the best ratings will be redirected to your Google Reviews page. Lower ratings will be redirected to Cassiova's application.",
  buttons: [
    { title: "Button", variant: "secondary" },
    {
      title: "Button",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  ],
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    alt: "Relume placeholder image",
  },
};
