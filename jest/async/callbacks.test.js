// Se você não usar promessas, poderá usar callbacks. 
// Por exemplo, digamos que fetchData, em vez de retornar uma promessa, espera um callback, 
// ou seja, busca alguns dados e chama callback(null, data) quando estiver completo. 
// Você deseja testar que este dado retornado seja apenas uma string "peanut butter".

// Por padrão, testes de Jest completam uma vez que eles chegam ao fim da sua execução.
// Isso significa que este teste não irá funcionar como o esperado:

// Não faça isso!
test("the data is peanut butter", () => {
    function callback(error, data) {
        if (error) {
            throw error;
        }
        expect(data).toBe("peanut butter");
    }

    fetchData(callback);
});
// O problema é que o teste será concluído logo que fetchData completa, antes de sequer chamar a "callback".

// Há uma forma alternativa de test que corrige isto.
// Em vez de colocar o teste em uma função com um argumento vazio, use um único argumento chamado done.
// Jest aguardará até que a "callback" done é chamada antes de terminar o teste.

test("the data is peanut butter", done => {
    function callback(error, data) {
        if (error) {
            done(error);
            return;
        }

        try {
            expect(data).toBe("peanut butter");
            done();
        } catch (error) {
            done(error);
        }
    }

    fetchData(callback);
});
// Se done() nunca for chamado, o teste irá falhar (com erro de timeout), que é o que você quer que aconteça.

// Se a instrução expect falhar, ele lança um erro e done() não é chamado.
// Se queremos ver no log de testes por que falhou, precisamos encapsular expect em um bloco try e passar o erro no bloco catch para o done.
// Caso contrário, ficamos com um erro de timeout, que não mostra o valor recebido por expect(data).