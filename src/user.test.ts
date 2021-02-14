import { greeting } from './user'

test('should return null when params is null', () => {
    expect(greeting()).toBe('')
})

test('should return Hello + name', () => {
    expect(greeting('dharma')).toBe('Hello dharma')
})
