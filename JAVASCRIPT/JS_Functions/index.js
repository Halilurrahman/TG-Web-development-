const knownNames1="John";
const knownNames2="Olly";
const knownNames3="Mo";
const knownNames4="Hendrik";
const knownNames5="Tony";
 

const arrayOfNames=["John","Olly","Mo","Hendrik","Tony","Irus","Jan","Peter"];

randomName = () => { 
    var x = Math.floor((Math.random() * 8)); 
    // console.log(x);
    return arrayOfNames[x];
   
    
}
let name=randomName(); 
 
    //  document.getElementById("answer").innerHTML =name;   
// function randomName() {
//   var x = Math.floor((Math.random() * 8)); 
//   return arrayOfNames[x];
  //    }    
//    let name=randomName();


 checkName = (name)=> {

   if((name ==knownNames1)||(name==knownNames2)||(name==knownNames3)||(name==knownNames4)||(name==knownNames5)){
        
 document.getElementById("answer").innerHTML =name + " is bekend in ons systeem.";
   }
   else{
    document.getElementById("answer").innerHTML =name + " is niet bekend in ons systeem.";
   }
  // console.log(answer);
}  
checkName(name);
//  console.log(name);


