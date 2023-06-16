import { assert, expect } from 'chai';
import * as utils from '../../src/utils';

describe('utils should', () => {
  it('calculate the square of a number', () => {
    //  arrange
    const n = 5;

    //  act
    const result = utils.square(n);

    //  assert
    expect(result).to.equal(n * n);
  });

  it('returns the area of a circle with positive radius', () => {
    const r = 5;
    const area = utils.getAreaOfCircle(r);
    expect(area).to.be.closeTo(78.539, 0.1);
  });

  it('returns the area of a circle with zero radius', () => {
    const r = 0;
    const area = utils.getAreaOfCircle(0);
    expect(area).to.equal(0);
  });

  it('throws Error for negative radius', () => {
    const r = -7;
    assert.throws(
      () => utils.getAreaOfCircle(r),
      'Negative radius is not allowed'
    );
  });

  it('adds a student to the array', () => {
    const student = { fullName: 'Rajesh Kumar' };
    utils.addStudent(student);
    // expect(utils.students.length).to.equal(1);
    assert.include(utils.students, student);
  });

  it('resolves the value from the promise', () => {
    const p = utils.getPromise();

    return p.then((v) => {
      expect(v).to.equal(100);
    });
  });

  it('resolves the value from through await', async () => {
    const value = await utils.getPromise();

    expect(value).to.equal(100);
  });
});
