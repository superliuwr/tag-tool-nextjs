import React from 'react'
import { Button } from '@blueprintjs/core'

class SearchResult extends React.Component {
  style = {
    margin: 5,
  }

  render() {
    return (
      <li key={this.props.id}>
        <span style={this.style}>{this.props.title}</span>
        <Button style={this.style} text='Activate' active={this.props.activated == false} disabled={this.props.activated == true} />
        <Button style={this.style} text='Deactivate' active={this.props.activated == true} disabled={this.props.activated == false} />
      </li>
    )
  }
}

export default SearchResult