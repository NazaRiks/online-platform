import { it, assert,describe, test, expect, mount } from 'vitest';
import WelcomePage from './WelcomePage';


describe('WelcomePage Component', () => {
    test('renders without crashing', () => {
        const div = document.createElement('div');
        mount(WelcomePage, div);
        expect(div.innerHTML).toMatchSnapshot();
    });

});
describe('welcome test', () => {
    it('Weclome-Page', () => {
        assert.equal(Math.sqrt(4), 2);
    });

});