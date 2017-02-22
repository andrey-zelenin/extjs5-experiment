Ext.define('GridPrototype.model.LoansHistoryModel', {
    extend: 'Ext.data.Model',
    
    fields: [
        {
            name: 'loanDate',
            type: 'date'
        }, {
            name: 'loanLimit'
        }, {
            name: 'loanPayDate',
            type: 'date'
        }, {
            name: 'loanAmount',
            type: 'float'
        }, {
            name: 'loanPer',
            type: 'int'
        }, {
            name: 'loanFullAmount',
            type: 'float'
        }, {
            name: 'loanStatus'
        }
    ]
});
