/*************************************************
 * Copyright (c) 2015 Ansible, Inc.
 *
 * All Rights Reserved
 *************************************************/




export default ['i18n', function(i18n) {
    return {
        name: 'credentials',
        iterator: 'credential',
        selectTitle: i18n._('Add Credentials'),
        editTitle: i18n._('CREDENTIALS'),
        listTitle: i18n._('CREDENTIALS'),
        selectInstructions: "<p>Select existing credentials by clicking each credential or checking the related checkbox. When " +
            "finished, click the blue <em>Select</em> button, located bottom right.</p> <p>Create a brand new credential by clicking ",
        index: false,
        hover: true,
        emptyListText: i18n._('No Credentials Have Been Created'),

        fields: {
            name: {
                key: true,
                label: i18n._('Name'),
                columnClass: 'col-md-3 col-sm-9 col-xs-9',
                modalColumnClass: 'col-md-12',
                awToolTip: '{{credential.description | sanitize}}',
                dataPlacement: 'top'
            },
            kind: {
                label: i18n._('Kind'),
                ngBind: 'credential.kind',
                excludeModal: true,
                nosort: true,
                columnClass: 'col-md-2 hidden-sm hidden-xs'
            },
            owners: {
                label: i18n._('Owners'),
                type: 'owners',
                nosort: true,
                excludeModal: true,
                columnClass: 'col-md-2 hidden-sm hidden-xs'
            }
        },

        actions: {
            add: {
                mode: 'all', // One of: edit, select, all
                ngClick: 'addCredential()',
                awToolTip: i18n._('Create a new credential'),
                actionClass: 'btn List-buttonSubmit',
                buttonContent: '&#43; ' + i18n._('ADD'),
                ngShow: "true"
            }
        },

        fieldActions: {

            columnClass: 'col-md-2 col-sm-3 col-xs-3',

            edit: {
                ngClick: "editCredential(credential.id)",
                icon: 'fa-edit',
                label: i18n._('Edit'),
                "class": 'btn-sm',
                awToolTip: i18n._('Edit credential'),
                dataPlacement: 'top',
                ngShow: 'credential.summary_fields.user_capabilities.edit'
            },

            view: {
                ngClick: "editCredential(credential.id)",
                label: i18n._('View'),
                "class": 'btn-sm',
                awToolTip: i18n._('View credential'),
                dataPlacement: 'top',
                ngShow: '!credential.summary_fields.user_capabilities.edit'
            },

            "delete": {
                ngClick: "deleteCredential(credential.id, credential.name)",
                icon: 'fa-trash',
                label: i18n._('Delete'),
                "class": 'btn-sm',
                awToolTip: i18n._('Delete credential'),
                dataPlacement: 'top',
                ngShow: 'credential.summary_fields.user_capabilities.delete'
            }
        }
    };}];
