const core = require('@actions/core');

try {
    const nameToGreet = core.getInput('who-to-greet');
    console.log(`Hello ${nameToGreet}!`);
    const number = Math.floor(Math.random()*1000);
    core.setOutput("random-number", number);
} catch (error) {
    core.setFailed(error.message);
}
