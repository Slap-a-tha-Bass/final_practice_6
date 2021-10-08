import React from 'react';

const RootLayout = ({children}: IRootLayout) => {
    return (
        <main className="container">
            <section className="row justify-content-center">
                {children}
            </section>
        </main>
    )
}
interface IRootLayout {
    children: React.ReactNode
}
export default RootLayout;
