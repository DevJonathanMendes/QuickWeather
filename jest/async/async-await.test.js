// Como alternativa, você pode usar async e await em seus testes.
// Para escrever um teste assíncrono, basta usar a palavra-chave async na frente da função passada para test.
// Por exemplo, o mesmo cenário de fetchData pode ser testado com:

test("the data is egg paste", async () => {
    const data = await fetchData();
    expect(data).toBe("egg paste");
});

test("the fetch fails with an error", async () => {
    expect.assertions(1);
    try {
        await fetchData();
    } catch (e) {
        expect(e).toMatch("error");
    }
});

// Você pode combinar async e await com .resolves ou .rejects.
test("the data is peanut butter", async () => {
    await expect(fetchData())
        .resolves.toBe("peanut butter");
});

test("the fetch fails with an error", async () => {
    await expect(fetchData())
        .rejects.toMatch("error");
});

// Se espera que a promessa seja rejeitada, use o método .catch.
// Certifique de adicionar expect.assertions para verificar que um certo número de afirmações são chamadas.
// Caso contrário, uma promessa cumprida não falharia no teste.

test("the fetch fails with an error", () => {
    expect.assertions(1);
    return fetchData().catch(e => expect(e).toMatch("error"));
});
