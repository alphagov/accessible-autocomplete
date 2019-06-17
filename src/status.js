import { createElement, Component } from 'preact' /** @jsx createElement */

const debounce = function (func, wait, immediate) {
  var timeout
  return function () {
    var context = this
    var args = arguments
    var later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    var callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

export default class Status extends Component {
  static defaultProps = {
    statusDebounceMillis: 1400,
    tQueryTooShort: (minQueryLength) => `Type in ${minQueryLength} or more characters for results`,
    tNoResults: () => 'No search results',
    tSelectedOption: (selectedOption, length, index) => `${selectedOption} (${index + 1} of ${length}) is selected`,
    tResults: (length, contentSelectedOption) => {
      const words = {
        result: (length === 1) ? 'result' : 'results',
        is: (length === 1) ? 'is' : 'are'
      }

      return `${length} ${words.result} ${words.is} available. ${contentSelectedOption}`
    }
  };

  state = {
    bump: false,
    showContent: false
  }

  componentWillMount () {
    const that = this
    this.debounceStatusUpdate = debounce(function () {
      if (!that.state.showContent) {
        that.setState(({ bump, showContent }) => ({ bump: !bump, showContent: true }))
      }
    }, that.props.statusDebounceMillis)
  }

  componentWillReceiveProps ({ queryLength }) {
    this.setState(({ showContent }) => ({ showContent: false }))
  }

  render () {
    const {
      length,
      queryLength,
      minQueryLength,
      selectedOption,
      selectedOptionIndex,
      tQueryTooShort,
      tNoResults,
      tSelectedOption,
      tResults
    } = this.props
    const { bump, showContent } = this.state

    const queryTooShort = queryLength < minQueryLength
    const noResults = length === 0

    const contentSelectedOption = selectedOption
      ? tSelectedOption(selectedOption, length, selectedOptionIndex)
      : ''

    let content = null
    if (queryTooShort) {
      content = tQueryTooShort(minQueryLength)
    } else if (noResults) {
      content = tNoResults()
    } else {
      content = tResults(length, contentSelectedOption)
    }

    this.debounceStatusUpdate()

    return (
      <div>
        <div
          id='ariaLiveA'
          aria-atomic='true'
          aria-live='polite'

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
          {(showContent && bump) ? content : ''}
        </div>
        <div
          id='ariaLiveB'
          aria-atomic='true'
          aria-live='polite'

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
          {(showContent && !bump) ? content : ''}
        </div>
      </div>
    )
  }
}
