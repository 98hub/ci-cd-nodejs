const { greeting } = require('../user');

test('should return null when params is null', () => {
    expect(greeting()).toBeUndefined();
});

test('should return Hello + name', () => {
    expect(greeting('Fajar')).toBe('Hello Fajar');
});