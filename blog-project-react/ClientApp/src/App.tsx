import { useState, Component } from 'react';
import {
    Route,
    Routes,
} from 'react-router-dom';
import routes from './routes';
import BarNavigation from './components/bar-navigation';
import './utils/index.css';
import 'materialize-css/dist/css/materialize.min.css';

function App() {
    const [currentPath, setCurrentPath] = useState({ path: '/', req: {} })

    // Navigation
    let barNavData = {
        routes,
        setCurrentPath
    };

    return (
        <div className="App">
            <Routes>
                {routes.map((r: RRoute, idx: number) => {

                    return <Route {...r} element={<r.Container />} key={idx} />;
                    // return <r.Container navigate={navigate} currentPath={currentPath} key={idx} />;
                })}
            </Routes>

            <BarNavigation  {...barNavData} />
        </div>
    );
};

interface RRoute {
    path: string,
    Container: any,
    index: boolean,
    label: string,
    icon: {
        tag: string,
        value: string,
        alt: string
    }
}

export default App;