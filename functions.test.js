const {
    returnTwo,
    greeting,
    add
} = require('./function.js')

test('should return 2', () => {
    expect(returnTwo()).toBe(2)
})

test('yeet the greet', () => {
    expect(greeting('Brando')).toBe('Hello, Brando')
})

test('should add numbers', () => {
    expect(add(15, 45)).toEqual(60)
})