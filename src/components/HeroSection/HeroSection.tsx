import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import slider1 from "../../assets/for-slider/slide1-cricket-bat-removebg-preview.png";
import slider2 from "../../assets/for-slider/slide2-cricket-bat-removebg-preview.png";
import slider3 from "../../assets/for-slider/slide3-volleyball-removebg-preview.png";
import slider4 from "../../assets/for-slider/slide4-batminton-removebg-preview.png";
export function HeroSection() {
  const sliderData = [
    {
      id: 1,
      image: slider1,
      headingInfo: "Cricket Bat -X ",
      discount: "25%",
    },
    {
      id: 2,
      image: slider2,
      headingInfo: "Cricket Bat -X2 ",
      discount: "8%",
    },
    {
      id: 3,
      image: slider3,
      headingInfo: "Volleyball Premium ",
      discount: "35%",
    },
    {
      id: 4,
      image: slider4,
      headingInfo: "Batminton Bat",
      discount: "15%",
    },
  ];

  return (
    <div className="relative w-full h-[500px] mt-6 my-8">
      <Carousel
        className=" overflow-hidden rounded-lg shadow-lg"
        style={{
          backgroundImage:
            "linear-gradient(to right top, #d6c8d1, #d9c5c6, #d5c3bc, #ccc3b5, #bfc4b4)",
        }}
        plugins={[
          Autoplay({
            delay: 6000,
          }),
        ]}
      >
        <CarouselContent className="flex">
          {sliderData.map((slider) => (
            <CarouselItem key={slider.id} className="min-w-full">
              <Card className="bg-transparent">
                <CardContent className="md:flex sm:flex-row sm:items-center sm:justify-center gap-12 h-[500px] p-0">
                  <div className="py-4 flex flex-col gap-4 text-center">
                    <p className="text-3xl md:text-7xl text-white font-extrabold md:font-semibold">
                      {slider.headingInfo}
                    </p>
                    <p className="font-bold text-5xl text-gray-600">
                      {slider.discount} Discount
                    </p>
                  </div>
                  <img
                    src={slider?.image}
                    className="w-[350px] object-cover transition-transform duration-500 hover:scale-105"
                    alt=""
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
          &#9664;
        </CarouselPrevious>
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
          &#9654;
        </CarouselNext>
      </Carousel>
    </div>
  );
}
