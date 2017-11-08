import React from 'react'
import { Button, Classes } from '@blueprintjs/core'

class SearchButton extends React.Component {
  render() {
    return (
      <Button 
        className={Classes.MINIMAL}
        iconName='arrow-right'
        onClick={this.props.onClick}
      />
    )
  }
}

export default SearchButton