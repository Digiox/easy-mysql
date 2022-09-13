#! /usr/bin/env node

var shell = require("shelljs");
const composeFile = path.resolve(__dirname, "../docker-compose.yml");
shell.exec("docker compose -f " + composeFile + " down");
