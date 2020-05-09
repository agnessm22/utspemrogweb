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

//menambahkan data level di tabel level
exports.tambahDataLevel = function(req, res) {
    var id_level=req.body.id_level;
    var nama_level=req.body.nama_level;

    connection.query('INSERT INTO t_level (id_level, nama_level) VALUES (?,?)',
     [id_level,nama_level],
     function(error,rows,fields)
     {
         if(error){
             connection.log(error);
         }else {
             response.ok("berhasil menambahkan data level",res)
         }
     });
};

//menambahkan data servis di tabel servis
exports.tambahDataServis = function(req, res) {
    var id_servis=req.body.id_servis;
    var tgl_servis=req.body.tgl_servis;
    var id_user=req.body.id_user;
    var id_montir=req.body.id_montir;
    var jumlah_sparepart=req.body.jumlah_sparepart;
    var id_sparepart=req.body.id_sparepart;

    connection.query('INSERT INTO t_servis (id_servis, tgl_servis, id_user, id_montir,jumlah_sparepart, id_sparepart ) VALUES (?,?,?,?,?,?)',
     [id_servis,tgl_servis, id_user,id_montir,jumlah_sparepart,id_sparepart],
     function(error,rows,fields)
     {
         if(error){
             connection.log(error);
         }else {
             response.ok("berhasil menambahkan data servis",res)
         }
     });     
};

//mengubah data montir
exports.ubahmontir = function (req,res) {
    var id_montir=req.body.id_montir;
    var Nama_montir=req.body.Nama_montir;
    var harga_perjam=req.body.harga_perjam;

    connection.query('UPDATE t_montir SET Nama_montir=?, harga_perjam=? WHERE id_montir=?', [Nama_montir,harga_perjam,id_montir],
    function (error,rows,fields){
        if(error){
            console.log(error);
        } else {
            response.ok("berhasil ubah data montir",res)
        }
    });
};

//mengubah data sparepart
exports.ubahsparepart = function (req,res) {
    var id_sparepart=req.body.id_sparepart;
    var nama_sparepart=req.body.nama_sparepart;
    var harga_sparepart=req.body.harga_sparepart;
    var satuan=req.body.satuan;

    connection.query('UPDATE t_sparepart SET nama_sparepart=?, harga_sparepart=?, satuan=? WHERE id_sparepart=?', [nama_sparepart,harga_sparepart,satuan,id_sparepart],
    function (error,rows,fields){
        if(error){
            console.log(error);
        } else {
            response.ok("berhasil ubah data sparepart",res)
        }
    });
};

//mengubah data level
exports.ubahlevel = function (req,res) {
    var id_level=req.body.id_level;
    var nama_level=req.body.nama_level;

    connection.query('UPDATE t_level SET nama_level=? WHERE id_level=?', [nama_level,id_level],
    function (error,rows,fields){
        if(error){
            console.log(error);
        } else {
            response.ok("berhasil ubah data level",res)
        }
    });
};

//mengubah data user
exports.ubahuser = function (req,res) {
    var id_user=req.body.id_user;
    var nama_user=req.body.nama_user;
    var email=req.body.email;
    var password=req.body.password;
    var role=req.body.role;
    var level=req.body.level;

    connection.query('UPDATE t_user SET nama_user=?, email=?, password=?,role=?, level=? WHERE id_user=?', [nama_user,email,password,role,level,id_user],
    function (error,rows,fields){
        if(error){
            console.log(error);
        } else {
            response.ok("berhasil ubah data user",res)
        }
    });
};

//mengubah data servis
exports.ubahservis = function (req,res) {
    var id_servis=req.body.id_servis;
    var tgl_servis=req.body.tgl_servis;
    var id_user=req.body.id_user;
    var id_montir=req.body.id_montir;
    var jumlah_sparepart=req.body.jumlah_sparepart;
    var id_sparepart=req.body.id_sparepart;

    connection.query('UPDATE t_servis SET tgl_servis=?, id_user=?, id_montir=?, jumlah_sparepart=?, id_sparepart=? WHERE id_servis=?', [tgl_servis,id_user,id_montir,jumlah_sparepart,id_sparepart,id_servis],
    function (error,rows,fields){
        if(error){
            console.log(error);
        } else {
            response.ok("berhasil ubah data servis",res)
        }
    });
};

//menghapus data montir berdasarkan id
exports.hapusmontir=function(req,res){
    var id=req.body.id_montir;
    connection.query('DELETE FROM t_montir WHERE id_montir=?', [id],
    function(error,rows,fields){
        if(error){
            console.log(error);
        }else{
            response.ok("berhasil hapus data montir",res)
        }
    });
};

//menghapus data sparepart berdasarkan id
exports.hapussparepart=function(req,res){
    var id=req.body.id_sparepart;
    connection.query('DELETE FROM t_sparepart WHERE id_sparepart=?', [id],
    function(error,rows,fields){
        if(error){
            console.log(error);
        }else{
            response.ok("berhasil hapus data sparepart",res)
        }
    });
};

//menghapus data user berdasarkan id
exports.hapususer=function(req,res){
    var id=req.body.id_user;
    connection.query('DELETE FROM t_user WHERE id_user=?', [id],
    function(error,rows,fields){
        if(error){
            console.log(error);
        }else{
            response.ok("berhasil hapus data user",res)
        }
    });
};

//menghapus data servis berdasarkan id
exports.hapusservis=function(req,res){
    var id=req.body.id_servis;
    connection.query('DELETE FROM t_servis WHERE id_servis=?', [id],
    function(error,rows,fields){
        if(error){
            console.log(error);
        }else{
            response.ok("berhasil hapus data servis",res)
        }
    });
};