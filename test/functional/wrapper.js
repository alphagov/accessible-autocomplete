/* global describe, expect, it */
import Wrapper from '../../src/wrapper'

describe('Wrapper', () => {
  it('exposes global on window', () => {
    expect(typeof Wrapper).to.equal('object')
    expect(typeof window.AccessibleTypeahead).to.equal('function')
  })
})
