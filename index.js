import readline from "readline";
import { AxivaraCore } from "./src/core/axivaraCore.js";
import { config } from "./config/config.js";

const ai = new AxivaraCore(config);

ai.start();

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

function chat(){

 rl.question("You: ", (input)=>{

  const response = ai.process(input);

  console.log("Axivara:",response);

  chat();

 });

}

chat();
