import React from 'react';
import Container from "@/components/Container";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {ExternalLinkIcon, GitHubLogoIcon} from "@radix-ui/react-icons";

import projectsData from '../change_data/projects.json';
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import ProjectDetails from "@/app/components/ProjectDetails";
import {Badge} from "@/components/ui/badge";

const MyProjects = () => {
  return (
      <div id="projects">
        <div
            className="p-5 border-t bg-background sm:p-10 w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]">
          <Container>
            <div className="">
              <div className="flex flex-col gap-3">
                <div className="font-semibold sm:text-3xl text-2xl">
                  My Projects
                </div>
                <div className="text-muted-foreground">
                  Some things I&apos;ve built so far.
                </div>
                <div className="">
                  <Carousel className="">
                    <CarouselContent className="-ml-1">
                      {Object.values(projectsData).map((project: Project, index) => (
                          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                              <Card className="">
                                <CardContent className="p-3 pb-0 ">
                                  <Dialog>
                                    <DialogTrigger className="w-full">
                                      <div className="border overflow-hidden rounded-sm">
                                        <Image
                                            src={project.pictures![0]}
                                            alt="Project"
                                            className="bg-muted rounded-sm h-48 w-full object-cover"
                                            width={800}
                                            height={450}
                                        />
                                      </div>
                                    </DialogTrigger>
                                    <DialogContent>
                                      <DialogHeader>
                                        <DialogTitle>{project.title}</DialogTitle>
                                        <DialogDescription>{project.description}</DialogDescription>
                                      </DialogHeader>
                                      <div className="">
                                        <div className="overflow-hidden rounded-sm ">
                                          <div className=" flex flex-wrap gap-1 pb-3 float-right">
                                            {project.tags?.map((tag, index) => (
                                                <Badge className="text-[10px] p-0 px-1 " key={index}>
                                                  {tag.toLowerCase()}
                                                </Badge>
                                            ))}
                                          </div>
                                        </div>
                                        <ProjectDetails project={project}/>
                                      </div>
                                    </DialogContent>
                                  </Dialog>
                                </CardContent>
                                <CardHeader className="p-3">
                                  <CardTitle>{project.title}</CardTitle>
                                  <CardDescription
                                      className="truncate">{project.description}</CardDescription>
                                </CardHeader>
                                <CardFooter className="p-3 gap-3">
                                  {project.github_repo && (
                                      <Link className="w-full" href={project.github_repo} target="_blank"
                                            rel="noopener noreferrer">
                                        <Button className="w-full gap-2">
                                          <GitHubLogoIcon/> Source code
                                        </Button>
                                      </Link>
                                  )}
                                  {project.project_url && (
                                      <Link className="w-full" href={project.project_url} target="_blank"
                                            rel="noopener noreferrer">
                                        <Button className="w-full gap-2">
                                          <ExternalLinkIcon/> Visit
                                        </Button>
                                      </Link>
                                  )}
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
