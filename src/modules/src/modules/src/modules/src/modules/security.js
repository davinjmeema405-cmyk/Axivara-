const blocked = [
 "delete",
 "shutdown",
 "system",
 "execute",
 "eval"
];

export function securityCheck(input){

 for(const word of blocked){

  if(input.toLowerCase().includes(word)){
   return false;
  }

 }

 return true;
}
