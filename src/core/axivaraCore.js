import { addMemory } from "../modules/memory.js";
import { lookupKnowledge } from "../modules/knowledge.js";
import { learn } from "../modules/learning.js";
import { securityCheck } from "../modules/security.js";if(!securityCheck(input)){
 return "Blocked by security policy.";
}const learning = learn(input,this.config.knowledgeFile);

if(learning){
 return learning;
}
