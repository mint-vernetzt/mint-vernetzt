import { UserCard, UserCardProps } from "./UserCard";

export interface UserCardContainerProps {
  headline: string;
  body: string;
  userCardsProps?: UserCardProps[];
}

export function UserCardContainer({
  headline,
  body,
  userCardsProps = [],
}: UserCardContainerProps) {
  return (
    <section className="bg-fill rounded-3xl p-16 text-center">
      <h2
        role="heading"
        className="text-primary normal-case pb-6"
        style={{
          // temporary inline styles – have to move to theme presets
          fontSize: "64px",
          letterSpacing: "-1.28px",
          lineHeight: "64px",
        }}
      >
        {headline}
      </h2>
      <p
        data-testid="body"
        className="text-xl leading-6 text-neutral-700"
        style={{ letterSpacing: "-0.24px" }}
      >
        {body}
      </p>
      <div data-testid="grid" className="grid grid-cols-5 gap-y-8 pt-14">
        {userCardsProps.map((useCardProps, index) => {
          return (
            <div
              key={`user-card-container-item-${index}`}
              data-testid="gridcell"
            >
              <UserCard {...useCardProps} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default UserCardContainer;
