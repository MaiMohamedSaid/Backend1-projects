
 const yargs = require("yargs")
  
const data = require ("./person")

yargs.command({
    command : "add",
    describe: "to add an item",
    builder: {
        fname : {
            describe: "adding the first name ",
            demandOption: true,
            type: "string"
        },
        lname : {
            describe: "adding the last name ",
            demandOption: true,
            type: "string"
        },
        course1: {
          describe: "to add course 1 score",
          demandOption: true,
          type: "number",
        },
        course2: {
          describe: "to add course 2 score",
          demandOption: true,
          type: "number",
        },
        course3: {
          describe: "to add course 3 score",
          demandOption: true,
          type: "number",
        },
        course4: {
          describe: "to add course 4 score",
          demandOption: true,
          type: "number",
        },
        course5: {
          describe: "to add course 5 score",
          demandOption: true,
          type: "number",
        },
        course6: {
          describe: "to add course 6 score",
          demandOption: true,
          type: "number",
        },
      },
      handler: (x) => {
        data.addperson(
          x.id,
          x.fname,
          x.lname,
          x.age,
          x.city,
          x.course1,
          x.course2,
          x.course3,
          x.course4,
          x.course5,
          x.course6
        );
      },
 })

 yargs.command({
    command : "delete",
    describe: "to delete an item",
    handler: (x)=> {
        data.deleteperson(x.id)
    }
 })


 yargs.command ({
    command : "read",
    describe : "to read data",
    builder : {
        id : {
            describe : "this is in read command",
            demandOption : true,
            type : "string"
        }
    },
    handler : (x)=> {
        data.readData (x.id)
    }
 })


 yargs.command ({
    command :"list",
    describe : "list data",
    handler : ()=>{
        data.listData()
    }
 })
 
//  console.log(yargs.argv)
yargs.parse() 
   
  



