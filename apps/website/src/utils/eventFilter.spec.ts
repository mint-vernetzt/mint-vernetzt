import { theDayAfter, isBeforeOneDayAfterDate } from "./eventFilter";

describe("theDayAfter", () => {
  it("returns the next day", () => {
    let referenceDate = new Date("2022-03-17");
    let nextDay = theDayAfter(referenceDate);
    expect(nextDay).toStrictEqual(new Date("2022-03-18"));
  });
});

describe("isBeforeOneDayAfterDate", () => {
  it("returns true if reference < nextDay", () => {
    let referenceDate = new Date("2022-03-17");
    expect(isBeforeOneDayAfterDate(referenceDate, new Date("2022-03-18"))).toBe(
      true
    );
  });

  it("returns false if reference > nextDay", () => {
    let referenceDate = new Date("2022-03-19");
    expect(isBeforeOneDayAfterDate(referenceDate, new Date("2022-03-18"))).toBe(
      false
    );
  });
});
