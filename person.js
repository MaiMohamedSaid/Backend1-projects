
  const fs = require("fs")

  const addperson = (fname , lname , city , age , id , course1,
    course2,
    course3,
    course4,
    course5,
    course6) => {
       const allData = loadData()
       console.log(course1);
const courses=[course1,course2,course3,course4,course5,course6]
const total=courses.reduce((prev,next)=>prev+next,0)
const avg= ( (total/600)*100).toFixed(2)
        const duplicatedData = allData.filter ((obj) => {
            return obj.id === id
        })
        console.log(duplicatedData)

        if (duplicatedData.length == 0) {
        allData.push ({
            id : id,
            fname : fname,
            lname,
            city : city,
            age : age,
            Gradecourses:courses,
            total:total,
            avg:`${avg}%`
            
        })
// course1=20 course2=90 course3=90 course4=70 course5=100 course6=80
        saveAllData(allData)
    } else {
        console.log("ERROR DUPLICATED ID")
    }
  }

//   /////////////////////////////////////////////////////////////////
const loadData = () => {
   
    try {
        const dataJson = fs.readFileSync ("person.json").toString()
        return JSON.parse (dataJson)
    } catch {
            return []
    }

  }
// ///////////////////////////////////////////////////////////////////

 
const saveAllData = (allData) => {
    const saveAllDataJson = JSON.stringify(allData) 
    fs.writeFileSync("person.json" , saveAllDataJson)
}
// /////////////////////////////////////////////////////////////////////

 const deleteperson = (id) => {
        const allData = loadData()

        const dataToKeep = allData.filter ((obj) => {
             return obj.id !== id 
        })
        // console.log(dataToKeep)
        saveAllData(dataToKeep)
 }

// //////////////////////////////////////////////////////////////////
      
        const readData = (id) => {
            const allData = loadData()

            const itemNeeded = allData.find((obj) => {
                 return obj.id == id 
            })
            console.log(itemNeeded)

        }
// //////////////////////////////////////////////////////////////////

    const listData = () => {
        const allData = loadData()

        allData.forEach ((obj) => {
            console.log(obj.fname , obj.city, obj.age)
        })
    }
     

module.exports = {
    addperson,
    deleteperson, 
    readData,
    listData,

}

