describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})

describe('The Main Page', () => {
  it('successfully loads', () => {
    cy.visit('http://127.0.0.1:5502/index.html')
  })
})

describe('Basic operations', () => {
  it('7 + 2 equals 9', () => {
    //ARRANGE
    cy.visit('http://127.0.0.1:5502/index.html');
    //ACT
    cy.get('[data-cy=seven]').click();
    cy.get('[data-cy=plus]').click();
    cy.get('[data-cy=two]').click();
    cy.get('[data-cy=equals]').click();
    //ASSERT
    cy.get('[data-cy=display-result]').should('have.text', '9')
  })
})

describe('Long operations', () => {
  it('9 + 3 - 10 * 60 / 5 equals 24', () => {
    //ARRANGE
    cy.visit('http://127.0.0.1:5502/index.html');
    //ACT
    cy.get('[data-cy=nine]').click();
    cy.get('[data-cy=plus]').click();
    cy.get('[data-cy=three]').click();
    cy.get('[data-cy=minus]').click();
    cy.get('[data-cy=one]').click();
    cy.get('[data-cy=zero]').click();
    cy.get('[data-cy=times]').click();
    cy.get('[data-cy=six]').click();
    cy.get('[data-cy=zero]').click();
    cy.get('[data-cy=divide]').click();
    cy.get('[data-cy=five]').click();
    cy.get('[data-cy=equals]').click();
    //ASSERT
    cy.get('[data-cy=display-result]').should('have.text', '24')
  })
})

describe('Long operations show in the second display', () => {
  it('9 + 3 - 10 * 60 / 5 show in the list display', () => {
    //ARRANGE
    cy.visit('http://127.0.0.1:5502/index.html');
    //ACT
    cy.get('[data-cy=nine]').click();
    cy.get('[data-cy=plus]').click();
    cy.get('[data-cy=three]').click();
    cy.get('[data-cy=minus]').click();
    cy.get('[data-cy=one]').click();
    cy.get('[data-cy=zero]').click();
    cy.get('[data-cy=times]').click();
    cy.get('[data-cy=six]').click();
    cy.get('[data-cy=zero]').click();
    cy.get('[data-cy=divide]').click();
    cy.get('[data-cy=five]').click();
    //ASSERT
    cy.get('[data-cy=display-list]').should('have.text', '9+3-10*60/5')
  })
})

describe('% is working', () => {
  it('% is working', () => {
    //ARRANGE
    cy.visit('http://127.0.0.1:5502/index.html');
    //ACT
    cy.get('[data-cy=zero]').click();
    cy.get('[data-cy=dot]').click();
    cy.get('[data-cy=three]').click();
    cy.get('[data-cy=four]').click();
    cy.get('[data-cy=one]').click();
    cy.get('[data-cy=percent]').click();
    //ASSERT
    cy.get('[data-cy=display-result]').should('have.text', '34.1')
  })
})

describe('+/- is working in results display', () => {
  it('+/- is working in results display', () => {
    //ARRANGE
    cy.visit('http://127.0.0.1:5502/index.html');
    //ACT
    cy.get('[data-cy=zero]').click();
    cy.get('[data-cy=dot]').click();
    cy.get('[data-cy=four]').click();
    cy.get('[data-cy=nine]').click();
    cy.get('[data-cy=seven]').click();
    cy.get('[data-cy=negPos]').click();
    //ASSERT
    cy.get('[data-cy=display-result]').should('have.text', '-0.497')
  })
})

describe('+/- is working in list display', () => {
  it('+/- is working in list display', () => {
    //ARRANGE
    cy.visit('http://127.0.0.1:5502/index.html');
    //ACT
    cy.get('[data-cy=zero]').click();
    cy.get('[data-cy=dot]').click();
    cy.get('[data-cy=four]').click();
    cy.get('[data-cy=nine]').click();
    cy.get('[data-cy=seven]').click();
    cy.get('[data-cy=negPos]').click();
    //ASSERT
    cy.get('[data-cy=display-list]').should('have.text', '-0.497')
  })
})

