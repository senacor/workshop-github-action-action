const core = require('@actions/core');
const random = require('random');

try {
    const nameToGreet = core.getInput('who-to-greet');
    console.log(`Hello ${nameToGreet}!`);
    const number = random.int((min = 0), (max = 1000))
    core.setOutput("random-number", number);
} catch (error) {
    core.setFailed(error.message);
}
