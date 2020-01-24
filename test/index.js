const chai = require('chai');
const chai_http = require('chai-http');

const app = require('../app');

const { expect } = chai;

chai.use(chai_http);

describe('API V1 First check', () => {
  describe('GET /v1/check', () => {
    it('should return an object with data and status', (done) => {
      chai.request(app)
        .get('/v1/check')
        .end((err, res) => {
          if (err) done(err);
          expect(res).to.have.status(200);
          expect(res).to.be.an('object');
          expect(res.body.status).to.deep.equals('success');
          expect(res.body.data).to.deep.equals('OK');
          done();
        })
    })
  })
})