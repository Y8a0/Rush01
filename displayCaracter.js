function displayCaracter(n){
    let lettre = "B";
    for(let i=1;i<=n;i++){
        if(i%2==0){
            console.log(lettre);
            if(lettre == "B")
            lettre = "C";
            else
            lettre = "B";
        }
        else{
            console.log("A");
        }        
    }
    return n;
}
displayCaracter(10);


module.exports = displayCaracter;
