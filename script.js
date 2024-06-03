const minnum = 1 
const maxnum = 100
const answer = Math.floor(Math.random() * (maxnum - minnum +1)) + minnum;

let attempts = 0;
let guess ;
let running = true ;

while(running){
        guess = prompt("Guess And Enter A Number Between 1 - 100")
        guess=Number(guess)
        
        if (guess < minnum ||guess > maxnum) {
                window.alert ("Please Enter A Valid Number")
        }
        else {
            attempts++ ;
            if (guess < answer ) {
                window.alert("TOO LOW!! Please Enter A Higher Number")
            }
            else if (guess > answer) {
                    window.alert("TOO HIGH! Please Enter A Lower Number")
            }
            else {
                    window.alert(`CORRECT ! The Number was ${answer} You Took ${attempts} attempts`)
                    running = false ;
            }
        }

}