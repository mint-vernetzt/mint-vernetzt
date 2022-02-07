import React from "react";
import { UserCard, UserCardProps } from "./UserCard";

export interface UserCardContainerProps {
  headline: string | React.ReactNode;
  body: string;
  userCardsProps?: UserCardProps[];
}

export function UserCardContainer({
  headline,
  body,
  userCardsProps = [],
}: UserCardContainerProps) {
  return (
    <section className="bg-tertiary-300 rounded-3xl py-4 md:py-10 lg:py-24 px-2">
      <header>
        {headline}
        {/* <h2 role="heading" className="text-center">
        </h2> */}
        <p data-testid="body" className="lead font-bold px-4 md:px-10">
          {body}
        </p>
      </header>
      <div
        data-testid="grid"
        className="grid grid-cols-1 gap-8 xs:grid-cols-3 md:grid-cols-5 gap-y-8"
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
