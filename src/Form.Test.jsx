import React from "react";
import { isTSAnyKeyword } from "@babel/types";

//test handle test
// describe("handleChange", () => {
//     it("should call setState on input of new conference details", () => {
//         }
//     )

//test submit
    
describe("handleChange", () => {
    it("should return updated conference homepage onClick", () => {
        const wrapper = shallow(<Form />);

        expect(wrapper.find('.clicks-0').length).to.equal(1);
        wrapper.find('test').simulate('click')
        }
    )

//testing errors