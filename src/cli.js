#!/usr/bin/env node

import getBracket from "./index.js";
import util from "util";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const execute = async () => {
	const argv = yargs(hideBin(process.argv)).option("women", {
		alias: "w",
		describe: "a flag for getting the NCAAW Bracketology",
		boolean: true,
	}).argv;
	console.log(
		JSON.stringify(await getBracket({ women: argv.w }))
	);
};

execute();
