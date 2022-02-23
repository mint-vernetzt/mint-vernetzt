import { EventFeedItemProps } from "@mint-vernetzt/react-components";

export function isBeforeOneDayAfterDate(referenceDate: Date, date: Date) {
  let dayAfterEndDate = theDayAfter(date);

  return referenceDate < dayAfterEndDate;
}

export function theDayAfter(date: Date) {
  date.setDate(date.getUTCDate() + 1);
  date.setUTCHours(0, 0, 0);

  return date;
}
