import { OrganizationBox, OrganizationBoxProps } from "./OrganizationBox";

export interface OrganizationBoxContainerProps {
  headline: string;
  body: string;
  organisations: OrganizationBoxProps[];
}

export function OrganizationBoxContainer(props: OrganizationBoxContainerProps) {
  const { headline, body, organisations } = props;

  return (
    <section>
      <header>
        <h2 role="heading">{headline}</h2>
        <p data-testid="body" className="lead">
          {body}
        </p>
      </header>

      <div
        data-testid="grid"
        className="flex flex-row flex-wrap justify-center	-mx-2 lg:-mx-3 items-stretch pt-14"
      >
        {organisations.map((useBoxProps, index) => {
          return (
            <div
              key={`organization-box-container-item-${index}`}
              data-testid="gridcell"
              className="md:w-1/3 lg:w-1/5 px-2 lg:px-3 mb-6"
            >
              <OrganizationBox {...useBoxProps} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default OrganizationBoxContainer;
