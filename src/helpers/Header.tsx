
function Header() {
    return (
        <header className="flex p-5 justify-between items-center shadow-lg">
            <h1 className="text-emerald-950 text-lg">Products showcase</h1>
            <div className="flex gap-5 mr-10 text-emerald-950 text-lg">
                <nav>
                    <a 
href="#" 
className="hover:text-blue-500 transition-colors duration-300"
                    >Home</a>
                </nav>
                <nav>
                    <a 
href="#" 
className="hover:text-blue-500 transition-colors duration-300"
                    >About</a>
                </nav>
                <nav>
                    <a 
href="#" 
className="hover:text-blue-500 transition-colors duration-300"
                    >Contact</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;