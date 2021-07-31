const { readFile, writeFile } = require("fs").promises;
// const readFilePromise = util.promisify(readFile);
// const wirteFilePromise = util.promisify(writeFile);

// // Promise setup
// const getText = (path) => {
//   return new Promise((reslove, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         reslove(data);
//       }
//     });
//   });
// };

//getText('./content/first.txt').then(result => console.log(result)).catch(err => console.log(err));

//async await setup
const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");
    await writeFile(
      "./content/result-sync.txt",
      `this is awesome :  ${first} ${second}`
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();
