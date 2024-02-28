import React from 'react';
import Container from "@/components/Container";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {GitHubLogoIcon} from "@radix-ui/react-icons";

const MyProjects = () => {
  // @ts-ignore
  return (
      <div>
        <div
            className="p-5 border-t bg-background sm:p-10 w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]">
          <Container>
            <div className="">
              <div className="flex flex-col gap-3">
                <div className="font-semibold sm:text-3xl text-2xl">
                  My Skills
                </div>
                <div className="text-lg">
                  Some things I&apos;ve built so far.
                </div>
                <div className="">
                  <Carousel className="">
                    <CarouselContent className="-ml-1">
                      {Array.from({length: 5}).map((_, index) => (
                          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/4">
                            <div className="p-1">
                              <Card className=" ">
                                <CardContent className="p-3 pb-0">
                                  <div className="w-auto bg-muted rounded-sm h-40 ">
                                  </div>
                                </CardContent>
                                <CardHeader className="p-3">
                                  <CardTitle>Project Title</CardTitle>
                                  <CardDescription>Description about your work</CardDescription>
                                </CardHeader>
                                <CardFooter className="p-3">
                                  <Button className="w-full gap-2 "><GitHubLogoIcon/> Source code</Button>
                                </CardFooter>
                              </Card>
                            </div>
                          </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="hidden sm:block">
                      <CarouselPrevious/>
                      <CarouselNext/>
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
  );
};

export default MyProjects;
