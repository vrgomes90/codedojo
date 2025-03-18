module.exports = {
    fields: {
        xxx: ''
    },

    clickable: {
        xxx: ''
    },


    values: {
        xxx: ''
    },

    // FillFields
    fillField(){
        cy.get().type();
    },

    // Clicks
    click(){
        cy.get().click();
    },

    // Verifications
    verify(){
        cy.get()
            .contains()
            .should();
    }

};

