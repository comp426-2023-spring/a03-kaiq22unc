#!/usr/bin/env node

// Your CLI code here
import minimist from 'minimist';
import { rpsls, helpRPSLS, rulesRPSLS } from "../lib/rpsls.js";
const argv = minimist(process.argv.slice(2));

if (argv.h || argv.help) {
  helpRPSLS();
  process.exit();
}

if (argv.r || argv.rules) {
  rulesRPSLS();
  process.exit();
}

const shot = argv._[0];
	if (!shot) {
		const result = { "player": "rock" };
		console.log(JSON.stringify(result));
		process.exit();
	}
if (shot) {
  const result = rpsls(shot.toLowerCase());
  	if (!(typeof result == "undefined")) {
		console.log(JSON.stringify(result));
		process.exit();
	}
} else {
  console.error('Error: Missing required argument SHOT.');
  helpRPSLS();
  process.exit(1);
}
