import fs from "fs";
import { addMemory } from "../modules/memory.js";
import { learn } from "../modules/learning.js";
import { securityCheck } from "../modules/security.js";

export class AxivaraCore {

 constructor(config){

  this.config = config;

  this.knowledge = JSON.parse(
   fs.readFileSync(this.config.knowledgeFile)
  );

 }

 start(){
  console.log("Axivara started.");
 }

 process(input){

  if(!securityCheck(input)){
   return "Blocked by security policy.";
  }

  const learning = learn(input,this.config.knowledgeFile);

  if(learning){

   this.knowledge = JSON.parse(
    fs.readFileSync(this.config.knowledgeFile)
   );

   return learning;

  }

  const lower = input.toLowerCase();

  let response;

  if(this.knowledge[lower]){
   response = this.knowledge[lower];
  }else{
   response = "I do not know that yet.";
  }

  addMemory(this.config.memoryFile,input,response);

  return response;

 }

}
