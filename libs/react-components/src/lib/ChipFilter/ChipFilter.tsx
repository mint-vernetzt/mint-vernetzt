import * as React from "react";

import { Chip, ChipProps, ChipClickHandler } from "../Chip/Chip";

/* eslint-disable-next-line */
export interface ChipFilterProps {
  chips: ChipProps[];
  possibleTags?: ChipProps[];
  selectedChips?: ChipProps[];
  onChipClick?: ChipClickHandler;
}

export function ChipFilter({
  chips,
  possibleTags = [],
  selectedChips = [],
  onChipClick,
}: ChipFilterProps) {
  if (chips.length === 0) {
    return null;
  }

  let isChipEnabled = (chip: ChipProps) =>
    selectedChips.some((selectedChip) => selectedChip.slug === chip.slug);

  chips.sort((a, b) => (a.slug > b.slug ? 1 : b.slug > a.slug ? -1 : 0));
  let isChipPossible = (chip: ChipProps) =>
    possibleTags.some((tag) => chip.slug === tag.slug);

  return (
    <div className="flex flex-wrap mb-4 bg-white">
      <ul className="flex flex-nowrap overflow-x-auto overflow-y-hidden md:order-4">
        {chips.map((chip) => (
          <li key={chip.slug}>
            <Chip
              {...chip}
              onClick={isChipPossible(chip) ? onChipClick : undefined}
              isEnabled={isChipEnabled(chip)}
              isRemovable={isChipEnabled(chip)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChipFilter;
