// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });


//commands
import './commands';

//pages
import loginPage from '../pages/loginPage'
import homePage from '../pages/homePage'
import buscaPage from '../pages/buscaPage'
import pdpPage from '../pages/pdpPage'
import addPage from '../pages/adicionarServicosPage'
import carrinhoPage from '../pages/carrinhoPage'




Cypress.loginPage = loginPage;
Cypress.homePage = homePage;
Cypress.buscaPage = buscaPage;
Cypress.pdpPage = pdpPage;
Cypress.addPage = addPage;
Cypress.carrinhoPage = carrinhoPage;

//fixtures
import users from '../fixtures/users.json';
import products from '../fixtures/products.json';

Cypress.users = users;
Cypress.products = products;