const fs = require('fs')
const chalk= require('chalk')

//adding a note
const addNote = function(title,body){
 const note = loadNotes()
  const duplicateNote = note.filter(function(note){
      return note.title===title
  })
  if(duplicateNote.length===0){
    note.push({
      title: title,
      body: body
  })
   saveNote(note)
   console.log("new note has been added!") 
   }
   else{
    return console.log("title already taken!")
}
}

//Removing a note
const removeNote = function(title){
  const note = loadNotes()
  var count=0
  const newArray = note.filter(function(note){
    if(note.title===title){
      count=1
    }
    return (note.title!==title)
  })
   if(count===1){
     saveNote(newArray)
     console.log(chalk.green.inverse("the note has been deleted"))
   }else{
     console.log(chalk.red.inverse("no note with title '"+title +"'" ))
   }
}

//list notes
const listNotes = ()=>{
  console.log(chalk.inverse("...................YOUR NOTES..............."))
  const notes = loadNotes()
  notes.forEach((x) => console.log(chalk.red(x.title)))  
}

//Reading a note
const readNote=(title) => {
 const notes = loadNotes()
 notes.forEach((x)=> {
    if(x.title===title){
      console.log("HERES UR NOTE")
      console.log(x.body)
    }
 })

}
//Saving note in file
const saveNote=function(note){
  fs.writeFileSync('note.json',JSON.stringify(note)) 
 }

 //Loading all notes
 const loadNotes =function(){
   try{
     const dataBuffer = fs.readFileSync('note.json')
   const note = dataBuffer.toString()
   return JSON.parse(note)
   } catch(e){
       return []
 }
 }

 //exporting required modules
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}