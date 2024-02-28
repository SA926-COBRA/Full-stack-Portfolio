import React from 'react';
import Link from "next/link";
import {IoLogoWhatsapp} from "react-icons/io";

const WhatsappLink = () => {
  const phoneNumber = '+923075577010'; // Replace with your actual phone number
  const message = 'Hello, this message is sent from the Project Manager app.'; // Replace with your desired message

  // Encode the phone number and message for the URL
  const encodedPhoneNumber = encodeURIComponent(phoneNumber);
  const encodedMessage = encodeURIComponent(message);

  // Construct the WhatsApp link
  const whatsappLink = `whatsapp://send?phone=${encodedPhoneNumber}&text=${encodedMessage}`;

  return (
    <div>
      <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <IoLogoWhatsapp size={20}/>
      </Link>
    </div>
  );
};

export default WhatsappLink;
