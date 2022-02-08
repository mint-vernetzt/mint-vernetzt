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
  ) => void,
  removeInvalidTags: (allowedSlugs: Slug[]) => void
] {
  const [filterTags, dispatch] = useReducer(chipFilterReducer, []);

  useEffect(() => {
    // add initial tags from query string if applicable
    (filterProviderQS(parameterName) ?? []).forEach((tag) => {
      dispatch({ slug: tag, type: "ADD" });
    });
  }, []);

  useEffect(() => {
    // set QS on every filter change
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

  let removeInvalidTags = (allowedSlugs: Slug[]) => {
    filterTags
      .filter((tag) => allowedSlugs.indexOf(tag) === -1)
      .forEach((invalidSlug) =>
        dispatch({ slug: invalidSlug, type: "REMOVE" })
      );
  };

  return [
    filterTags,
    filterClickHandler,
    addTagClickHandler,
    removeInvalidTags,
  ];
}
