'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

     app.route('/tampil/:id')
        .get(jsonku.tampilsemuaberdasarkanid);

    app.route('/tampil')
        .get(jsonku.tampilsemuasparepart);

   app.route('/tampilmontir')
        .get(jsonku.tampilsemuamontir);
    
    app.route('/tambahmontir')
        .post(jsonku.tambahDataMontir);

<<<<<<< HEAD
    app.route('/tambahmontir')
        .post(jsonku.tambahDataMontir);

    app.route('/tambahsparepart')
        .post(jsonku.tambahDataSparepart);

}
=======
}
>>>>>>> 2b75c76f44d29f483589728aa7f730f8952d0a15
