import { h, Component } from 'preact' /** @jsx h */

export default class Status extends Component {
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
    const { length, queryLength, minQueryLength, selectedOption } = this.props
    const { bump } = this.state

    const words = {
      result: (length === 1) ? 'result' : 'results',
      is: (length === 1) ? 'is' : 'are'
    }

    const queryTooShort = queryLength < minQueryLength
    const noResults = length === 0

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
      {(queryTooShort)
        ? <span>Type in {minQueryLength} or more characters for results.</span>
        : (noResults)
          ? <span>No search results.</span>
          : <span>
            {length} {words.result} {words.is} available. {(selectedOption)
              ? <span>{selectedOption} (1 of {length}) is selected.</span>
              : null
            }
          </span>
      }
      <span>{bump ? ',' : ',,'}</span>
    </div>
  }
}
