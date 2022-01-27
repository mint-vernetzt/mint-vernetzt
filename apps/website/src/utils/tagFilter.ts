const isBrowser = () => typeof window !== "undefined";

export function filterProviderQS(paramName: string): string | null {
  if (!isBrowser || !("URLSearchParams" in window)) {
    return null;
  }

  return getQSParam(paramName);
}

export function getQSParam(paramName: string): string | null {
  return typeof window !== `undefined`
    ? new URLSearchParams(window.location.search).get(paramName)
    : null;
}

export function setQSParam(paramName: string, value: string): void {
  if (window) {
    let searchParams = new URLSearchParams(window.location.search);
    searchParams.set(paramName, value);

    let newRelativePathQuery =
      window.location.pathname + "?" + searchParams.toString();
    history.pushState(null, "", newRelativePathQuery);
  }
}
