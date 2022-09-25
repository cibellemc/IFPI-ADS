/* Converta em arrow function a seguinte função:
function ola() {
console.log("Olá");
}*/

import prompt from "prompt-sync"
const input = prompt()

let ola = (msg : string) => console.log(msg) //single line arrow func
let msg = input("> ")
ola(msg)


/* arrow without parameter 
    let message = () => console.log("welcome")
*\


/* muktiple lines arrow func
    let add it = (x: number, y: number) => {
        let z = 8
        return (x + y +)
    }
*/
