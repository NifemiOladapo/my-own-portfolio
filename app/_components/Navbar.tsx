const Navbar = () => {
    return (
        <div className="p-5 text-white w-full">
            <div className="w-full max-w-[1000px] mx-auto flex justify-between">
                <h1>Nifemi</h1>
                <ul className="flex gap-3">
                    <li>About Me</li>
                    <li>My Projects</li>
                    <li>Contact Me</li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar;