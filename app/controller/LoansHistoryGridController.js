Ext.define('GridPrototype.controller.LoansHistoryGridController', {
    extend: 'Ext.app.Controller',

    init: function()
    {
        this.control({
            'actioncolumn': {
                itemDelete: this.onItemDelete,
                itemPrint: this.onItemPrint
            },
            'button': {
                openAddLoanForm: this.onAddLoanForm,
                openLoanForm: this.onLoanForm,
                openInfoLoanForm: this.onInfoLoanForm
            }
        });
    },

    onItemDelete : function(view, rowIndex, colIndex, item, e, record)
    {
        var store = view.getStore(),
            sm = view.getSelectionModel(),
            itemNum = rowIndex + 1;
        Ext.Msg.show({
            title: 'Удалить запись?',
            msg: 'Вы действительно хотите удалить запись №' + itemNum + '?',
            buttons: Ext.Msg.YESNO,
            fn: function(response) {
                if (response === 'yes') {
                    store.remove(record);
                    if (store.getCount() > 0) {
                        sm.select(0);
                    }
                }
            }
        });
    },

    onItemPrint: function()
    {
        window.open("https://www.google.com/", "Google");
    },

    onAddLoanForm: function()
    {
        var win = Ext.create('GridPrototype.view.AddLoanWindow');
        win.show();
    },

    onLoanForm: function()
    {
        var win = Ext.create('GridPrototype.view.LoanWindow');
        win.show();
    },

    onInfoLoanForm: function()
    {
        var win = Ext.create('GridPrototype.view.InfoLoanWindow');
        win.show();
    }
});
