const input = '#typeahead'

module.exports = {
  'Basic example': (client) => {
    client.url('http://localhost:8080/basic.html')
  },

  'Should show an input': (client) => {
    client.expect.element(input).to.be.present.before(1000)
  },

  "Should show 2 options when typing 'a'": (client) => {
    client.setValue(input, 'a')
    client.elements('css selector', '.tt-suggestion', function (result) {
      this.assert.equal(result.value.length, 2)
    })
  }
}
