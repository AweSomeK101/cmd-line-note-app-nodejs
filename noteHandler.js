const fs = require("fs");

function getFile() {
  try {
    const file = fs.readFileSync("./notes.json", { encoding: "utf-8" });
    return JSON.parse(file);
  } catch (error) {
    return [];
  }
}

function setFile(data) {
  fs.writeFileSync("./notes.json", JSON.stringify(data));
}

function addNote(title, body) {
  const data = getFile();
  if (data.some((note) => note.title === title)) {
    console.log("note title already exists");
  } else {
    data.push({ title, body });
    setFile(data);
  }
}

function removeNote(title) {
  const data = getFile();
  let flag = false;
  for (let i = 0; i < data.length; i++) {
    if (data[i].title === title) {
      flag = true;
      data.splice(i, 1);
      break;
    }
  }
  if (flag) {
    setFile(data);
    console.log("removed Note");
  } else {
    console.log("No note found");
  }
}

function viewNote(title) {
  const data = getFile();
  var flag = false;
  data.forEach((note) => {
    if (note.title === title) {
      console.log(note.title);
      console.log(note.body);
      flag = true;
    }
  });
  if (!flag) console.log("No note found");
}

function listNote() {
    const data = getFile();
    data.forEach((note, index) => console.log(index, note.title))
}

module.exports = {
  addNote,
  removeNote,
  viewNote,
  listNote,
};
