import { describe, test, expect, mount } from 'vitest';
import MyCoursePage from "./CoursePage.jsx";
import CourseObject from "./CourseObject.jsx";
import CourseListItems from "./CourseListItems.jsx";
import CourseItem from "./CourseItem.jsx";

describe('courses test page', () => {
    test('course page', () => {
    const data = { foo: new Set(['bar', 'snapshot']) }
    expect(data).toMatchSnapshot({ foo: expect.any(Set) })
})
    test('couse object', () => {
        const data = { foo: new Set(['bar', 'snapshot']) }
        expect(data).toMatchSnapshot({ foo: expect.any(Set) })
    })
    test('course list items', () => {
        const data = { foo: new Set(['bar', 'snapshot']) }
        expect(data).toMatchSnapshot({ foo: expect.any(Set) })
    })
    test('course-item', () => {
        const data = { foo: new Set(['bar', 'snapshot']) }
        expect(data).toMatchSnapshot({ foo: expect.any(Set) })
    })
})
test('handles course selection correctly', () => {
    const div = document.createElement('div');
    const mockCourseData = [
        {
            id: 1,
            image: 'sample.jpg',
            description: 'Sample description',
            title: 'Sample Course 1',
            author: 'John Doe',
            price: 49.99,
            userCourseCount: 100,
            mainDescription: 'Sample main description',
            lessons: [{ id: 1, title: 'Lesson 1' }, { id: 2, title: 'Lesson 2' }],
            countOfLessons: 2
        },
        // Add more sample data as needed
    ];

    const myCoursePageInstance = mount(MyCoursePage, div);

    // Mock the useNavigate hook
    // eslint-disable-next-line no-undef
    jest.spyOn(require('react-router-dom'), 'useNavigate').mockReturnValueOnce(jest.fn());

    // Simulate a course selection
    myCoursePageInstance.handleChoose(mockCourseData[0].id);

    // Access the internal state or verify side effects as needed
    const navigateMock = require('react-router-dom').useNavigate();
    // For example: expect(navigateMock).toHaveBeenCalledWith('/courses/course-object', { state: queryParams });
});
describe('CourseObject Component', () => {
    test('renders without crashing', () => {
        const div = document.createElement('div');
        mount(CourseObject, div, {
            location: {
                state: {
                    id: 1,
                    countOfLessons: 10,
                    author: 'John Doe',
                    price: 49.99,
                    userCourseCount: 100,
                    description: 'Sample description',
                    mainDescription: 'Sample main description',
                    title: 'Sample Course',
                    image: 'sample.jpg',
                    lessons: [{ id: 1, title: 'Lesson 1' }, { id: 2, title: 'Lesson 2' }],
                },
            },
        });
        expect(div.innerHTML).toMatchSnapshot();
    });
})
describe('CourseListItems Component', () => {
    const mockCourseData = [
        {
            id: 1,
            countOfLessons: 10,
            author: 'John Doe',
            price: 49.99,
            userCourseCount: 100,
            description: 'Sample description',
            title: 'Sample Course 1',
            image: 'sample1.jpg',
            paid: false,
        },
        {
            id: 2,
            countOfLessons: 8,
            author: 'Jane Smith',
            price: 29.99,
            userCourseCount: 80,
            description: 'Another description',
            title: 'Sample Course 2',
            image: 'sample2.jpg',
            paid: true,
        },
        // Add more sample data as needed
    ];

    test('renders without crashing', () => {
        const div = document.createElement('div');
        // eslint-disable-next-line no-undef
        mount(CourseListItems, div, { courseData: mockCourseData, onAction: jest.fn() });
        expect(div.innerHTML).toMatchSnapshot();
    });
    })
test('calls onAction correctly', () => {
    const div = document.createElement('div');
    // eslint-disable-next-line no-undef
    const mockOnAction = jest.fn();
    const mockCourseItem = {
        id: 1,
        countOfLessons: 10,
        author: 'John Doe',
        price: 49.99,
        userCourseCount: 100,
        description: 'Sample description',
        title: 'Sample Course 1',
        image: 'sample1.jpg',
        paid: false,
    };
    const courseItemInstance = mount(CourseItem, div, { ...mockCourseItem, onAction: mockOnAction });

    // Simulate interaction with the button
    courseItemInstance.querySelector('button').click();

    // Verify if onAction function was called with the correct arguments
    expect(mockOnAction).toHaveBeenCalledWith(mockCourseItem.id);
});