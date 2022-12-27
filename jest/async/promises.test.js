// Retorne uma promise do seu teste, e o Jest vai esperar essa promise ser resolvida.
// Se a promessa for rejeitada, o teste irá falhar.

// Por exemplo, digamos que fetchData retorna uma promessa que é esperada ser resolvida na string "peanut butter".
// Podemos fazer um teste com:

test("the data is peanut butter", () => {
    return fetchData().then(data => {
        expect(data).toBe("peanut butter");
    });
});
