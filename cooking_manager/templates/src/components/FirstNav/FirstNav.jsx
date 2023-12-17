import "./FirstNav.css";
export default function FirtNav() {
    return (
        <nav className='navbar'>
            <div className='logo-container'>
                <img src='/public/imgs/logo.png' alt='Logo' className='logo' />
            </div>
            <hr className='line' />
        </nav>
    );
}
