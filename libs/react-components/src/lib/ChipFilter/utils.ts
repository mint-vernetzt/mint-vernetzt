const isBrowser = typeof window !== "undefined";

export type Slug = string;

const SPLIT_CHAR = "|";

export type ChipFilterReducerState = Slug[];
export type ChipFilterReducerAction = { slug: string; type: "ADD" | "REMOVE" };

export const chipFilterReducer = (
  state: ChipFilterReducerState,
  action: ChipFilterReducerAction
) => {
  switch (action.type) {
    case "ADD":
      return state.indexOf(action.slug) === -1 && action.slug !== ""
        ? [...state, action.slug]
        : state;
    case "REMOVE":
      return state.filter((slug) => slug !== action.slug);
    default:
      return state;
  }
};

export function filterProviderQS(paramName: string): Slug[] | null {
  if (!isBrowser || !("URLSearchParams" in window)) {
    return null;
  }
  let param = getQSParam(paramName);

  return param !== null
    ? param.split(SPLIT_CHAR).filter((p) => p !== "")
    : null;
}

export function getQSParam(paramName: string): string | null {
  return typeof window !== `undefined`
    ? new URLSearchParams(window.location.search).get(paramName)
    : null;
}

export function setQSParam(paramName: string, slugs: Slug[]): void {
  if (isBrowser) {
    let searchParams = new URLSearchParams(window.location.search);
    if (slugs.length === 0) {
      searchParams.delete(paramName);
    } else {
      searchParams.set(paramName, slugs.join(SPLIT_CHAR));
    }

    let newRelativePathQuery =
      window.location.pathname + "?" + searchParams.toString();
    history.pushState(null, "", newRelativePathQuery);
  }
}
