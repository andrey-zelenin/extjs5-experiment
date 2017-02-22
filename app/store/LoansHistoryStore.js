Ext.define('GridPrototype.store.LoansHistoryStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.proxy.Memory',
        'Ext.data.reader.Array',
        'Ext.data.Field'
    ],

    model: 'GridPrototype.model.LoansHistoryModel',

    constructor: function(cfg) {
        var me = this,
            data = [
                [
                    '06/01/2007',
                    20,
                    '06/21/2007',
                    90000,
                    10,
                    99000,
                    'погашен'
                ], [
                    '07/01/2007',
                    30,
                    '07/31/2007',
                    10000,
                    10,
                    11000,
                    'погашен'
                ], [
                    '01/01/2009',
                    30,
                    '01/31/2009',
                    90000,
                    10,
                    99000,
                    'погашен'
                ], [
                    '03/01/2010',
                    30,
                    '03/31/2010',
                    80000,
                    10,
                    88000,
                    'погашен'
                ], [
                    '01/01/2015',
                    30,
                    '01/31/2015',
                    100000,
                    10,
                    110000,
                    'выдан'
                ], [
                    '05/01/2015',
                    30,
                    '05/31/2015',
                    200000,
                    10,
                    220000,
                    'выдан'
                ], [
                    '10/01/2014',
                    30,
                    '10/31/2014',
                    90000,
                    10,
                    99000,
                    'погашен'
                ], [
                    '03/01/2015',
                    30,
                    '03/31/2015',
                    200000,
                    10,
                    220000,
                    'выдан'
                ], [
                    '02/01/2010',
                    30,
                    '02/28/2010',
                    80000,
                    27,
                    86000,
                    'погашен'
                ], [
                    '08/01/2011',
                    30,
                    '08/31/2011',
                    30000,
                    10,
                    33000,
                    'погашен'
                ], [
                    '12/01/2014',
                    30,
                    '12/12/2014',
                    100000,
                    10,
                    110000,
                    'выдан'
                ], [
                    '09/01/2013',
                    29,
                    '09/30/2013',
                    300000,
                    10,
                    330000,
                    'выдан'
                ]
            ];
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            storeId: 'LoansHistoryStore',
            data: data,
            proxy: {
                type: 'memory',
                reader: {
                    type: 'array'
                }
            },
            sortInfo: {
                property: 'loanDate',
                direction: 'DESC'
            }
        }, cfg)]);
    }
});
