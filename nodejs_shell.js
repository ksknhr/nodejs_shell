const path = require('path');
const Max = require('max-api');

const { exec } = require('child_process');

Max.post(`Loaded the ${path.basename(__filename)} script`);

Max.addHandler("echo", (msg) => {
	exec(msg, (err, stdout, stderr) => {
		if (err) {
		  Max.post(`stderr: ${stderr}`);
		  return
		}
		Max.post(`stdout: ${stdout}`);
	  }
	)
});




