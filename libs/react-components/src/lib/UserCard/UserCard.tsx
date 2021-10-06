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
        data-testid="avatar"
        className="mb-2 w-20 h-20 object-cover rounded-full"
        src={avatar.src}
        alt={avatar.alt}
      />
      <p
        data-testid="name"
        className="mb-1 text-based font-bold text-neutral-700"
      >
        {name}
      </p>
      <p className="mb-2 text-sm text-neutral-600" data-testid="position">
        {position}
      </p>
      <div className="h-10 flex flex-wrap content-end">
        <a href={organizationUrl} data-testid="organizationUrl">
          <img
            data-testid="organizationLogo"
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
