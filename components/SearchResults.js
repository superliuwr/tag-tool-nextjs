import React from 'react'
import SearchResult from './SearchResult'

class SearchResults extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.tags.map(tag => {
            return <SearchResult title={tag.title} activated={tag.activated} />
          })}
        </ul>
      </div>
    )
  }
}

export default SearchResults