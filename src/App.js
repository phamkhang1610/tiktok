import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import DefaultLayout from '~/Layout/DefaultLayout';
import { Fragment } from 'react';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* nó tương đương với
         <Route path ="/" element={<Home />} />
        */}
                    {publicRoutes.map((route, index) => {
                        const Pages = route.component;

                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Pages />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
