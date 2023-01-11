// Os ganchos de nível superior antes* e depois* se aplicam a todos os testes em um arquivo. 
// Os ganchos declarados dentro de um bloco de descrição se aplicam apenas aos testes dentro desse bloco de descrição.

// Por exemplo, digamos que nós não temos apenas um banco de dados de cidades, mas também um banco de dados de alimentos.
//  Nós podemos fazer uma configuração diferente para diferentes testes:

// Aplica-se a todos os teste neste arquivo.
beforeEach(() => {
    return initializeCityDatabase();
});

test('city database has Vienna', () => {
    expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
    expect(isCity('San Juan')).toBeTruthy();
});

describe('matching cities to foods', () => {
    // Aplica-se apenas a testes neste bloco de descrição.
    beforeEach(() => {
        return initializeFoodDatabase();
    });

    test('Vienna <3 veal', () => {
        expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
    });

    test('San Juan <3 plantains', () => {
        expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
    });
});
