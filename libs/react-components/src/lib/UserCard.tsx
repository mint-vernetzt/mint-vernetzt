export interface Image {
  src: string;
  alt: string;
}

export interface UserCardProps {
  name: string;
  position: string;
  avatar: Image;
  organizationUrl: string;
  organizationLogo: Image;
}

export function UserCard(props: UserCardProps) {
  const { name, position, avatar, organizationUrl, organizationLogo } = props;
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        className="mb-2 w-20 h-20 object-cover rounded-full"
        src={avatar.src}
        alt={avatar.alt}
      />
      <p className="mb-1 text-based font-bold text-neutral-700">{name}</p>
      <p className="mb-2 text-sm text-neutral-600">{position}</p>
      <div className="h-10 flex flex-wrap content-end">
        <a href={organizationUrl}>
          <img
            className="max-h-10"
            src={organizationLogo.src}
            alt={organizationLogo.alt}
          />
        </a>
      </div>
    </div>
  );
}

export default UserCard;
