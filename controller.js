'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res){
    response.ok("UTS pemrograman website ku berjalan yey!",res)
};

//menampilkan semua data tabel sparepart berdasarkan id
exports.tampilsemuaberdasarkanid = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM t_sparepart WHERE id_sparepart = ?', [id],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok(rows,res)
        }
    });
};

//menampilkan semua data tabel montir berdasarkan id
exports.tampilsemuaberdasarkanid = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM t_montir WHERE id_montir = ?', [id],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok(rows,res)
        }
    });
};

//menampilkan semua data sparepart
exports.tampilsemuasparepart = function(req,res){
    connection.query('SELECT * FROM t_sparepart', function(error, rows, fields){
        if(error){
            connection.log(error);
        }else {
            response.ok(rows,res)
        }
    });
}; 

//menampilkan semua data montir
exports.tampilsemuamontir = function(req,res){
    connection.query('SELECT * FROM t_montir', function(error, rows, fields){
        if(error){
            connection.log(error);
        }else {
            response.ok(rows,res)
        }
    });
}; 

//menambahkan data montir di tabel montir
exports.tambahDataMontir = function(req, res) {
    var id_montir=req.body.id_montir;
    var Nama_montir=req.body.Nama_montir;
    var harga_perjam = req.body.harga_perjam;

    connection.query('INSERT INTO t_montir (id_montir, Nama_montir,harga_perjam) VALUES (?,?,?)',
     [id_montir,Nama_montir,harga_perjam],
     function(error,rows,fields)
     {
         if(error){
             connection.log(error);
         }else {
             response.ok("berhasil menambahkan data montir",res)
         }
     });
};

//menambahkan data sparepart di tabel sparepart
exports.tambahDataSparepart = function(req, res) {
    var id_sparepart=req.body.id_sparepart;
    var nama_sparepart=req.body.nama_sparepart;
    var harga_sparepart = req.body.harga_sparepart;
    var satuan = req.body.satuan;

    connection.query('INSERT INTO t_sparepart (id_sparepart, nama_sparepart,harga_sparepart, satuan) VALUES (?,?,?,?)',
     [id_sparepart,nama_sparepart,harga_sparepart,satuan],
     function(error,rows,fields)
     {
         if(error){
             connection.log(error);
         }else {
             response.ok("berhasil menambahkan data sparepart",res)
         }
     });
};

//menambahkan data user di tabel user
exports.tambahuser = function(req, res) {
    var id_user=req.body.id_user;
    var nama_user=req.body.nama_user;
    var email = req.body.email;
    var password = req.body.password;
    var role = req.body.role;
    var level = req.body.level;

    connection.query('INSERT INTO t_user (id_user, nama_user,email, password,role,level) VALUES (?,?,?,?,?,?)',
     [id_user,nama_user,email,password,role,level],
     function(error,rows,fields)
     {
         if(error){
             connection.log(error);
         }else {
             response.ok("berhasil menambahkan data user",res)
         }
     });
};
