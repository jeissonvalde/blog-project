import { useState, Component } from 'react';
import {
    Route,
    Routes,
} from 'react-router-dom';
import routes from './routes';
import BarNavigation from './components/bar-navigation';
import { navigateTo } from './components/bar-navigation/controllers';
import './utils/index.css';

function App() {
    const [currentPath, setCurrentPath] = useState({ path: '/', req: {} })

    // Navigation
    let barNavData = {
        routes,
        setCurrentPath
    };

    const navigate = navigateTo.bind({ props: { setCurrentPath } })

    return (
        <div className="App">
            <Routes>
                {routes.map((r: RRoute, idx: number) => {

                    if (r.path == currentPath.path) {
                        return <Route {...r} element={<r.Container />} key={idx} />;
                        // return <r.Container navigate={navigate} currentPath={currentPath} key={idx} />;
                    }
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