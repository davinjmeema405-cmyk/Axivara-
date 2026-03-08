import fs from "fs";

export function loadMemory(file){
 return JSON.parse(fs.readFileSync(file));
}

export function saveMemory(file,data){
 fs.writeFileSync(file,JSON.stringify(data,null,2));
}

export function addMemory(file,input,response){

 const memory = loadMemory(file);

 memory.push({
  input,
  response,
  time: Date.now()
 });

 saveMemory(file,memory);
}
