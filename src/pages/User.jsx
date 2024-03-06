import React from 'react'
import { Link } from 'react-router-dom'

export const User = () => {
    return (
        <section className="bg-white h-screen">
            <div className="mx-auto  w-full h-full px-4 py-8 lg:px-6 lg:py-16">
                <div className="mx-auto m w-full h-full text-center">
                    <h1 className="dark:text-primary-500 mb-4 text-7xl font-extrabold tracking-tight text-blue-600 lg:text-9xl">User Page</h1>
                    <Link to={'/'}>
                        <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl ">Go back Home</p>
                    </Link>
                    <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Work in Progress</p>
                </div>
            </div>
        </section>
    )
}
