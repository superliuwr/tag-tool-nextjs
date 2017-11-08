import { Button, Classes, InputGroup, Intent } from '@blueprintjs/core'

const TagSearchBar = () => (
  <div className='pt-input-group'>
    <span className='pt-icon pt-icon-search'></span>
    <input className='pt-input' type='search' placeholder="Type tag name to search..." dir="auto" />
    <Button 
      className={Classes.MINIMAL} 
      iconName='arrow-right'
      onClick={()=>{}}
    />
  </div>
)

export default TagSearchBar