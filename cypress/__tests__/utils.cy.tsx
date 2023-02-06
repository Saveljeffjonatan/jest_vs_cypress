import { Addition, Multiplication, Subtraction } from "@/utils/functions";
import Button from "@/components/button";

describe("<Button />", () => {
  it("renders", () => {
    cy.mount(<Button>Addition</Button>);
    cy.get("button").contains("Addition");
  });

  it("Addition(2,2) should = 4", () => {
    const spy = cy.spy();
    const fn = Addition(2, 2);
    cy.mount(<Button onClick={spy(() => fn)}>Addition</Button>);
    cy.get("button").contains("Addition").click();
    expect(fn).to.be.equal(4);
  });

  it("Multiplication(4,4) should = 16", () => {
    const spy = cy.spy();
    const fn = Multiplication(4, 4);
    cy.mount(<Button onClick={spy(() => fn)}>Multiplication</Button>);
    cy.get("button").contains("Multiplication").click();
    expect(fn).to.be.equal(16);
  });

  it("Subtraction(10,2) should = 8", () => {
    const spy = cy.spy();
    const fn = Subtraction(10, 2);
    cy.mount(<Button onClick={spy(() => fn)}>Subtraction</Button>);
    cy.get("button").contains("Subtraction").click();
    expect(fn).to.be.equal(8);
  });
});
