Ext.define('GridPrototype.view.AddLoanWindow', {
    submitUrl: 'https://www.google.com/addLoan?',
    extend: 'Ext.window.Window',
    height: 180,
    minHeight: 100,
    minWidth: 200,
    width: 300,
    title: 'Выдать займ',
    closable: true,
    items: [{
        xtype: 'form',
        layout: 'form',
        padding: '10px',
        border: false,
        ariaLabel: 'Введите сумму займа',
        items: [{
            xtype: 'numberfield',
            name: 'loanAmount',
            minValue: 10000,
            maxValue: 1000000,
            allowDecimals: true,
            decimalPrecision: 1,
            hideTrigger: true,
            allowBlank: false,
            fieldLabel: 'Сумма займа'
        }]
    }],
    dockedItems: {
        dock: 'bottom',
        border: false,
        padding: '10px',
        layout: 'fit',
        items: [
            {
                xtype: 'button',
                text: 'Сохранить',
                handler: function(btn) {
                    var win = btn.up('window'),
                        form = win.down('form'),
                        values = form.getForm().getValues(),
                        url = win.submitUrl;

                    if (form.isValid() == false) {
                        Ext.Msg.show({
                            title:'Ошибка заполнения формы',
                            message: 'Данные заполнены некорректно. Повторите попытку.',
                            icon: Ext.Msg.WARNING,
                            buttons: Ext.Msg.OK
                        });

                        return; //
                    }

                    // if all right - try to send request
                    Ext.iterate(values, function(index, item) {
                        url += index + '=' + item;
                    });

                    Ext.Msg.show({
                        title:'Запрос успешно отправлен',
                        message: 'Запрос ' + url + ' успешно отправлен на сервер',
                        buttons: Ext.Msg.OK
                    });

                    btn.up('window').close();
                }
            }
        ]
    }
});
