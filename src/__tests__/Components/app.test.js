import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';
import InputField from '../../components/InputField'

describe("Initial Component Tests", () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
      });

});
