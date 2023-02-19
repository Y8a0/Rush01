function TreeConstructor(strArr) { 
    var arr = [ ], counts= {};
    for (i=0;i < strArr.length;i++){
      arr.push(strArr[i].match(/[0-9]/g)[0]);
      arr.push(strArr[i].match(/[0-9]/g)[1]);
    }
    arr.forEach(function(x){counts[x] = (counts[x] || 0 ) + 1});
    for(j in counts){
      if (counts[j] >=4){
        return false;
      }
    }
    return true;
  }
  console.log(TreeConstructor(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]));
  console.log(TreeConstructor(["(1,2)", "(3,2)", "(2,12)", "(5,2)"]));


  //module.exports = treeConstructor