#!/usr/bin/env node

// Your CLI code here
import minimist from 'minimist';
import { rps,playRps, helpRPS, rulesRPS } from "../lib/rpsls.js";
const argv = minimist(process.argv.slice(2));

if (argv.h || argv.help) {
  helpRPS();
  process.exit();
}

if (argv.r || argv.rules) {
  rulesRPS();
  process.exit();
}

const shot = argv._[0] || 'rock';
if (shot) {
  const result =  rps(shot.toLowerCase());
	if (!(typeof result == "undefined")) {
		console.log(JSON.stringify(result));
		process.exit();
	}
} else {
  console.error('Error: Missing required argument SHOT.');
  helpRPS();
  process.exit(1);
}
