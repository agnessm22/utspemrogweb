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


    app.route('/tambahmontir')
        .post(jsonku.tambahDataMontir);

    app.route('/tambahsparepart')
        .post(jsonku.tambahDataSparepart);

    app.route('/tambahdatauser')
        .post(jsonku.tambahuser);

}

