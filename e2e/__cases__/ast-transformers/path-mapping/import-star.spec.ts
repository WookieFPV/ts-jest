import * as foo from '@share/foo'

test('should return welcome message', () => {
  const userName = 'github-user'

  expect(foo.getWelcomeMessage(userName)).toEqual(`yolo ${userName}`)
})
