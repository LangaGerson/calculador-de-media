function clicar(){
    alert(
`🚀 Como Funciona o Calculador de Médias?
Esta ferramenta foi desenvolvida para ajudar você a calcular a sua média escolar de forma rápida, simples e totalmente automatizada. O sistema avalia o seu desempenho com base nas notas das suas avaliações e mostra instantaneamente se você alcançou a meta para aprovação.
📋 Passo a Passo para Usar:
Preencha as Notas: Insira as suas notas nos campos indicados:
1ª ACS: Nota da primeira Avaliação Contínua Sistemática.
2ª ACS: Nota da segunda Avaliação Contínua Sistemática.
AP: Nota da Avaliação Periódica.
Clique em Calcular: Depois de preencher todos os campos, clique no botão Calcular.
Confira o Resultado: O sistema fará a soma das duas notas das ACS e dividirá por dois,e somará a media das ACS multiplicada por 2 e somará com a nota da AP e dividirá por 3 e exibirá a sua média final na tela com uma resposta visual imediata.
🎨 Entenda o Resultado Visual:
O sistema utiliza cores inteligentes para que você saiba a sua situação num piscar de olhos:
🟢 Texto em Verde (Média > 10.0): Significa que você foi APROVADO! Parabéns pelo esforço e continue mantendo o foco nos estudos.
🔴 Texto em Vermelho (Média < 10.0): Significa que você foi REPROVADO. Não desanime! Use isso como um incentivo para revisar as matérias e se preparar melhor para as próximas avaliações.
Nota: Certifique-se de preencher todos os campos corretamente antes de clicar em calcular, caso contrário, o sistema emitirá um alerta para que você não deixe nenhum espaço em branco.`)
}
function calcular(){
    var ac1 = document.getElementById("txt1")
    var ac2 = document.getElementById("txt2")
    var acp = document.getElementById("txtp")
    var tela= document.getElementById('res')
    var tela2= document.getElementById('clas')
    if( ac1.value.length==0 || ac2.value.length==0 || acp.value.length ==0){
        alert("Por favor, preencha os espaços!")
    }else{
        num1=Number(ac1.value)
        num2=Number(ac2.value)
        nump=Number(acp.value)
        if(num1< 0||num1> 20 ||num2<0 || num2>20|| nump<0||nump>20){
            alert("Por favor, introduza notas validas de 0 a 20!")
        }else{
            var media = ((2*(num1 + num2)/2)+nump)/3
            tela.innerHTML =(`A sua média é ${media.toFixed(2)}`)

            if(media>= 10){
                tela2.innerHTML =(`Aprovado`)
                tela2.style.color= "green"
            } else{
                tela2.innerHTML =(`Reprovado`)
                tela2.style.color= "red"
            }
        }
        
    }
    

}