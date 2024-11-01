const core = require('@actions/core');
const child_process = require('child_process');

console.log(systemSync('pwd'));
try {
  // `who-to-greet` input defined in action metadata file
  const dockerImage = core.getInput('docker-image');
  const imagePath = core.getInput('save-path');

  //run cmd to build docker image
  const cmd = `apptainer build ${imagePath} ${dockerImage}`;
  child_process.execSync(cmd);

  // set the output to the path of the file
  core.setOutput("image-path", imagePath);

} catch (error) {
  core.setFailed(error.message);
}