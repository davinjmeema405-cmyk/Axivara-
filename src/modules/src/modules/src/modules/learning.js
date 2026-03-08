import { updateKnowledge } from "./knowledge.js";

export function learn(input,knowledgeFile){

 if(!input.startsWith("teach:")) return null;

 const content = input.replace("teach:","").trim();

 const parts = content.split("=");

 if(parts.length !== 2){
  return "Invalid teaching format.";
 }

 const key = parts[0].trim();
 const value = parts[1].trim();

 updateKnowledge(knowledgeFile,key,value);

 return `Learned: ${key}`;
}
