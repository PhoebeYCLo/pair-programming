import React from 'react';
import Header from '../Header/Header';
import Map from '../Map/Map';
import Form from '../Form/Form';
import ReportList from '../ReportList/ReportList';

const Layout = () => {
    return (
        <div>
            <Header />
            <main className="home__content">
                <div className="home__main">
                    <Map />
                </div>
                <div className="home__minor">
                    <Form />
                    <ReportList />
                </div>
            </main>
        </div>
    )
}

export default Layout;