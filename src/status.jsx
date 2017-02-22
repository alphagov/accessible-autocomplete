import { h, Component } from 'preact' /** @jsx h */
import debounce from 'lodash.debounce'

export default class Status extends Component {
  state = {
    cleared: true
  }

  componentWillReceiveProps ({ length }) {
    const hasChanged = length !== this.props.length
    const stillNoResults = length === 0
    if (hasChanged || stillNoResults) {
      this.setState({
        cleared: false
      }, () => {
        this.clearContent()
      })
    }
  }

  clearContent = debounce(() => {
    this.setState({
      cleared: true
    })
  }, 1000)

  render () {
    const { length, queryLength, minQueryLength, verbosity } = this.props
    const { cleared } = this.state

    const words = {
      result: (length === 1) ? 'result' : 'results',
      is: (length === 1) ? 'is' : 'are'
    }

    let helpText = ''
    switch (verbosity) {
      case 0:
        helpText = `${length} ${words.result} ${words.is} available.`
        break
      case 1:
        helpText = `${length} ${words.result} ${words.is} available. Use arrow keys or swipe to navigate.`
        break
      case 2:
        helpText = `${length} ${words.result} ${words.is} available. Use arrow keys to navigate, use enter key to select a result.`
        break
    }

    const queryTooShort = queryLength < minQueryLength
    const noResults = length === 0

    return <div
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
      {(cleared)
        ? <span />
        : (queryTooShort)
          ? <span>Type in {minQueryLength} or more characters for results.</span>
          : (noResults)
            ? <span>No search results.</span>
            : <span>{helpText}</span>
      }
    </div>
  }
}
