import "./MainNav.css";

export default function MainNav() {
    return (
        <nav className='main-navigation'>
            <div className='nav-left'>
                <button className='nav-button'>Home</button>
                <button className='nav-button'>Category</button>
                <button className='nav-button'>Recipes</button>
                <button className='nav-button'>Contact</button>
            </div>
            <div className='nav-right'>
                <button className='nav-button'>Login</button>
                <button className='nav-button'>Register</button>
                <button className='nav-button'>Logout</button>
                <button className='nav-button submit-recipe'>
                    +Submit Recipe
                </button>
            </div>
        </nav>
    );
}
