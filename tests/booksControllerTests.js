const should = require("should");
const sinon = require("sinon");
const bookController = require("../controllers/booksController");

describe("Book controller tests", () => {
  describe("Post", () => {
    it("should not allow an empty title on post", () => {
      const Book = function(book) {
        this.save = () => {};
      };
      const req = {
        body: {
          author: "Jon"
        }
      };
      const res = {
        status: sinon.spy(),
        send: sinon.spy(),
        json: sinon.spy()
      };
      res.status.calledWith(400).should.equal(true);
    });
  });
});
