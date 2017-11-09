import SearchBar from './SearchBar'
import SearchResults from './SearchResults'

const tagManagerStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const tags = [{"title": "tag 1"}, {"title": "tag 2"}, {"title": "tag 3"}]

const TagManager = () => (
  <div style={tagManagerStyle}>
    <SearchBar placeholder='Type tag name to search...' />
    <SearchResults tags={tags} />
  </div>
)

export default TagManager