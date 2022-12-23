// Se você quiser testar se uma determinada função lança um erro quando é chamada, use toThrow.

function compileAndroidCode() {
    throw new Error("you are using the wrong JDK!");
}

test("Compiling android goes as expected", () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);

    // You can also use a string that must be contained in the error message or a regexp
    expect(() => compileAndroidCode()).toThrow("you are using the wrong JDK");
    expect(() => compileAndroidCode()).toThrow(/JDK/);

    // Or you can match an exact error message using a regexp like below
    expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // Test fails
    expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass
});
// A função que lança uma exceção precisa ser invocada dentro de uma função de encapsulamento,
// caso contrário, a asserção toThrow falhará.
