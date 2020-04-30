let componentsFile = require.context("./", false, /\.vue$/);
let compArr = [];
componentsFile.keys().forEach(fileName => {
  let comp = componentsFile(fileName);
  compArr[fileName.replace(/^\.\/(.*)\.\w+$/, "$1")] = comp.default;
});
export default compArr;
