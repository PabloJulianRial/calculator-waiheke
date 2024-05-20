describe("calculator operations", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5174/");
  });

  it("should add 2+2 = 4", () =>{
    const button2 = cy.get(".button2")
    const plusButton = cy.get(".button__plus")
    const plusEquals = cy.get(".button__equals")
    const display = cy.get(".display__text.value")

    button2.click()
    plusButton.click()
    button2.click()
    plusEquals.click()

    display.should("contain", "4")

  })
});
