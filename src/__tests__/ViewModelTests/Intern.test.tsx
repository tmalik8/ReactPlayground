import React from 'react';
import ReactDOM from 'react-dom';

import { Intern } from '../../model/Intern'
import InternInfoDisplay from '../../components/InternInfoDisplay'


describe("Intern ViewModel tests", () => {
    describe("Component", () => {
        let team = "NoTerm", description = "Description", name = "NoName", imgUrl = "https://www.google.com";
        let intern = new Intern(name, description, team, imgUrl, new Date("1/1/21"));
        it("should handle missing onclick argument", () => {
            const div = document.createElement('div');
            ReactDOM.render(<InternInfoDisplay intern={intern} />, div);
        });
        it("should handle missing intern argument", () => {
            const div = document.createElement('div');
            ReactDOM.render(<InternInfoDisplay  />, div);

        });
    });


});