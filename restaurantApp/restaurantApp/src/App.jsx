
import { Link, NavLink, Outlet } from 'react-router-dom'
function App() {
  

  return (
    <>
      <nav className='nav'>
            {/* <h2 className='mav_h2'>FoodRecipe</h2> */}
            <li className='fr'>
                    <NavLink to={'/'} className='nav_fr'>
                        FoodRecipe
                    </NavLink>
                </li>
            <form>
                <input 
                    type='text'
                    name='search'
                    placeholder='Enter Items...'
                    className='nav_input'
                />
            </form>
            <ul className='nav_ul'>
                <li>
                    <NavLink to={'/'} className='nav_home'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/favorites'} className='nav_fav'>
                            favorites
                    </NavLink>
                </li>
            </ul>
        </nav>
        <Outlet/>
    </>
  )
}

export default App
