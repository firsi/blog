import React from 'react';
import {Navbar} from './Navbar';
import Login from './Login';
import './wrapper.css';
class Wrapper extends React.Component{

    render() {
        return <div className="container-fluid">
            <div className="row">
                <main className="col-lg-8 col-sm-12">
                    <Navbar />
                </main>

                <aside className="col-lg-4 col-sm-12">
                    <Login />
                </aside>

            </div>

        </div>
    }
}

export default Wrapper;