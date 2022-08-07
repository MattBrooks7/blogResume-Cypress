/// <reference types ="cypress" />
describe('initialBlogTest', () => {

  it('can navigate to baseUrl', () => {
    // cy.visit('http://localhost:3000')
    cy.visit('')
  })

  it('has page title of Articles', () => {
    cy.get('h1').should('have.text', 'Articles')
  })

  it('has "Working with Rails" link with functionality', () => {
    // cy.workWithRails();
    //link to work with rails
    cy.get(':nth-child(1) > a').should('exist')
    cy.get(':nth-child(1) > a').click()
    cy.get('h1').should('have.text', 'Working with Rails')
  })

})