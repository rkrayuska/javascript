function parimpar(n){
    if(n%2==0){
        return 'Par!'
    }else{
        return 'Ímpar!'
    }
}
let res = parimpar(2) //Daria pra fazer sem a variável, nesse caso ficaria console.log(parimpar(4))
console.log(res)