import ora from "ora";
import { Chalk } from "chalk";
import enquirer from "enquirer";

const { prompt } = enquirer;

const chalk = new Chalk({ level: 2 });
const purple = "#7145D6";
const pink = "#E91E63";
const yellow = "#F2ED07";
const gray = "#A6A6A6";
const black = "#0D0D0D";
const pinkify = (content) => chalk.hex(pink).bold(content);
const purpleify = (content) => chalk.hex(purple).bold(content);
const yellowify = (content) => chalk.hex(yellow).bold(content);
const grayify = (content) => chalk.hex(gray).bold(content);
const blackify = (content) => chalk.hex(black).bold(content);

const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const sleep = async (ms) => await timeout(ms);

const foo = async () => {
  // console.log(`${chalk.hex("#7145D6").bold("")}`)

  let spinner = ora("Starting...").start();
  // await sleep(1500);
  spinner.stop();
  spinner = ora("Checking status...").start();
  // await sleep(2500);
  spinner.stop();

  console.log(
    `${grayify("⌈‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾⌉")}`
  );
  console.log(`${grayify("︳")}\t\t\t\t\t\t\t${grayify("|")}`);
  console.log(
    `${grayify("︳")}${grayify(
      "   Ustedes atrásense; no hay pedo, no hay bronca\t"
    )}${grayify("|")}`
  );
  console.log(
    `${grayify("︳")}${grayify("\t\t    🎉 Paúl 2023 🎉 ")}\t\t\t${grayify(
      "|"
    )}`
  );
  console.log(`${grayify("︳")}\t\t\t\t\t\t\t${grayify("|")}`);
  console.log(
    `${grayify("⌊_______________________________________________________⌋")}`
  );
};

foo();
