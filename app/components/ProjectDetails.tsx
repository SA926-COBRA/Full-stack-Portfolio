'use client';
import * as React from "react"
import {CardContent} from "@/components/ui/card"
import {Carousel, type CarouselApi, CarouselContent, CarouselItem,} from "@/components/ui/carousel"
import Image from "next/image";


const ProjectDetails = ({project}: { project: Project }) => {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
  const [loading, setLoading] = React.useState(true);


  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])


  return (
      <div>
        <Carousel setApi={setApi} className=" ">
          <CarouselContent className="flex">
            {project.pictures!.map((pic, index) => (
                <CarouselItem key={index}>
                  <CardContent className="p-0">
                    <div className="relative flex w-full aspect-video sm:max-h-[75vh] justify-center ">
                      {loading && <div
                          className="absolute top-0 left-0 w-full h-full flex items-center justify-center ">
                        <svg className="animate-spin h-20 w-20 text-foreground" xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                  stroke-width="4"></circle>
                          <path className="opacity-75" fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      </div>}
                      <Image
                          src={pic}
                          alt="Project"
                          className="rounded-sm w-auto h-auto object-cover"
                          width={1024}
                          height={1024}
                          onLoadingComplete={() => setLoading(false)}
                      />
                    </div>
                  </CardContent>
                </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="py-2 text-center text-sm font-bold text-muted-foreground">

          Slide {current} of {count}
        </div>
      </div>
  );
};

export default ProjectDetails;
