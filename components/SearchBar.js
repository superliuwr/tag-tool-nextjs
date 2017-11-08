import { Button, Classes, InputGroup, Intent } from '@blueprintjs/core'

const SearchBar = (props) => (
  <div className='pt-input-group'>
    <span className='pt-icon pt-icon-search'></span>
    <input className='pt-input' type='search' placeholder={props.placeholder} dir="auto" />
    <Button 
      className={Classes.MINIMAL} 
      iconName='arrow-right'
      onClick={()=>{}}
    />
  </div>
)

export default SearchBar