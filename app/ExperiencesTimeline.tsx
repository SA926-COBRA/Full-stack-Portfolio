import React from 'react';
import experience from "../change_data/experience.json"
import {Badge} from "@/components/ui/badge";

const ExperiencesTimeline = () => {
    return (
        <div className="sm:py-10 py-5 px-3 flex flex-col">
            <h1 className="font-semibold sm:text-3xl flex sm:mb-10 mb-5 justify-center text-2xl">
                My Experience
            </h1>
            {experience.map(item => (
                <div key={item.title} className="relative flex sm:grid grid-cols-3">
                    <div className="grid justify-end absolute sm:relative bottom-2 right-0 sm:mr-6 font-semibold mt-1 ">
                        {item.from} - {item.to}
                    </div>
                    <ol className="relative border-s-2 col-span-2 border-primary dark:border-primary">
                        <li className="mb-10 ms-6">
                    <span
                        className="absolute border-primary border-2 flex items-center
                        shadow-xl shadow-primary transition-all
                        justify-center w-7 h-7 bg-primary-foreground rounded-full -start-[15px]
                         dark:bg-background">
                    <svg className="w-2.5 h-2.5 text-primary  dark:text-primary" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                    </span>
                        <h3 className="flex items-center capitalize mb-1 text-sm sm:text-lg font-semibold text-gray-900 dark:text-white">
                            {item.title}
                            <Badge
                                className="ms-3 uppercase">

                                {item.company}
                            </Badge>
                        </h3>
                        <p className="text-sm sm:text-base font-normal text-muted-foreground  ">
                            {item.description}
                        </p>
                        </li>
                    </ol>
                </div>
            ))}


        </div>
    );
};

export default ExperiencesTimeline;