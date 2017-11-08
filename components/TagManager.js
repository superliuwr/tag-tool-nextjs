import SearchBar from './SearchBar'

const tagManagerStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const TagManager = () => (
  <div style={tagManagerStyle}>
    <SearchBar placeholder='Type tag name to search...' />
  </div>
)

export default TagManager