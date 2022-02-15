import { useState } from "react";
import { Link as GatsbyLink } from "gatsby";
import { Link } from "@mint-vernetzt/react-components";

export function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <div className="header-section py-4 shadow-lg">
      <div className="container">
        <div className="flex flex-wrap items-center">
          <div className="logo-mint lg:pr-16">
            <Link to="/" as={GatsbyLink}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                viewBox="0 0 56 56"
                aria-describedby="mint-title-header"
                role="img"
                className="w-10 h-10 md:w-auto md:h-auto"
              >
                <title id="mint-title-header">Logo: mint vernetzt</title>
                <g fill="none">
                  <path
                    fill="#154194"
                    d="M28 56c15.464 0 28-12.536 28-28S43.464 0 28 0 0 12.536 0 28s12.536 28 28 28"
                  />
                  <path
                    fill="#EFE8E6"
                    d="M41.354 25.24c-.43-.89-.998-1.614-1.703-2.17a6.664 6.664 0 0 0-2.447-1.202 11.356 11.356 0 0 0-2.916-.368c-1.358 0-2.532.174-3.524.524-.992.348-1.879.781-2.662 1.298a8.371 8.371 0 0 0-2.681-1.376 10.67 10.67 0 0 0-3.113-.446 14.397 14.397 0 0 0-3.973.543c-1.266.362-2.33.84-3.19 1.434-.523.362-.927.75-1.214 1.163-.288.414-.431.957-.431 1.628v11.98c0 1.085.26 1.816.783 2.19.522.374 1.37.562 2.545.562.573 0 1.096-.033 1.566-.097.47-.065.834-.136 1.096-.213V26.889c.355-.185.72-.347 1.096-.485a4.18 4.18 0 0 1 1.488-.252c.756 0 1.396.2 1.918.6.522.402.783 1.029.783 1.881v9.615c0 1.085.254 1.816.763 2.19.51.374 1.35.562 2.525.562.574 0 1.096-.033 1.566-.097.47-.065.848-.136 1.135-.213V27.897c0-.26-.026-.52-.078-.776a4.99 4.99 0 0 1 1.233-.697 3.95 3.95 0 0 1 1.468-.272c.809 0 1.449.2 1.918.6.47.402.705 1.029.705 1.881v9.615c0 1.085.255 1.816.763 2.19.51.374 1.351.562 2.526.562.573 0 1.096-.033 1.566-.097A9.51 9.51 0 0 0 42 40.69V28.478c0-1.266-.215-2.345-.646-3.237v-.001Z"
                  />
                  <path
                    fill="#B16FAB"
                    d="M18.967 17.982C19.612 18.66 20.457 19 21.5 19s1.887-.34 2.532-1.018c.645-.679.968-1.513.968-2.503 0-.961-.323-1.782-.968-2.46-.645-.68-1.49-1.019-2.532-1.019-1.044 0-1.888.34-2.533 1.018-.645.68-.967 1.5-.967 2.46 0 .991.322 1.825.967 2.504m12 0C31.612 18.66 32.457 19 33.5 19s1.887-.34 2.532-1.018c.645-.679.968-1.513.968-2.503 0-.961-.323-1.782-.968-2.46-.645-.68-1.49-1.019-2.532-1.019-1.044 0-1.888.34-2.533 1.018-.645.68-.967 1.5-.967 2.46 0 .991.322 1.825.967 2.504"
                  />
                </g>
              </svg>
            </Link>
          </div>

          <button
            className="h-6 w-6 md:hidden ml-auto"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <span
              className={`${
                isExpanded ? `hidden` : `block`
              } items-center h-6 w-6 px-0.5 flex flex-col justify-center`}
            >
              <span className="my-0.5 w-full h-0.5 rounded-sm bg-gray-900"></span>
              <span className="my-0.5 w-full h-0.5 rounded-sm bg-gray-900"></span>
            </span>
            <span
              className={`${
                isExpanded ? `block` : `hidden`
              } items-center h-6 w-6 px-0.5 flex flex-col relative`}
            >
              <span className="my-0.5 w-full h-0.5 rounded-sm bg-gray-900 transform rotate-45 absolute top-2 left-0"></span>
              <span className="my-0.5 w-full h-0.5 rounded-sm bg-gray-900 transform -rotate-45 absolute top-2 left-0"></span>
            </span>
          </button>

          <nav
            className={`${
              isExpanded ? `block` : `hidden`
            } flex-100 md:block md:ml-auto md:flex-auto`}
          >
            <ul className="py-8 text-sm leading-6 md:py-0 md:flex md:items-center md:justify-end md:-mx-2">
              {[
                {
                  route: `/about/`,
                  title: `Über uns`,
                },
                {
                  route: `/news/`,
                  title: `Neuigkeiten`,
                },
                {
                  route: `/events/`,
                  title: `Veranstaltungen`,
                },
                {
                  route: `/projects/`,
                  title: `Projekte`,
                },
                {
                  route: `/pakt/`,
                  title: `Pakt`,
                },
              ].map((link, index) => (
                <li
                  key={`nav-item-${index}`}
                  className="text-center py-2 px-4 md:py-0"
                >
                  <Link
                    className="inline-block py-px px-2 rounded-lg hover:bg-blue-500 hover:text-neutral-200"
                    as={GatsbyLink}
                    key={link.title}
                    to={link.route}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
