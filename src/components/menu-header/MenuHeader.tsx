import MenuIcon from './MenuIcon';
import './menuHeader.css'

type Props = {
  toggleMenuState: () => void;
}

function MenuHeader({ toggleMenuState }: Props) {

  return (
    <button className='menu-movile' onClick={toggleMenuState}>
      <MenuIcon size='40px'/>
    </button>
  )
}

export default MenuHeader