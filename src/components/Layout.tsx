import React, { type ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';

interface LayoutProps {
    children: ReactNode;
    pageId: string;
}

const Layout: React.FC<LayoutProps> = ({ children, pageId }) => {
    return (
        <div className="container" id={pageId}>
            <Header />
            <main>{children}</main>
            <Footer />
            <BackToTop />
        </div>
    );
};

export default Layout;