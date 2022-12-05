const fs = require("fs/promises");

let elvesCalories = new Map();

(async function () {
  try {
    const data = await fs.readFile("./day1/input.txt", { encoding: "utf8" });

    const result = data.split(/\n\n/).map((calPerElv) =>
      calPerElv
        .split(/\n/)
        .map((cal) => +cal)
        .reduce((totalElveCal, currCal) => totalElveCal + currCal)
    );
    console.log(Math.max(...result));
  } catch (err) {
    console.log(err);
  }
})();
