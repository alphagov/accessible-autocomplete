import { createElement, Component } from 'preact' /** @jsx createElement */

export default class Status extends Component {
  static defaultProps = {
    tQueryTooShort: (minQueryLength) => <span>Type in {minQueryLength} or more characters for results.</span>,
    tNoResults: () => <span>No search results.</span>,
    tSelectedOption: (selectedOption, length) => <span>{selectedOption} (1 of {length}) is selected.</span>,
    tResults: (length, contentSelectedOption) => {
      const words = {
        result: (length === 1) ? 'result' : 'results',
        is: (length === 1) ? 'is' : 'are'
      }

      return <span>{length} {words.result} {words.is} available. {contentSelectedOption}</span>
    }
  };

  state = {
    bump: false
  }

  componentWillReceiveProps ({ queryLength }) {
    const hasChanged = queryLength !== this.props.queryLength
    if (hasChanged) {
      this.setState(({ bump }) => ({ bump: !bump }))
    }
  }

  render () {
    const {
      length,
      queryLength,
      minQueryLength,
      selectedOption,
      tQueryTooShort,
      tNoResults,
      tSelectedOption,
      tResults
    } = this.props
    const { bump } = this.state

    const queryTooShort = queryLength < minQueryLength
    const noResults = length === 0

    const contentSelectedOption = selectedOption
      ? tSelectedOption(selectedOption, length)
      : null

    let content = null
    if (queryTooShort) {
      content = tQueryTooShort(minQueryLength)
    } else if (noResults) {
      content = tNoResults()
    } else {
      content = tResults(length, contentSelectedOption)
    }

    return <div
      aria-atomic='true'
      aria-live='polite'
      role='status'
      style={{
        border: '0',
        clip: 'rect(0 0 0 0)',
        height: '1px',
        marginBottom: '-1px',
        marginRight: '-1px',
        overflow: 'hidden',
        padding: '0',
        position: 'absolute',
        whiteSpace: 'nowrap',
        width: '1px'
      }}
    >
      {content}
      <span>{bump ? ',' : ',,'}</span>
    </div>
  }
}
