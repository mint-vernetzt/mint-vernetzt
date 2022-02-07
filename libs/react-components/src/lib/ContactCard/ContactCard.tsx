import * as React from "react";
import { H4 } from "../Heading/Heading";
import { Icon, IconType } from "../Icon/Icon";
import { Image } from "../types.d";

export interface ContactCardProps {
  headline: string;
  name: string;
  position: string;
  phone?: string | null;
  email?: string | null;
  avatar: Image;
}

export function ContactCard({
  headline,
  name,
  position,
  phone = null,
  email = null,
  avatar,
}: ContactCardProps) {
  return (
    <div className="contact-card lg:px-8">
      <H4>{headline}</H4>
      <div className="flex items-center mb-2">
        <div className="flex-18 mr-4">
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
        {phone !== null ? (
          <p className="text-xs text-neutral-800 font-semibold mb-2">
            <a href={`tel:${phone}`} className="flex items-center">
              <span className="icon w-4 h-4 mr-2">
                <Icon type={IconType.Telephone} />
              </span>
              <span data-testid="phone">{phone}</span>
            </a>
          </p>
        ) : null}
        {email !== null ? (
          <p className="text-xs text-neutral-800 font-semibold">
            <a href={`mailto:${email}`} className="flex items-center">
              <span className="icon w-4 h-4 mr-2 ">
                <Icon type={IconType.Envelope} />
              </span>
              <span data-testid="email">{email}</span>
            </a>
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default ContactCard;
