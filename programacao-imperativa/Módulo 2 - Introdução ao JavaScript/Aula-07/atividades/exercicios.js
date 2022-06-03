/*Ex1. O que cada expressão retorna?

!true = false
!false = true
!!false true = false true
!!true = true
!1 = false
!!1 = TRUE
!0 = true
!!0 = false
!!"" = false // quando tá vazio é false

let x = 5 ; 
let y = 9;
x < 10 && x!==5 = F
x>9 || x===5 = V
!(x===y)

Resposta = 
V,F // operação com && (and) as duas variaveis tem quer ser V para a expressão ser V
F,V // operacao com || (ou) apenas uma das operções tem que ser V 
V

Sem testar no console, o que você acha que cada uma destas expressões irá retornar? Elas são true ou false?

let x=10
let y ="a"
y==="b" || x >= 10

Resposta:
V,F // V

let x=3
let y=8
!(x == "3" || x === y) && !(y !== 8 && x <= y)

Resposta:
!(F || F) && !(F && V)
V && F = F

let str = "" // string vazia é falso
let msg = "haha!" // string preenchida é verdadeiro
let eBonito = "false" // string com o valor false que é Verdadeiro 
!((str || msg) && eBonito)
!(V && V )
!V = F
Resposta:
F, V

*/