import MenuIcon from './MenuIcon';
import './menuHeader.css'

type Props = {
  toggleMenuState: () => void;
  isFloatMenu?: boolean;
  size?: string;
  color?: string;
}

function MenuHeader({ toggleMenuState, isFloatMenu, size = '40px', color }: Props) {

  return (
    <button className={`${isFloatMenu ? 'float-menu' : 'menu-movile'}`} onClick={toggleMenuState}>
      <MenuIcon size={size} color={color}/>
    </button>
  )
}

export default MenuHeader