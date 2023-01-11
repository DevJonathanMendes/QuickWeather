// Jest executa todos os manipuladores de descrição em um arquivo de teste antes de executar qualquer um dos testes reais.
// Esse é outro motivo para fazer a configuração e desmontagem dentro dos manipuladores antes* e depois*,
// em vez de dentro dos blocos de descrição.
// Depois que os blocos de descrição são concluídos, por padrão,
// o Jest executa todos os testes em série na ordem em que foram encontrados na fase de coleta,
// esperando que cada um termine e seja organizado antes de prosseguir.

describe('describe outer', () => {
    console.log('describe outer-a');

    describe('describe inner 1', () => {
        console.log('describe inner 1');

        test('test 1', () => console.log('test 1'));
    });

    console.log('describe outer-b');

    test('test 2', () => console.log('test 2'));

    describe('describe inner 2', () => {
        console.log('describe inner 2');

        test('test 3', () => console.log('test 3'));
    });

    console.log('describe outer-c');
});

  // describe outer-a
  // describe inner 1
  // describe outer-b
  // describe inner 2
  // describe outer-c
  // test 1
  // test 2
  // test 3
