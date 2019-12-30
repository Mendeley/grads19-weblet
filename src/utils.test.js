import { getTimestring, getDatestring } from "./utils";

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
});
