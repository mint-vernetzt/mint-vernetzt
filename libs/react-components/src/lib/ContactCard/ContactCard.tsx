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
    <div>
      <h4>{headline}</h4>
      <p data-testid="name">{name}</p>
      <p data-testid="position">{position}</p>
      <a href={`tel:${phone}`}>
        <p data-testid="phone">{phone}</p>
      </a>
      <a href={`mailto:${email}`}>
        <p data-testid="email">{email}</p>
      </a>
      <img
        data-testid="avatar"
        className="mb-4 w-20 h-20 object-cover rounded-full"
        src={avatar.src}
        alt={avatar.alt}
      />
    </div>
  );
}

export default ContactCard;
