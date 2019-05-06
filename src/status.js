import { createElement, Component } from 'preact' /** @jsx createElement */

var debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
  		var later = function() {
  			timeout = null;
  			if (!immediate) func.apply(context, args);
  		};
  		var callNow = immediate && !timeout;
  		clearTimeout(timeout);
  		timeout = setTimeout(later, wait);
  		if (callNow) func.apply(context, args);
    };
};


export default class Status extends Component {
  static defaultProps = {
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
    bump: false
  }

  componentWillMount() {
    var that=this;
    this.considerSecondBump = debounce(function(){
         if(!that.props.selectedOption){
              that.setState(({ bump }) => ({ bump: !bump }));
              window.setTimeout(function(){
                 that.setState(({ bump }) => ({ bump: !bump }));
              },200)
         }
     }, 1500);
  }

  componentWillReceiveProps ({ queryLength }) {
    const hasChanged = queryLength !== this.props.queryLength
    if (hasChanged || !hasChanged) {
        this.setState(({ bump }) => ({ bump: !bump }))
        this.considerSecondBump()
    }
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
    const { bump } = this.state

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

    return (<div><div
        id='flip'
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
      <span>{bump ? content : ''}</span>
    </div>
    <div
        id='flop'
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
      <span>{bump ? '' : content}</span>
    </div></div>)
  }
}
