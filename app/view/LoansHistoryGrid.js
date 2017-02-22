Ext.define('GridPrototype.view.LoansHistoryGrid', {
    extend: 'Ext.grid.Panel',
    autoHeight: true,
    width: 800,
    title: 'История займов по заемщику',
    store: 'LoansHistoryStore',
    dockedItems: [{
        dock: 'top',
        xtype: 'toolbar',
        items: [
            {
                tooltip: 'Выдать займ',
                text: 'Выдать займ',
                handler: function() {
                    this.fireEvent('openAddLoanForm');
                }
            }, {
                tooltip: 'Просмотр займа',
                text: 'Просмотр займа',
                handler: function() {
                    this.fireEvent('openLoanForm');
                }
            }, {
                tooltip: 'Информация',
                text: 'Информация',
                handler: function() {
                    this.fireEvent('openInfoLoanForm');
                }
            }
        ]
    }],

    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            columns: [
                {
                    xtype: 'datecolumn',
                    dataIndex: 'loanDate',
                    width: 140,
                    text: 'Дата',
                    renderer: Ext.util.Format.dateRenderer('d.m.Y'),
                    flex: 1
                }, {
                    xtype: 'templatecolumn',
                    width: 75,
                    tpl: '{loanLimit} дн.',
                    text: 'Срок'
                }, {
                    xtype: 'datecolumn',
                    width: 130,
                    dataIndex: 'loanPayDate',
                    renderer: Ext.util.Format.dateRenderer('d.m.Y'),
                    text: 'Дата погашения'
                }, {
                    xtype: 'numbercolumn',
                    width: 130,
                    dataIndex: 'loanAmount',
                    text: 'Тело займа'
                }, {
                    xtype: 'numbercolumn',
                    width: 70,
                    dataIndex: 'loanPer',
                    renderer: Ext.util.Format.numberRenderer('0'),
                    text: '%'
                }, {
                    xtype: 'numbercolumn',
                    width: 130,
                    dataIndex: 'loanFullAmount',
                    text: 'Сумма + %'
                }, {
                    xtype: 'gridcolumn',
                    width: 85,
                    dataIndex: 'loanStatus',
                    text: 'Статус'
                }, {
                    xtype: 'actioncolumn',
                    width: 80,
                    align: 'center',
                    items: [
                        {
                            iconCls: 'icon-delete',
                            tooltip: 'Удалить запись',
                            handler: function(view, rowIndex, colIndex, item, e, record, row) {
                                this.fireEvent('itemDelete', view, rowIndex, colIndex, item, e, record, row);
                            }
                        }, '->', {
                            iconCls: 'icon-print',
                            tooltip: 'Распечатать',
                            handler: function() {
                                this.fireEvent('itemPrint');
                            }
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }
});
