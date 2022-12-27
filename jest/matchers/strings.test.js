// Você pode verificar strings contra expressões regulares com toMatch.

test("não existe I em team", () => {
    expect("team").not.toMatch(/I/);
});

test("mas existe 'stop' em Christoph", () => {
    expect("Christoph").toMatch(/stop/);
});
