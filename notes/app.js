//const validator = require('validator')
const yargs= require('yargs')
const chalk = require('chalk')
const notes = require('./notes')

//Customizing yargs version
yargs.version('1.1.0')

// add command
yargs.command({
    command: 'add',
    describe: 'add a node',
    builder: {
        title:{
            describe:'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {           
            describe: 'Body of the note',
            demandOption:true,
            type: "string"
        }
    },
    handler: function(argv){
      notes.addNote(argv.title,argv.body)
    }

})
//Removing a node command
yargs.command({
    command: 'remove',
    describe: 'remove a node',
    builder:{
        title: {
            describe:'note title',
            demandOption:true,
            type:"string"
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title)
    }

})

//listing notes command
yargs.command({
    command: 'list',
    describe: 'listing all notes',
    handler: function(){
        notes.listNotes()
    }

})

//reading notes command
yargs.command({
    command: 'read',
    describe: 'read a note',
    builder:{
        title:{
            describe:'noteTitle',
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv){
        notes.readNote(argv.title)    
    }

})
    yargs.parse()
//      OR
//  console.log(yargs.argv)