import { useReducer, useEffect } from "react";

import {
  tagFilterReducer,
  filterProviderQS,
  setQSParam,
  TagFilterReducerState,
  Slug,
} from "@mint-vernetzt/react-components";

export function useTagFilter(
  parameterName: string
): [
  filterTags: TagFilterReducerState,
  filterClickHandler: (slug: Slug, allowedSlugs: Slug[]) => void,
  tagClickHandler: (
    slug: Slug,
    allowedSlugs: Slug[],
    callback?: () => void
  ) => void
] {
  const [filterTags, dispatch] = useReducer(
    tagFilterReducer,
    filterProviderQS(parameterName) ?? []
  );

  useEffect(() => {
    setQSParam(parameterName, filterTags);
  }, [filterTags]);

  let filterClickHandler = (slug: Slug, allowedSlugs: Slug[]) => {
    if (allowedSlugs.indexOf(slug) !== -1) {
      dispatch({ slug, type: "REMOVE" });
    }
  };

  let tagClickHandler = (
    slug: Slug,
    allowedSlugs: Slug[],
    callback?: () => void
  ) => {
    if (allowedSlugs.indexOf(slug) !== -1 && filterTags.indexOf(slug) === -1) {
      dispatch({ slug, type: "ADD" });

      if (callback) {
        callback();
      }
    }
  };

  return [filterTags, filterClickHandler, tagClickHandler];
}
