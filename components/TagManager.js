import SearchBar from './SearchBar'
import SearchResults from './SearchResults'

const tagManagerStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const tags = [{"id": "a", "title": "tag 1", "activated": false}, {"id": "b", "title": "tag 2", "activated": true}, {"id": "c", "title": "tag 3", "activated": false}]

const TagManager = () => (
  <div style={tagManagerStyle}>
    <SearchBar placeholder='Type tag name to search...' />
    <SearchResults tags={tags} />
  </div>
)

export default TagManager