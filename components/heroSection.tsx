import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  images: ImageProps[];
  images2: ImageProps[];
  setIsOpen: (isOpen: boolean) => void;
};

export type Header76Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header76 = (props: Header76Props) => {
  let setIsOpen = props.setIsOpen;

  const { heading, description, buttons, images, images2 } = {
    ...Header76Defaults,
    ...props,
  } as Props;
  return (
    <section
      id="relume"
      className="grid grid-cols-1 gap-y-16 pt-16 md:grid-flow-row md:pt-24 lg:grid-flow-col lg:grid-cols-2 lg:items-center lg:pt-0"
    >
      <div className="mx-[5%] max-w-[40rem] justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end">
        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">{heading}</h1>
        <p className="md:text-md">{description}</p>
        <div className="mt-10 flex justify-center gap-x-4 md:mt-8">
          {buttons.map((button, index) => (
            <Button key={index} {...button} className="text-black bg-yellow-300 border-black w-3/4" onClick={() => setIsOpen(true)}>
              {button.title}
            </Button>
          ))}
        </div>
      </div>
      <div className="h-[30rem] overflow-hidden pl-[5vw] pr-[5vw] md:h-[40rem] lg:h-screen lg:pl-0">
        <div className="grid w-full grid-cols-2 gap-x-4">
          <div className="-mt-[120%] grid size-full animate-loop-vertically columns-2 grid-cols-1 gap-4 self-center">
            {images.map((image, index) => (
              <div key={index} className="grid size-full grid-cols-1 gap-4">
                <div className="relative w-full pt-[120%]">
                  <img
                    className="absolute inset-0 size-full object-cover"
                    src={image.src}
                    alt={image.alt}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="grid size-full animate-loop-vertically grid-cols-1 gap-4">
            {images2.map((image, index) => (
              <div key={index} className="grid size-full grid-cols-1 col-span-1 gap-4">
                <div className="relative w-full pt-[120%]">
                  <img
                    className="absolute inset-0 size-full object-cover"
                    src={image.src}
                    alt={image.alt}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Header76Defaults: Header76Props = {
  heading: "More Reviews, Higher Ratings, Fuller Tables",
  description:
    "Transform happy diners into powerful advocates for your restaurant.",
  buttons: [{ title: "Try for free" }],
  images: [
    {
      src: "https://toohotel.com/wp-content/uploads/2022/09/TOO_restaurant_Panoramique_vue_Paris_nuit_v2-scaled.jpg",
      alt: "Relume placeholder image 1",
    },
    {
      src: "https://www.valdoise-tourisme.com/wp-content/uploads/2023/04/cambrousse-restaurant-8-e1681483983431-1600x900.jpg",
      alt: "Relume placeholder image 2",
    },
    {
      src: "https://42info.fr/wp-content/uploads/2023/11/Restaurant-Saint-Etienne-42info.jpeg",
      alt: "Relume placeholder image 3",
    },
    {
      src: "https://media.admagazine.fr/photos/6350150bfd9c4fcf5651b0c3/16:9/w_2560%2Cc_limit/TOO%2520Restaurant%25203.jpg",
      alt: "Relume placeholder image 4",
    },
    {
      src: "https://img3.parisbouge.com/Lb4_lhkqmsmeqAmrAUsWB5mA5_MW5h9QD-hPKJhBiD0/rs:fill:1200:800:1/g:ce/wm:1:soea:12:12:0.12/MDM5ZjAzN2EtNzk4Ni00YWY0LTg2ZjQtMTZmMzQ3NDE4MmY4LmpwZw.jpg",
      alt: "Relume placeholder image 5",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Restaurant_N%C3%A4sinneula.jpg/800px-Restaurant_N%C3%A4sinneula.jpg",
      alt: "Relume placeholder image 6",
    },
  ],
  images2: [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Restaurant_N%C3%A4sinneula.jpg/800px-Restaurant_N%C3%A4sinneula.jpg",
      alt: "Relume placeholder image 1",
    },
    {
      src: "https://img3.parisbouge.com/Lb4_lhkqmsmeqAmrAUsWB5mA5_MW5h9QD-hPKJhBiD0/rs:fill:1200:800:1/g:ce/wm:1:soea:12:12:0.12/MDM5ZjAzN2EtNzk4Ni00YWY0LTg2ZjQtMTZmMzQ3NDE4MmY4LmpwZw.jpg",
      alt: "Relume placeholder image 2",
    },
    {
      src: "https://media.admagazine.fr/photos/6350150bfd9c4fcf5651b0c3/16:9/w_2560%2Cc_limit/TOO%2520Restaurant%25203.jpg",
      alt: "Relume placeholder image 3",
    },
    {
      src: "https://42info.fr/wp-content/uploads/2023/11/Restaurant-Saint-Etienne-42info.jpeg",
      alt: "Relume placeholder image 4",
    },
    {
      src: "https://www.valdoise-tourisme.com/wp-content/uploads/2023/04/cambrousse-restaurant-8-e1681483983431-1600x900.jpg",
      alt: "Relume placeholder image 5",
    },
    {
      src: "https://toohotel.com/wp-content/uploads/2022/09/TOO_restaurant_Panoramique_vue_Paris_nuit_v2-scaled.jpg",
      alt: "Relume placeholder image 6",
    },
  ],
};

