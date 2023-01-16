// Imagine que estamos testando uma implementação de uma função forEach,
// que invoca uma "callback" para cada item em um array fornecido.

function myForEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
        callback(items[index]);
    }
}

// Para testar esta função, podemos usar uma função de simulação e
// inspecionar o estado da simulação para garantir que a "callback" é invocada como esperado.

const mockCallback = jest.fn(x => 42 + x);

test('forEach mock function', () => {
    myForEach([0, 1], mockCallback);

    // A função simulada foi chamada duas vezes
    expect(mockCallback.mock.calls).toHaveLength(2);

    // O primeiro argumento da primeira chamada para a função foi 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);

    // O primeiro argumento da segunda chamada para a função foi 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);

    // O valor de retorno da primeira chamada para a função foi 42
    expect(mockCallback.mock.results[0].value).toBe(42);
});
