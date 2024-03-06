import { it, assert,describe, test, expect, mount } from 'vitest';
import RegisterPage from './RegisterPage';


describe('RegisterPage Component', () => {
    test('renders without crashing', () => {
        const div = document.createElement('div');
        mount(RegisterPage, div);
        expect(div.innerHTML).toMatchSnapshot();
    });
});
describe('reg test', () => {
    it('reg', () => {
        assert.equal(Math.sqrt(4), 2);
    });
})

