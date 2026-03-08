import fs from "fs";

export function lookupKnowledge(file,key){

 const knowledge = JSON.parse(
  fs.readFileSync(file)
 );

 return knowledge[key.toLowerCase()] || null;

}

export function updateKnowledge(file,key,value){

 const knowledge = JSON.parse(
  fs.readFileSync(file)
 );

 knowledge[key.toLowerCase()] = value;

 fs.writeFileSync(
  file,
  JSON.stringify(knowledge,null,2)
 );

   }
