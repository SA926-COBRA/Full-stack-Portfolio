'use client';

import React, {useState} from 'react';
import Container from "@/components/Container";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {Label} from "@/components/ui/label";
import {PaperPlaneIcon, ReloadIcon} from "@radix-ui/react-icons";
import {toast} from "sonner";
import {useRouter} from "next/navigation";

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
        toast.success("Thanks for submitting your message.")
        setName('');
        setEmail('');
        setMessage('');
        setInterested('');
        setSubmitted(false);
        setSubmitted(false);
      } else {
        toast.error('Unable to submit the your message.');
        setSubmitted(false);

      }
    } catch (error) {
      toast.error("Something went wrong.");
      setSubmitted(false);
    }
  };

  return (
      <div className="">
        <div
            className="p-5 border-t bg-muted sm:p-10 w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]">
          <Container>
            <div className="flex md:flex-row flex-col gap-3 sm:gap-4">
              <div className="grid grid-rows-2">
                <div className="font-bold sm:text-3xl text-2xl sm:w-96 mr-5">
                  Let&apos;s discuss on something
                  <span className="text-primary"> cool </span>
                  together
                </div>
                <div className="flex flex-col justify-end gap-5">
                  <div>I&apos;m interested in ...</div>
                  <RadioGroup defaultValue="Ecommerce Website" className="flex flex-wrap">
                    <div>
                      <RadioGroupItem
                          value="Ecommerce Website"
                          id="ecommerce_website"
                          className="peer sr-only"
                          onClick={() => setInterested("Ecommerce Website")}

                      />
                      <Label
                          htmlFor="ecommerce_website"
                          className="flex flex-col items-center justify-between rounded-md border border-primary bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-background [&:has([data-state=checked])]:bg-primary"
                      >
                        Ecommerce Website
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem
                          value="Saas Website"
                          id="saas_website"
                          className="peer sr-only"
                          onClick={() => setInterested("Saas Website")}

                      />
                      <Label
                          htmlFor="saas_website"
                          className="peer-data-[state=checked]:text-background flex flex-col items-center justify-between rounded-md border border-primary bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:bg-primary [&:has([data-state=checked])]:bg-primary"
                      >
                        Saas Website
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem
                          value="Landing Page"
                          id="landing_page"
                          className="peer sr-only"
                          onClick={() => setInterested("Landing Page")}

                      />
                      <Label
                          htmlFor="landing_page"
                          className=" peer-data-[state=checked]:text-background flex flex-col items-center justify-between rounded-md border border-primary bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:bg-primary [&:has([data-state=checked])]:bg-primary"
                      >
                        Landing Page
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem
                          value="Portfolio"
                          id="portfolio"
                          className="peer sr-only"
                          onClick={() => setInterested("Portfolio")}
                      />

                      <Label
                          htmlFor="portfolio"
                          className="peer-data-[state=checked]:text-background flex flex-col items-center justify-between rounded-md border border-primary bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:bg-primary [&:has([data-state=checked])]:bg-primary"
                      >
                        Portfolio
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem
                          value="Blog Website"
                          id="blog_website"
                          className="peer sr-only"
                          onClick={() => setInterested("Blog Website")}/>
                      <Label
                          htmlFor="blog_website"
                          className="peer-data-[state=checked]:text-background flex flex-col items-center justify-between rounded-md border border-primary bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:bg-primary [&:has([data-state=checked])]:bg-primary"
                      >
                        Blog Website
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              <div className="md:w-[50%] text-lg sm:leading-8">
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

  )
      ;
};

export default ContactForm;
