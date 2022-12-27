// Você pode verificar se um array ou iterável contém um item específico usando toContain.

const shoppingList = [
    "fraldas",
    "kleenex",
    "sacos de lixo",
    "papel toalha",
    "leite",
];

test("A lista de compras tem leite nela", () => {
    expect(shoppingList).toContain("leite");
    expect(new Set(shoppingList)).toContain("leite");
});
