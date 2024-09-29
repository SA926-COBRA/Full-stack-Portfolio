import React from 'react';
import Link from "next/link";
import {
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoWhatsapp,
  IoLogoYoutube
} from "react-icons/io";
import {IoLogoBehance} from "react-icons/io5";
import {SiGmail} from "react-icons/si";
import {QuestionMarkCircledIcon} from "@radix-ui/react-icons";
import {BsTwitterX} from "react-icons/bs";

interface Framework {
  value: string;
  label: string;
  icon: React.ReactNode;
}

export const allContacts: Framework[] = [
  {value: 'github', label: 'Github', icon: <IoLogoGithub size={25}/>},
  {value: 'facebook', label: 'Facebook', icon: <IoLogoFacebook size={25}/>},
  {value: 'instagram', label: 'Instagram', icon: <IoLogoInstagram size={25}/>},
  {value: 'linkedin', label: 'Linkedin', icon: <IoLogoLinkedin size={25}/>},
  {value: 'twitter', label: 'Twitter', icon: <BsTwitterX size={18}/>},
  {value: 'behance', label: 'Bahance', icon: <IoLogoBehance size={25}/>},
  {value: 'youtube', label: 'Youtube', icon: <IoLogoYoutube size={25}/>},
  {value: 'other', label: 'Other', icon: <QuestionMarkCircledIcon />},
];

interface SocialMedia {
  [key: string]: string;
}

const renderContact = (socialMedia: SocialMedia) => {
  const renderedContacts = [];

  const whatsappNumber = socialMedia['whatsapp'];
  if (whatsappNumber) {
    renderedContacts.push(
      <div key="whatsapp" className="w-8 h-8 rounded-full hover:-translate-y-1 text-foreground/80 bg-background shadow-lg hover:shadow-primary transition-all flex items-center justify-center">
        <Link href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
          <IoLogoWhatsapp size={25}  />
        </Link>
      </div>
    );
  }

  const gmailAddress = socialMedia['gmail'];
  if (gmailAddress) {
    renderedContacts.push(
      <div key="gmail" className="w-8 h-8 rounded-full hover:-translate-y-1 text-foreground/80 bg-background shadow-lg hover:shadow-primary transition-all  flex items-center justify-center">
        <Link href={`mailto:${gmailAddress}`} target="_blank" rel="noopener noreferrer">
          <SiGmail size={21} />
        </Link>
      </div>
    );
  }

  for (const [contact, value] of Object.entries(socialMedia)) {
    if (!['whatsapp', 'gmail'].includes(contact) && value) {
      // Check if the value exists in allContacts
      const matchingContact = allContacts.find(item => item.value === contact);
      if (matchingContact) {
        renderedContacts.push(
          <div key={contact} className="w-8 h-8 rounded-full hover:-translate-y-1 text-foreground/80 bg-background shadow-lg hover:shadow-primary transition-all  flex items-center justify-center">
            <Link href={value} target="_blank" rel="noopener noreferrer">
              {matchingContact.icon}
            </Link>
          </div>
        );
      }
    }
  }
  return renderedContacts;
};

const ContactIcons = ({socialMedia}: { socialMedia: SocialMedia }) => {
  return (
      <div className="flex gap-2">
        {renderContact(socialMedia)}
      </div>
  );
};

export default ContactIcons;