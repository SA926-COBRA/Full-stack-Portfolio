'use client';

import React, {useState} from 'react';
import Container from "@/components/Container";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {Label} from "@/components/ui/label";
import {PaperPlaneIcon} from "@radix-ui/react-icons";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // @ts-ignore
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, message}),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error('Error submitting form:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  if (submitted) {
    return <div>Thank you for your message!</div>;
  }

  return (
      <div className="">
        <div
            className="p-5 border-t bg-muted sm:p-10 w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]">
          <Container>
            <div className="flex md:flex-row flex-col gap-3 sm:gap-4">
              <div className="grid grid-rows-2">
                <div className="font-bold sm:text-3xl text-2xl">
                  Let&apos;s discuss on something cool together
                </div>
                <div className="flex flex-col justify-end gap-5">
                  <div>I&apos;m interested in ...</div>
                  <RadioGroup defaultValue="card" className="flex flex-wrap">
                    <div>
                      <RadioGroupItem value="ecommerce_website" id="ecommerce_website" className="peer sr-only"/>
                      <Label
                          htmlFor="ecommerce_website"
                          className="flex flex-col items-center justify-between rounded-md border border-primary bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-background [&:has([data-state=checked])]:bg-primary"
                      >
                        Ecommerce Website
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="saas_website" id="saas_website" className="peer sr-only"/>
                      <Label
                          htmlFor="saas_website"
                          className="peer-data-[state=checked]:text-background flex flex-col items-center justify-between rounded-md border border-primary bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:bg-primary [&:has([data-state=checked])]:bg-primary"
                      >
                        Saas Website
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="landing_page" id="landing_page" className="peer sr-only"/>
                      <Label
                          htmlFor="landing_page"
                          className=" peer-data-[state=checked]:text-background flex flex-col items-center justify-between rounded-md border border-primary bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:bg-primary [&:has([data-state=checked])]:bg-primary"
                      >
                        Landing Page
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="portfolio" id="portfolio" className="peer sr-only"/>
                      <Label
                          htmlFor="portfolio"
                          className="peer-data-[state=checked]:text-background flex flex-col items-center justify-between rounded-md border border-primary bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:bg-primary [&:has([data-state=checked])]:bg-primary"
                      >
                        Portfolio
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="blog_website" id="blog_website" className="peer sr-only"/>
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
              <div className="sm:w-[50%] text-lg sm:leading-8">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-3 sm:gap-5">
                    <Input className="bg-background" placeholder="Your name" type="text" value={name}
                           onChange={(e) => setName(e.target.value)} required/>
                    <Input className="bg-background" placeholder="Your email" type="email" value={email}
                           onChange={(e) => setEmail(e.target.value)} required/>
                    <Textarea className="bg-background h-40" placeholder="Write your message" value={message}
                              onChange={(e) => setMessage(e.target.value)} required/>
                    <Button className="w-full flex gap-2" type="submit"><PaperPlaneIcon />Submit</Button>
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
