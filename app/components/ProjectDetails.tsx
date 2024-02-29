'use client';
import * as React from "react"
import {CardContent} from "@/components/ui/card"
import {Carousel, type CarouselApi, CarouselContent, CarouselItem,} from "@/components/ui/carousel"
import Image from "next/image";
import {Badge} from "@/components/ui/badge";


const ProjectDetails = ({project}: { project: Project }) => {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

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
                  <CardContent className=" p-0 flex w-full aspect-video sm:max-h-[75vh] justify-center ">
                    <Image
                        src={pic}
                        alt="Project"
                        className="rounded-sm w-auto h-auto object-cover"
                        width={1024}
                        height={1024}
                    />
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
