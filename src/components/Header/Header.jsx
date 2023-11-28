import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Container, LogoutBtn } from '../../components'
import { Logo } from '../../components'

const Header = () => {
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()

    const navItems = [
        {
            name: 'Home',
            slug: "/",
            active: true
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ]
    //hii
    return (
        <header className='py-3 shadow bg-gray-500'>
            <Container>
                <nav className="flex flex-col md:flex-row">
                    <div className="mr-4">
                        <Link to='/'>
                            <Logo width='70px' />
                        </Link>
                    </div>
                    <ul className="flex ml-auto w-full md:justify-end overflow-y-auto whitespace-nowrap">
                        {navItems.map((item) => (
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                        onClick={() => navigate(item.slug)}
                                        className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 hover:text-black hover:border-black rounded-full me-3'>{item.name}</button>
                                </li>
                            ) : null
                        ))}
                        {authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header
