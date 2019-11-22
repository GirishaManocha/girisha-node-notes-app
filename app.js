const notes = require('./notes.js')
const yargs = require('yargs')
const chalk = require('chalk')

//customize yargs versions
yargs.version('1.1.0')

//create add command
yargs.command({
    command:'add',
    describe:'add a new note',
    builder:{
        title: {
            describe:'note title',
            demandOption: true,
            type : 'string'
        },
        body:{
            describe:'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})
//create remove command
yargs.command({
    command:'remove',
    describe:'remove a note',
    builder:{
        title:{
            describe:'note titlee',
            demandOption:true,
            type:'string'
        },
        
        
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
})
//create list command
yargs.command({
    command:'list',
    describe:'list the notes',
    handler(argv){
        notes.listNotes()
    }
}) 
//create read command
yargs.command({
    command:'read',
    describe:'read a note',
    builder:{
        title:{
            describe:'note read',
            demandOption:true,
            type:'string'
        }

    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})

yargs.parse()






//add,remove,read and list

//console.log(process.argv)
//console.log(yargs.argv)
















//const command = process.argv[2]
//console.log(process.argv[3])
//if(command === 'add'){
  //  console.log(chalk.green('adding notes...'))
//}else if(command === 'remove'){
//    console.log(chalk.red('removing notes....'))
//}











//const Notes = getNotes()
//console.log(Notes)
// const chalk = require('chalk')
// console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
// console.log(chalk.red.inverse.underline('Hello world!'));
// console.log(chalk.keyword('orange')('Yay for orange colored text!'));
// console.log(chalk.rgb(123, 45, 67).bgWhite.underline('Underlined reddish color'));



// console.log(process.argv[2])







//const validator = require('validator')
//console.log(validator.isEmail('girisha@example.com'))
//console.log(validator.isEmail('example.com'))




// const add = require('./utils.js')
// const sum= add(4,8)
// console.log(sum)