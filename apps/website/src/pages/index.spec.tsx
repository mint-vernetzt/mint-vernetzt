import React from "react";
import { render } from "@testing-library/react";
import faker from "faker";

import { EventData, transformEventData } from "./index";

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
