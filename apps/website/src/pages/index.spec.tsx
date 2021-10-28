import React from "react";
import { render } from "@testing-library/react";
import faker from "faker";

import { EventData, transformEventData, formatExcerpt } from "./index";

test("transformEventData", () => {
  const eventData: Array<EventData> = [
    {
      title: faker.lorem.words(),
      excerpt: faker.lorem.paragraph(),
      slug: faker.lorem.slug(),
      tags: { nodes: [faker.lorem.word()] },
      duration: {
        startDate: faker.date.future().toISOString(),
        startTime: null,
        endDate: null,
        endTime: null,
      },
    },
  ];

  const transformedEventData = transformEventData(eventData);
  expect(transformedEventData[0].headline).toBe(eventData[0].title);
});

test("remove tags from excerpt string", () => {
  const testString = faker.lorem.words();
  const excerpt = `<p>${testString} &#8222;Enterprise&#8220;</p>`;
  const result = formatExcerpt(excerpt);
  expect(result).toBe(`${testString} "Enterprise"`);
});
