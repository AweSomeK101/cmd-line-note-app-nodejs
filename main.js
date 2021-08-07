const yargs = require("yargs");
const {addNote, removeNote, viewNote, listNote} = require("./noteHandler");

yargs.command({
    command: "add",
    describe: "add a new note",
    builder: {
        title: {
            type: "string",
            describe: "Note Title",
            demandOption: true 
        },
        body: {
            type: "string",
            demandOption: true,
            describe: "Note Body"
        }
    },
    handler: argv => addNote(argv.title, argv.body)
})

yargs.command({
    command: "remove",
    describe: "delete a note",
    builder: {
        title: {
            type: "string",
            describe: "Note Title",
            demandOption: true 
        },
    },
    handler: argv => removeNote(argv.title)
})

yargs.command({
    command: "view",
    describe: "view a note",
    builder: {
        title: {
            type: "string",
            describe: "Note Title",
            demandOption: true 
        },
    },
    handler: argv => viewNote(argv.title)
})

yargs.command({
    command: "list",
    describe: "list the notes",
    handler: () => listNote()
})

yargs.parse()