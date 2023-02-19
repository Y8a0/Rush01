function printBox(width,  height){
let pattern = " ";
for (let i = 1; i <= height; i++) {
   for (let j = 1; j <=  width; j++) {      
      if (i == 1 || i == height) 
         pattern += "*";// pattern = pattern + "*" 
      else {
         if (j == 1 || j ==  width) {
            pattern += "*";
         } else {
            pattern += " ";
         }
      }
   }
   pattern += " \n ";
}
return pattern;
}
console.log(printBox(5, 4));
console.log(printBox(6, 5));


module.exports = printBox;