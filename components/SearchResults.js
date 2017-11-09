import React from 'react'

class SearchResults extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.tags.map(tag => {
            return <li><span>{tag.title}</span></li>
          })}
        </ul>
      </div>
    )
  }
}

export default SearchResults