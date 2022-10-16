let bonus = 20;

function sum(fst, snd){
    let res = fst + snd+ bonus;
    // console.log(bonus);
    if(res > 9 ){
        const mood = "happy";
        console.log(mood);
    }
    return res;
}

console.log(sum(3,4));
