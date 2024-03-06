import vitest from 'vitest';
import ForumPage from './ForumPage';
import ForumObject from "./ForumObject.jsx";
import ForumListItems from "./ForumListItems.jsx";
import ForumItem from "./ForumItem.jsx";

const { describe, test, expect, mount } = vitest;

describe('forum page', () => {
    test('renders without crashing', () => {
        const div = document.createElement('div');
        mount(ForumPage, div);
        expect(div.innerHTML).toMatchSnapshot();
    });

    test('handles forum selection correctly', () => {
        const div = document.createElement('div');
        const forumPageInstance = mount(ForumPage, div);

        // Simulate a forum selection
        const mockForumId = 1;
        forumPageInstance.handleChoose(mockForumId);

        // Access the internal state or verify side effects as needed
        const forumState = forumPageInstance.state;
        // For example: expect(forumState.selectedForum).toEqual(mockForumId);
    });
});

describe('forum object', () => {
    test('renders without crashing', () => {
        const div = document.createElement('div');
        const mockLocation = {
            state: {
                author: 'John Doe',
                description: 'Sample description',
                mainDescription: 'Sample main description',
                title: 'Sample Forum',
                image: 'sample.jpg',
                id: 1,
                userForumCount: 100,
                topics: [{ id: 1, title: 'Topic 1' }, { id: 2, title: 'Topic 2' }]
            }
        };

        // Mocking the useLocation hook
        // eslint-disable-next-line no-undef
        jest.spyOn(require('react-router-dom'), 'useLocation').mockReturnValue(mockLocation);

        mount(ForumObject, div);

        expect(div.innerHTML).toMatchSnapshot();
    });

});
describe('forum list items', () => {
    test('renders without crashing', () => {
        const div = document.createElement('div');
        const mockForumData = [
            {
                id: 1,
                image: 'sample.jpg',
                description: 'Sample description',
                title: 'Sample Forum 1',
                author: 'John Doe',
                userForumCount: 100
            },
            {
                id: 2,
                image: 'sample.jpg',
                description: 'Sample description',
                title: 'Sample Forum 2',
                author: 'Jane Doe',
                userForumCount: 200
            }
            // Add more sample data as needed
        ];

        // eslint-disable-next-line no-undef
        mount(ForumListItems, div, { forumData: mockForumData, onAction: jest.fn() });

        expect(div.innerHTML).toMatchSnapshot();
    });
});
describe('forum-item', () => {
    test('renders without crashing', () => {
        const div = document.createElement('div');
        const mockForumItem = {
            id: 1,
            title: 'Sample Forum',
            image: 'sample.jpg',
            description: 'Sample description',
            author: 'John Doe',
            userForumCount: 100
        };

        // eslint-disable-next-line no-undef
        mount(ForumItem, div, { ...mockForumItem, onAction: jest.fn() });

        expect(div.innerHTML).toMatchSnapshot();
    });
});
test('forum page', () => {
    const data = { foo: new Set(['bar', 'snapshot']) }
    expect(data).toMatchSnapshot({ foo: expect.any(Set) })
})
test('forum object', () => {
    const data = { foo: new Set(['bar', 'snapshot']) }
    expect(data).toMatchSnapshot({ foo: expect.any(Set) })
})
test('forum list items', () => {
    const data = { foo: new Set(['bar', 'snapshot']) }
    expect(data).toMatchSnapshot({ foo: expect.any(Set) })
})
test('forum-item', () => {
    const data = { foo: new Set(['bar', 'snapshot']) }
    expect(data).toMatchSnapshot({ foo: expect.any(Set) })
})