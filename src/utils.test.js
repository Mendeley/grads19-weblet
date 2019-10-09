import { getTimestring, getDatestring, getBackgroundColor } from "./utils";

describe("utils", () => {
  describe("getTimestring", () => {
    it("renders correct timestring given a date", () => {
      const date = new Date("2019-11-12T12:34:11Z");
      expect(getTimestring(date)).toEqual("12:34");
    });
  });
  describe("getDatestring", () => {
    it("renders correct datestring given a date", () => {
      const date = new Date("2019-11-12T12:34:11Z");
      expect(getDatestring(date)).toEqual("12/11/2019");
    });
  });
  describe("getBackgroundColor", () => {
    const dateDay = new Date("2019-11-12T12:34:11Z");
    const dateNight = new Date("2019-11-12T18:34:11Z");
    expect(getBackgroundColor(dateDay)).toEqual(undefined);
    expect(getBackgroundColor(dateNight)).toEqual("#AD9FC8");
  });
});
