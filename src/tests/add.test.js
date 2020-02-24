const add = (a, b) => a + b;

const generateGreeting = (name = 'Anonymus') => `Hello ${name}!`;

test('should add two nums', () => {
    const result = add(2, 5);
    expect(result).toBe(7);
});

test(('Shuld return a greeting string with a name'), () => {
    const result  = generateGreeting('Balint')
    expect(result).toBe('Hello Balint!')
})

test(('Should return a greeting with Anonymus'), () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymus!')
})