import TagSearchBar from './TagSearchBar'

const tagManagerStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const TagManager = () => (
  <div style={tagManagerStyle}>
    <TagSearchBar />
  </div>
)

export default TagManager