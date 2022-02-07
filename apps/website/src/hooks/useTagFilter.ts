import { ChipFilterReducerAction } from "./../../../../libs/react-components/src/lib/ChipFilter/utils";
import { useReducer, useEffect } from "react";

import {
  chipFilterReducer,
  filterProviderQS,
  setQSParam,
  ChipFilterReducerState,
  Slug,
} from "@mint-vernetzt/react-components";

export function useTagFilter(
  parameterName: string
): [
  filterTags: ChipFilterReducerState,
  filterClickHandler: (slug: Slug, allowedSlugs: Slug[]) => void,
  addTagClickHandler: (
    slug: Slug,
    allowedSlugs: Slug[],
    callback?: () => void
  ) => void
] {
  const [filterTags, dispatch] = useReducer(
    chipFilterReducer,
    filterProviderQS(parameterName) ?? []
  );

  useEffect(() => {
    setQSParam(parameterName, filterTags);
  }, [filterTags]);

  let addTagClickHandler = (
    slug: Slug,
    allowedSlugs: Slug[],
    callback?: () => void
  ) => {
    if (allowedSlugs.indexOf(slug) !== -1) {
      dispatch({ slug, type: "ADD" });

      if (callback) {
        callback();
      }
    }
  };

  let filterClickHandler = (slug: Slug, allowedSlugs: Slug[]) => {
    let type: ChipFilterReducerAction["type"] =
      allowedSlugs.indexOf(slug) !== -1 && filterTags.indexOf(slug) === -1
        ? "ADD"
        : "REMOVE";

    dispatch({ slug, type });
  };

  return [filterTags, filterClickHandler, addTagClickHandler];
}
