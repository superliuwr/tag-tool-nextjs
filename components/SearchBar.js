import { Button, InputGroup } from '@blueprintjs/core'
import SearchButton from './SearchButton'

const SearchBar = (props) => (
  <div className='pt-input-group'>
    <span className='pt-icon pt-icon-search'></span>
    <input className='pt-input' type='search' placeholder={props.placeholder} dir="auto" />
    <SearchButton
      onClick={() => {alert("search button clicked")}}
    />
  </div>
)

export default SearchBar