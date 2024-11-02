  type ImageProps = {
    src: string;
    alt?: string;
  };
  
  type Props = {
    heading: string;
    description: string;
    description2: string;
    description3: string;
    image: ImageProps;
  };
  
  export type Layout38Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
  
  export const Layout38 = (props: Layout38Props) => {
    const { heading, description, description2, description3, image } = {
      ...Layout38Defaults,
      ...props,
    } as Props;
    return (
      <section id="relume" className="relative px-[5%]">
        <div className="container">
          <div className="flex items-center py-16 md:py-24 lg:py-28">
            <div className="max-w-md">
              <h3 className="mb-5 text-4xl font-bold leading-[1.2] text-text-alternative md:mb-6 md:text-5xl lg:text-6xl">
                {heading}
              </h3>
              <br/>
              <p className="text-base text-text-alternative md:text-md">{description}</p>
              <br/>
              <p className="text-base text-text-alternative md:text-md">{description2}</p>
              <br/>
              <p className="text-base text-text-alternative md:text-md">{description3}</p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10">
          <img src={image.src} className="size-full object-cover" alt={image.alt} />
          <div className="absolute inset-0 bg-black/80" />
        </div>
      </section>
    );
  };
  
  export const Layout38Defaults: Layout38Props = {
    heading: "Increase your customer feedback with our Personalized Review Page feature",
    description:
      "Easily collect customer feedback with our Customized Review Page feature, using a QR code or an integrated widget. Our powerful tool not only helps you gather valuable feedback, but also boosts your online reputation by showcasing the best reviews, driving greater trust and engagement with your brand.",
       description2:"",
       description3:"",

    image: {
      src: "https://cdn.sortiraparis.com/images/80/100789/834071-too-restaurant-too-hotel-paris-photos-menu-entrees.jpg",
      alt: "Relume placeholder image",
    },
  };
  