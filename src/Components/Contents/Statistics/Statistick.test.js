import { it, assert,describe, test, expect, mount } from 'vitest';
test('Statistic', () => {
    const data = { foo: new Set(['bar', 'snapshot']) }
    expect(data).toMatchSnapshot({ foo: expect.any(Set) })
})
describe('MyStatisticsPage Component', () => {
    test('renders without crashing', () => {
        const div = document.createElement('div');
        mount(MyStatisticsPage, div);
        expect(div.innerHTML).toMatchSnapshot();
    });
});