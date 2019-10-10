import { getBackgroundColor, getTimestring, getDatestring } from "./utils";

describe("utils", () => {
  describe("getTimestring", () => {
    it("renders correct timestring given a date", () => {
      expect.assertions(1);

      const date = new Date("2019-11-12T12:34:11Z");

      expect(getTimestring(date)).toEqual("12:34");
    });
  });
  describe("getDatestring", () => {
    it("renders correct datestring given a date", () => {
      expect.assertions(1);

      const date = new Date("2019-11-12T12:34:11Z");

      expect(getDatestring(date)).toEqual("12/11/2019");
    });
  });
  describe("getBackgroundColor", () => {
    it("given date during day renders card with default color", () => {
      expect.assertions(1);

      const dateDay = new Date("2019-11-12T12:34:11Z");

      expect(getBackgroundColor(dateDay)).toEqual(undefined);
    });
    it("given date during night renders card with night-time color", () => {
      expect.assertions(1);

      const dateNight = new Date("2019-11-12T18:34:11Z");

      expect(getBackgroundColor(dateNight)).toEqual("#AD9FC8");
    });
  });
});
