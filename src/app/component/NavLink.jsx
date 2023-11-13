import Link from "next/link"

const NavLink = ({href,title}) =>{
    return(
        <Link 
        href={href} 
        className="block py-3 pl-4 pr-4 text-[#EAC696] sm:text-l rounded md:p-0 hover:text-white"
    >
        {title}
    </Link>
    )
}

export default NavLink