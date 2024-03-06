

import vitest from 'vitest';
import MyEducationPage from './MyEducationPage';

const { describe ,assert, test, expect, mount } = vitest;

describe('MyEducationPage Component', () => {
    test('renders without crashing', () => {
        const div = document.createElement('div');
        // eslint-disable-next-line no-undef
        const mockChangeMainRenderedPage = jest.fn();

        const myEducationPageInstance = mount(MyEducationPage, div, { changeMainRenderedPage: mockChangeMainRenderedPage });

        expect(div.innerHTML).toMatchSnapshot();
    });


    // Add more tests as needed based on your component's functionality
});

describe('Education test', () => {
    it('MyeducationPage', () => {
        assert.equal(Math.sqrt(4), 2);
    });
});