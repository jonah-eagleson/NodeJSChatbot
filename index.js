import openai from './config/open-ai.js';
import readlineSync from 'readline-sync';
import colors from 'colors';

async function main() {
    console.log(colors.bold.green("Welcome to the chatbot"));
    console.log(colors.bold.green('You can start chatting!'));
}

main();