import { expect, test } from "vitest";
import { Dog } from "../src/opp";

test('should create a dog', () => {
    const firulais = new Dog('Firulais', 3);
    expect(firulais).toMatchObject({name: 'Firulais', age: 3});
});

test('should dog bark', () => { 
    const firulais = new Dog('Firulais', 3);
    expect(firulais.bark()).toBe('Firulais is barking');
});

test('should increase age and return birthday message', () => { 
    const firulais = new Dog('Firulais', 3);
    expect(firulais.haveBirthday()).toBe('Happy Birthday, Firulais; You are now 4 years old.');
    expect(firulais.age).toBe(4); // Verifica que la edad haya aumentado
});
