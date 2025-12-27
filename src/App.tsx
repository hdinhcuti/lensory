import Main from '@/components/layouts/main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './router/Router';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                {publicRoutes.map((value, index) => {
                    const Layout = Main;
                    const Page = value.component;
                    return (
                        <Route
                            key={index}
                            path={value.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
