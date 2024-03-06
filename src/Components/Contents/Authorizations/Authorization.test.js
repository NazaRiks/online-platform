import { it, assert,describe, test, expect, mount } from 'vitest';
import AuthorizationPage from "./AuthorizationPage.jsx";
describe('Authorization test', () => {
    it('authorization', () => {
        assert.equal(Math.sqrt(4), 2);
    });
})

test('handles login correctly', async () => {
    const div = document.createElement('div');
    const mockUser = { username: 'testuser', password: 'testpassword' };

    // Mock the axios.post function to simulate a successful login
    // eslint-disable-next-line no-undef
    jest.spyOn(axios, 'post').mockResolvedValueOnce({ data: { token: 'mocktoken' } });

    const authorizationPageInstance = mount(AuthorizationPage, div);

    // Simulate user input
    authorizationPageInstance.querySelector('input[name="username"]').value = mockUser.username;
    authorizationPageInstance.querySelector('input[name="password"]').value = mockUser.password;

    // Simulate form submission
    await authorizationPageInstance.querySelector('form').submit();

    // Verify if localStorage was updated with the token
    expect(localStorage.getItem('token')).toEqual('mocktoken');
});