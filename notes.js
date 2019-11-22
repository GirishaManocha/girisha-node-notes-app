const fs = require('fs')
const chalk = require('chalk')

const getNotes =()=>{
    return('"your notes......."')
} ;

const addNote =(title,body)=>{
    const notes = loadNotes()

    //const duplicateNotes = notes.filter((note)=> note.title === title)

    const duplicateNote = notes.find((note)=> note.title === title)

    // const duplicateNotes = notes.filter(function(note){
    //     return note.title === title
    // })

 if(!duplicateNote){       
    notes.push({
    title:title,
    body:body
    })
    saveNotes(notes)
    console.log(chalk.green.inverse('new note added'))
 }else{
    console.log(chalk.red.inverse('title taken'))
 }
  
}

const removeNotes =(title)=>{
    const notes = loadNotes()
    const NotesToKeep = notes.filter((note)=> note.title !== title)
    if(notes.length >NotesToKeep.length){
        console.log(chalk.green.inverse('note removed!'))
    }else {
        console.log(chalk.red.inverse('no note found'))
    }
    saveNotes(NotesToKeep)
 }

const listNotes =()=>{
    const notes= loadNotes()
    notes.forEach((note) => {
        console.log(note.title)
    })
    console.log(chalk.green('your notes'))

}

const readNotes=(title)=>{
   const notes = loadNotes()
   const note = notes.find((note)=> note.title === title)
   if(note){
    console.log(chalk.inverse(note.title))
    console.log(note.body)
   }else{
       console.log(chalk.red.inverse('no node was found'))

   }
}



const saveNotes =(notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes =()=>{
    try{
    const dataBuffer =fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
    }catch(e){
        return[]
        }
}






module.exports = {
    getNotes:getNotes,
    removeNotes: removeNotes,
    addNote:addNote,
    readNotes:readNotes,
    listNotes:listNotes
}