/* eslint-disable no-undef */
import { orderByProps } from "../orderByProps";

test.each([
    [{ name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 }, ["name", "attack"], [
        { key: 'name', value: 'мечник' },
        { key: 'attack', value: 80 },
        { key: 'defence', value: 40 },
        { key: 'health', value: 10 },
        { key: 'level', value: 2 }
    ]],
    [{ name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 }, ["name", "defence"], [
        { key: 'name', value: 'мечник' },
        { key: 'defence', value: 40 },
        { key: 'attack', value: 80 },
        { key: 'health', value: 10 },
        { key: 'level', value: 2 }
    ]],
    [{ name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 }, ["health", "attack"], [
        { key: 'health', value: 10 },
        { key: 'attack', value: 80 },
        { key: 'defence', value: 40 },
        { key: 'level', value: 2 },
        { key: 'name', value: 'мечник' }
    ]]
])('testing orderByProps', (obj, firstKeyList, expected) => {
    const result = orderByProps(obj, firstKeyList)
    expect(result).toEqual(expected);
});
