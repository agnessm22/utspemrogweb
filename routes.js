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

    app.route('/tambahlevel')
        .post(jsonku.tambahDataLevel);

    app.route('/tambahservis')
        .post(jsonku.tambahDataServis);

    app.route('/ubahdatamontir')
        .put(jsonku.ubahmontir);
    
    app.route('/ubahdatasparepart')
        .put(jsonku.ubahsparepart);

    app.route('/ubahdatalevel')
        .put(jsonku.ubahlevel);

    app.route('/ubahdatauser')
        .put(jsonku.ubahuser);

    app.route('/ubahdataservis')
        .put(jsonku.ubahservis);

    app.route('/hapusdatamontir')
        .delete(jsonku.hapusmontir);

}

