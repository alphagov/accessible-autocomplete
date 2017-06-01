import { createElement, Component } from 'preact' /** @jsx createElement */

export default class DropdownArrowDown extends Component {
  render () {
    return (
      <svg version='1.1' xmlns='http://www.w3.org/2000/svg' class='dropdown-arrow-down'>
        <g stroke='none' fill='none' fill-rule='evenodd'>
          <polygon fill='#000000' points='0 0 22 0 11 17' />
        </g>
      </svg>
    )
  }
}