describe('AC is working in list display', () => {
  it('AC is working in list display', () => {
    //ARRANGE
    cy.visit('http://127.0.0.1:5502/index.html');
    //ACT
    cy.get('[data-cy=zero]').click();
    cy.get('[data-cy=dot]').click();
    cy.get('[data-cy=four]').click();
    cy.get('[data-cy=nine]').click();
    cy.get('[data-cy=seven]').click();
    cy.get('[data-cy=plus]').click();
    cy.get('[data-cy=one]').click();
    cy.get('[data-cy=nine]').click();
    cy.get('[data-cy=four]').click();
    cy.get('[data-cy=clear]').click();
    //ASSERT
    cy.get('[data-cy=display-list]').should('have.text', '')
  })
})

describe('AC is working in results display', () => {
  it('AC is working in results display', () => {
    //ARRANGE
    cy.visit('http://127.0.0.1:5502/index.html');
    //ACT
    cy.get('[data-cy=zero]').click();
    cy.get('[data-cy=dot]').click();
    cy.get('[data-cy=four]').click();
    cy.get('[data-cy=nine]').click();
    cy.get('[data-cy=seven]').click();
    cy.get('[data-cy=plus]').click();
    cy.get('[data-cy=one]').click();
    cy.get('[data-cy=nine]').click();
    cy.get('[data-cy=four]').click();
    cy.get('[data-cy=divide]').click();
    cy.get('[data-cy=nine]').click();
    cy.get('[data-cy=five]').click();
    cy.get('[data-cy=clear]').click();
    //ASSERT
    cy.get('[data-cy=display-result]').should('have.text', '')
  })
})

describe('Division is working in results display', () => {
  it('Division is working in results display', () => {
    //ARRANGE
    cy.visit('http://127.0.0.1:5502/index.html');
    //ACT
    cy.get('[data-cy=nine]').click();
    cy.get('[data-cy=five]').click();
    cy.get('[data-cy=minus]').click();
    cy.get('[data-cy=one]').click();
    cy.get('[data-cy=zero]').click();
    cy.get('[data-cy=zero]').click();
    cy.get('[data-cy=divide]').click();
    cy.get('[data-cy=five]').click();
    cy.get('[data-cy=plus]').click();
    //ASSERT
    cy.get('[data-cy=display-result]').should('have.text', '-1')
  })
})

describe('Division is working in list display', () => {
  it('Division is working in list display', () => {
    //ARRANGE
    cy.visit('http://127.0.0.1:5502/index.html');
    //ACT
    cy.get('[data-cy=nine]').click();
    cy.get('[data-cy=five]').click();
    cy.get('[data-cy=minus]').click();
    cy.get('[data-cy=one]').click();
    cy.get('[data-cy=zero]').click();
    cy.get('[data-cy=zero]').click();
    cy.get('[data-cy=divide]').click();
    cy.get('[data-cy=five]').click();
    cy.get('[data-cy=plus]').click();
    //ASSERT
    cy.get('[data-cy=display-list]').should('have.text', '95-100/5+')
  })
})

describe('Multiply is working in list display', () => {
  it('Multiply is working in list display', () => {
    //ARRANGE
    cy.visit('http://127.0.0.1:5502/index.html');
    //ACT
    cy.get('[data-cy=nine]').click();
    cy.get('[data-cy=five]').click();
    cy.get('[data-cy=times]').click();
    cy.get('[data-cy=one]').click();
    cy.get('[data-cy=zero]').click();
    cy.get('[data-cy=zero]').click();
    cy.get('[data-cy=plus]').click();
    cy.get('[data-cy=five]').click();
    cy.get('[data-cy=times]').click();
    cy.get('[data-cy=five]').click();
    cy.get('[data-cy=nine]').click();
    cy.get('[data-cy=times]').click();
    //ASSERT
    cy.get('[data-cy=display-list]').should('have.text', '95*100+5*59*')
  })
})

describe('Multiply is working in result display', () => {
  it('Multiply is working in result display', () => {
    //ARRANGE
    cy.visit('http://127.0.0.1:5502/index.html');
    //ACT
    cy.get('[data-cy=nine]').click();
    cy.get('[data-cy=five]').click();
    cy.get('[data-cy=times]').click();
    cy.get('[data-cy=one]').click();
    cy.get('[data-cy=zero]').click();
    cy.get('[data-cy=zero]').click();
    cy.get('[data-cy=plus]').click();
    cy.get('[data-cy=five]').click();
    cy.get('[data-cy=times]').click();
    cy.get('[data-cy=five]').click();
    cy.get('[data-cy=nine]').click();
    cy.get('[data-cy=times]').click();
    //ASSERT
    cy.get('[data-cy=display-result]').should('have.text', '560795')
  })
})
