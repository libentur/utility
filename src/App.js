import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Header } from './modules/header/index'
import { Sidebar } from './modules/sidebar/index'
import { GeneratorModule } from './modules/generator/index'
import { GradientsModule } from './modules/gradients/index'
import { Footer } from './modules/footer/index'
import LOCALIZATION from './localization/localization.json'

export default function App() {
    const language = useSelector(state => state.settings.language)
    return (
        <div className='app'>
            <Header />
            <main>
                <Sidebar localization={LOCALIZATION.sidebar[language]} />
                <Routes>
                    <Route
                        path='/generator'
                        element={
                            <GeneratorModule
                                localization={LOCALIZATION.generator[language]}
                            />
                        }
                    />
                    <Route
                        path='/gradients'
                        element={
                            <GradientsModule
                                localization={LOCALIZATION.gradients[language]}
                            />
                        }
                    />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}
