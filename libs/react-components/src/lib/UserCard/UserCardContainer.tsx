import * as React from "react";
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
    <section className="bg-tertiary-300 rounded-3xl py-16">
      <header>
        <h2 role="heading">{headline}</h2>
        <p data-testid="body" className="lead">
          {body}
        </p>
      </header>
      <div
        data-testid="grid"
        className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-5 gap-y-8"
      >
        {userCardsProps.map((userCardProps, index) => {
          return (
            <div
              key={`user-card-container-item-${index}`}
              data-testid="gridcell"
            >
              <UserCard {...userCardProps} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default UserCardContainer;
