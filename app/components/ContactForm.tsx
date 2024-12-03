'use client';

import React, {useState} from 'react';
import Container from "@/components/Container";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {PaperPlaneIcon, ReloadIcon} from "@radix-ui/react-icons";
import {toast} from "sonner";
import {useRouter} from "next/navigation";
import me from "../../change_data/hero_section.json";
import {Label} from "@/components/ui/label";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [interested, setInterested] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const router = useRouter();
  // @ts-ignore
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSubmitted(true);
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, email, message, interested}),
      });

      router.refresh()
      if (response.ok) {
        toast.success(`Mr/Mis ${name.charAt(0).toUpperCase() + name.slice(1)}, We will inform ASAP :)`)
        setName('');
        setEmail('');
        setMessage('');
        setInterested('');
        setSubmitted(false);
      } else {
        toast.error('Unable to submit your message :(');
        setSubmitted(false);

      }
    } catch (error) {
      toast.error("Oops! Something went wrong.");
      setSubmitted(false);
    }
  };

  return (
      <div className="">
        <div
            className="p-5 border-t bg-muted sm:p-10 w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
              <div className="grid grid-rows-2 animate-fade-left">
                <p className="tracking-tight font-bold sm:text-3xl text-2xl sm:w-96 mr-5">
                  Let&apos;s discuss on something
                  <span className="text-primary"> cool </span>
                  together
                </p>
                <div className="flex flex-col justify-end gap-5">
                  <div>I&apos;m interested in ...</div>
                  <RadioGroup defaultValue={interested} className="flex flex-wrap ">
                    {me.i_will_do.map(item => (
                        <div key={item}>
                          <RadioGroupItem
                              value={item}
                              id={item}
                              className="peer sr-only"
                              onClick={(e) => {
                                // @ts-ignore
                                setInterested(e.target.value);
                              }}
                          />
                          <Label
                              htmlFor={item}
                              className={`flex flex-col items-center capitalize justify-between rounded-md border 
                              border-primary transition-all duration-300 bg-popover shadow-lg hover:shadow-primary p-2 hover:bg-accent hover:text-accent-foreground 
                              ${interested === item ? 'peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-background [&:has([data-state=checked])]:bg-primary' : ''}`}
                          >
                            {item}
                          </Label>
                        </div>
                    ))}
                  </RadioGroup>

                </div>
              </div>
              <div className=" text-lg sm:leading-8 animate-fade-right">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-3 sm:gap-5">
                    <Input className="bg-background capitalize" placeholder="Your name" type="text" value={name}
                           onChange={(e) => setName(e.target.value)} required/>
                    <Input className="bg-background" placeholder="Your email" type="email" value={email}
                           onChange={(e) => setEmail(e.target.value)} required/>
                    <Textarea className="bg-background h-40" placeholder="Write your message" value={message}
                              onChange={(e) => setMessage(e.target.value)} required/>
                    <Button className="w-full flex gap-2" type="submit"
                            disabled={submitted}><PaperPlaneIcon/>Submit {submitted &&
                        <ReloadIcon className="animate-spin"/>}</Button>
                  </div>
                </form>
              </div>
            </div>
          </Container>
        </div>
      </div>
  );
};

export default ContactForm;
