'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

     app.route('/tampil/:id')
        .get(jsonku.tampilsemuaberdasarkanid);

    app.route('/tampil')
        .get(jsonku.tampilsemuasparepart);

} 