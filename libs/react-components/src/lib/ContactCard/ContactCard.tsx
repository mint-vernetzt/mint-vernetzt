import * as React from "react";
import { Image } from "../types.d";

export interface ContactCardProps {
  headline: string;
  name: string;
  position: string;
  phone: string;
  email: string;
  avatar: Image;
}

export function ContactCard({
  headline,
  name,
  position,
  phone,
  email,
  avatar,
}: ContactCardProps) {
  return (
    <div className="contact-card lg:px-8">
      <h4 className="mb-4 text-3xl leading-snug">{headline}</h4>
      <div className="flex items-center mb-2">
        <div className="flex-initial mr-4">
          <img
            data-testid="avatar"
            className="w-18 h-18 object-cover rounded-full"
            src={avatar.src}
            alt={avatar.alt}
          />
        </div>
        <div className="flex-auto">
          <p data-testid="name" className="mb-0 font-semibold text-neutral-800">
            {name}
          </p>
          <p data-testid="position" className="mb-0">
            {position}
          </p>
        </div>
      </div>
      <div className="pl-22">
        <p
          data-testid="phone"
          className="text-xs text-neutral-800 font-semibold mb-2"
        >
          <a href={`tel:${phone}`} className="flex items-center">
            <span className="icon w-4 h-4 mr-2 bg-red-600"></span>
            {phone}
          </a>
        </p>
        <p
          data-testid="email"
          className="text-xs text-neutral-800 font-semibold"
        >
          <a href={`mailto:${email}`} className="flex items-center">
            <span className="icon w-4 h-4 mr-2 bg-red-600"></span>
            {email}
          </a>
        </p>
      </div>
    </div>
  );
}

export default ContactCard;
