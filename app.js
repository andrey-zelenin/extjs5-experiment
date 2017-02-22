Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    controllers : [
        'LoansHistoryGridController'
    ],
    stores: [
        'LoansHistoryStore'
    ],
    views: [
        'LoansHistoryGrid'
    ],
    name: 'GridPrototype',

    launch: function() {
        Ext.create('GridPrototype.view.LoansHistoryGrid',
            {
                layout: 'fit',
                renderTo: Ext.get('content')
            }
        );
    }
});
