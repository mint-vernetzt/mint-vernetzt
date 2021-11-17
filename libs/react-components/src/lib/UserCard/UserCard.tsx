import * as React from "react";
import { Image } from "../types";

export interface UserCardProps {
  name: string;
  email?: string;
  position: string;
  avatar: Image;
  organizationUrl: string;
  organizationLogo: Image;
}

const UserInfo = ({
  avatar,
  name,
}: {
  avatar: UserCardProps["avatar"];
  name: UserCardProps["name"];
}) => (
  <>
    <img
      data-testid="avatar"
      className="mb-4 w-20 h-20 object-cover rounded-full"
      src={avatar.src}
      alt={avatar.alt}
    />

    <p data-testid="name" className="mb-1 font-semibold text-neutral-800">
      {name}
    </p>
  </>
);

const linkWithEmail = (
  email: UserCardProps["email"],
  node: React.ReactNode
) => {
  if (!email) {
    return node;
  } else {
    return (
      <a
        className="flex items-center flex-col mb-1"
        data-testid="email"
        href={`mailto:${email}`}
      >
        {node}
      </a>
    );
  }
};

export function UserCard(props: UserCardProps) {
  const { name, email, position, avatar, organizationUrl, organizationLogo } =
    props;
  return (
    <div className="flex flex-col justify-center items-center text-center">
      {linkWithEmail(email, <UserInfo avatar={avatar} name={name} />)}

      <p className="mb-2" data-testid="position">
        {position}
      </p>

      <div className="h-10 flex flex-wrap content-end">
        <a href={organizationUrl} data-testid="organizationUrl" target="_blank">
          <img
            data-testid="organizationLogo"
            className="max-h-10 w-20"
            src={organizationLogo.src}
            alt={organizationLogo.alt}
          />
        </a>
      </div>
    </div>
  );
}

export default UserCard;
