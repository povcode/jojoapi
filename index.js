const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
 
// parse application/json
app.use(bodyParser.json());
 
//create database connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'jojorestful_api'
});
 
//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});
 
//tampilkan semua data keseluruhan folder dan document
app.get('/api/document_service',(req, res) => {
    let sql = "SELECT id, name, type, is_public, owner_id, share, timestamp, company_id FROM folder order by root_id desc";
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
  });
 

//tampilkan data folder/document berdasarkan id
app.get('/api/document-service/document/:folderid',(req, res) => {
    let sql = "SELECT * FROM folder WHERE id="+req.params.folderid;
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
  });
 
//Tambahkan data document baru
app.post('/api/document-service/document',(req, res) => {
    let data = {id: req.body.id, name: req.body.name, type: "document", is_public:"true", owner_id:"23", share:"[123,232,4333]", company_id:"23"};
    let sql = "INSERT INTO folder SET ?";
    let query = conn.query(sql, data,(err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results,data}));
    });
  });
 
//Tambahkan data folder baru
  app.post('/api/document-service/folder',(req, res) => {
    let data = {id: req.body.id, name: req.body.name, type: "folder", is_public:"true", owner_id:"23", share:"[123,232,4333]", company_id:"23"};
    let sql = "INSERT INTO folder SET ?";
    let query = conn.query(sql, data,(err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results,data}));
    });
  });
//Edit data document berdasarkan id
app.put('/api/document-service/document/:docid',(req, res) => {
    let sql = "UPDATE folder SET name='"+req.body.name+"' WHERE type='document' AND id="+req.params.docid;
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
  });
  
  
//Edit data folder berdasarkan id
app.put('/api/document-service/folder/:folderid',(req, res) => {
    let sql = "UPDATE folder SET name='"+req.body.name+"' WHERE type='folder' AND id="+req.params.folderid;
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
  });
 
//Delete data document berdasarkan id
  app.delete('/api/document-service/document/:id',(req, res) => {
    let sql = "DELETE FROM folder WHERE type='document' AND  id="+req.params.id+"";
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
  });
  
//Delete data folder berdasarkan id
  app.delete('/api/document-service/folder/:folderid',(req, res) => {
    let sql = "DELETE FROM folder WHERE type='folder' AND id="+req.params.folderid+"";
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
  });

//Server listening
app.listen(3000,() =>{
  console.log('Server started on port 3000...');
});