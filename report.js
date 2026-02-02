/* 
Build a backend app using Node and Express to manage student records without using any database.
Student data must be stored in a local JSON or txt file using the fs module.
*/
/*
Implement RESTful APIs using Express.js
Perform CRUD operations without a database
Use fs module for file handling
id name email course
*/

import fs from "fs";

import express from 'express'

// import { v1 as uuidv1 } from 'uuid';

const app = express();

app.use(express.json());

// const data = fs.readFile("students.json", 'utf-8',(err,data)=>{
//     if(err) {
//         console.log("Error");
//         // return;
//     }
// console.log(data)

// });

const stream = fs.createReadStream("students.json",'utf-8');

// let students = [{}];

// let students = stream.read();

function updatedFile() {

        const newstream = fs.createWriteStream("students_updated.json",[{}]);

        let studJson = JSON.stringify(students);

        newstream.write(studJson);

        students = JSON.parse(studJson);

}

let students = [{}];

// let i =0;

stream.on('data', (chunk)=>{
    // console.log(typeof chunk)
    students = JSON.parse(chunk);
    // console.log(typeof students)
});

// stream.on('data', (students)=>{
    // console.log(chunk)
    // students = chunk;

    app.post("/students",(req,res)=>{
    const newStudent = req.body;
    students.push(newStudent);

        // fs.writeFile("students_updated.json",students);

    // i++;

    // let filename = "sess:" + uuidv1() + "_iter:"+i+ ".json";

    // console.log(filename);

    // const newstream = fs.createWriteStream(filename,[{}]);

    updatedFile();

        // const newstream = fs.createWriteStream("students_updated.json",[{}]);

        // let studJson = JSON.stringify(students);

        // newstream.write(studJson);

        // students = JSON.parse(studJson)

    res.send('User added')
    console.log('User added')
})

app.get("/students",(req,res)=>{

    // console.log(typeof students);

    // i++;

    // let filename = "sess:" + uuidv1() + "_iter:"+i+ ".json";

    // console.log(filename);

    // const newstream = fs.createWriteStream(filename,[{}]);

    // const newstream = fs.createWriteStream("students_updated.json",[{}]);

    // let studJson = JSON.stringify(students);

    // // fs.writeFile("students_updated.json",studJson)
    //     newstream.write(studJson);

    //     students = JSON.parse(studJson)

        // fs.writeFile("students_updated.json",students);

    // const stream2 = fs.createWriteStream("students_updated.json");

    updatedFile();

    res.json(students);
    console.log(students)
})

app.get('/students/:id',(req,res)=>{
    const student = students.find(i => i.id == req.params.id);

    // console.log(typeof students);

        // fs.writeFile("students_updated.json",students);

    // i++;

    // let filename = "sess:" + uuidv1() + "_iter:"+i+ ".json";

    // console.log(filename);

    // const newstream = fs.createWriteStream(filename,[{}]);

    updatedFile();

        // const newstream = fs.createWriteStream("students_updated.json",[{}]);

        // let studJson = JSON.stringify(students);

        // newstream.write(studJson);

        // students = JSON.parse(studJson)

    res.json(student);
    console.log(student)
})

app.put("/students/:id", (req,res)=> {
    const id = req.params.id;

    // let jsonObj = JSON.stringify(students)

    students = students.map(s => s.id == id ? {
        // ...s,
        // id: req.body.id,
        // name: req.body.name,
        // email: req.body.email,
        // course: req.body.course
        ...req.body
    } : s)

    // students = JSON.parse(jsonObj)

        // fs.writeFile("students_updated.json",students);

    // i++;

    // let filename = "sess:" + uuidv1() + "_iter:"+i+ ".json";

    // console.log(filename);

    // const newstream = fs.createWriteStream(filename,[{}]);

    updatedFile();

        // const newstream = fs.createWriteStream("students_updated.json",[{}]);

        // let studJson = JSON.stringify(students);

        // newstream.write(studJson);

        // students = JSON.parse(studJson)

    res.send("User updated")
    console.log("User updated")

})

app.delete("/students/:id", (req,res) => {
    students = students.filter(s => s.id != req.params.id)

        // fs.writeFile("students_updated.json",students);

    // i++;

    // let filename = "sess:" + uuidv1() + "_iter:"+i+ ".json";

    // console.log(filename);

    // const newstream = fs.createWriteStream(filename,[{}]);

    updatedFile();

        // const newstream = fs.createWriteStream("students_updated.json",[{}]);

        // let studJson = JSON.stringify(students);

        // newstream.write(studJson);

        // students = JSON.parse(studJson)

    res.send("User deleted")
    console.log("User deleted")
})

app.patch("/students/:id", (req,res)=> {
    const id = req.params.id;

    students = students.map(s => s.id == id ? {
        ...s,
        ...req.body
    } : s)

        // fs.writeFile("students_updated.json",students);

    // i++;

    // let filename = "sess:" + uuidv1() + "_iter:"+i+ ".json";

    // console.log(filename);

    // const newstream = fs.createWriteStream(filename,[{}]);

    updatedFile();

        // const newstream = fs.createWriteStream("students_updated.json",[{}]);

        // let studJson = JSON.stringify(students);

        // newstream.write(studJson);

        // students = JSON.parse(studJson)

    res.send("User patched")
    console.log("User patched")
});

app.listen(8000, ()=>{
    console.log("Server is running")
});

// });

// [{"id": 1, "name": "Uzar", "email": "uzar123@gmail.com", "course": "mbbs"},{"id": 2, "name": "Frie", "email": "frie.st@hotmail.com", "course": "mba"},{"id": 3, "name": "Lars", "email": "notlars@yahoo.com", "course": "bba"},{ "id": 4, "name": "Yarx", "email": "yar.x@icloud.com", "course": "btech"},{"id": 5, "name": "Nain", "email": "nain1995@gmail.com", "course": "phd"}]

// after / is query and after ? is parameter
