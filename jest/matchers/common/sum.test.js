const sum = require("./sum");

// A maneira mais simples para testar um valor é com igualdade exata.
test("1 + 2 = 3", () => {
    expect(sum(1, 2)) // Retorna um objeto de expectativa. 
        .toBe(3); // Matcher.
});

test("Atribuição de objeto", () => {
    const data = { one: 1 };

    data["two"] = 2;

    // toEqual recursivamente verifica cada campo de um objeto ou array.
    expect(data).toEqual({ one: 1, two: 2 });
    // Usar toStrictEqual é preferível a usar toEqual.
});

// Você também pode testar o oposto de um matcher usando not:
test("Adicionando números positivos não é zero", () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0);
        }
    }
});
