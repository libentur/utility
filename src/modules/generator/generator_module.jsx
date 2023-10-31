import React from 'react'
import { Helmet } from 'react-helmet'
import Loader from '../../components/Loader'
import GeneratorNavigation from './components/generator_navigation/generator_navigation'
import GeneratorLength from './components/generator_length/generator_length'
import GeneratorChars from './components/generator_chars/generator_chars'
import styles from './styles.module.scss'

export default function GeneratorModule({ localization }) {
    const [isLoading, setIsLoading] = React.useState(true)
    const [passwordResult, setPasswordResult] = React.useState('')
    const [passwordSettings, setPasswordSettings] = React.useState({
        chars: '',
        length: null
    })

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <Helmet>
                <title>{localization.module_title}</title>
            </Helmet>
            {isLoading ? (
                <Loader />
            ) : (
                <div className={styles.generator}>
                    <GeneratorNavigation
                        passwordResult={passwordResult}
                        setPasswordResult={setPasswordResult}
                        passwordSettings={passwordSettings}
                    />
                    <div className={styles.generator_settings}>
                        <GeneratorLength
                            setPasswordSettings={setPasswordSettings}
                        />
                        <GeneratorChars
                            localization={localization.chars}
                            setPasswordSettings={setPasswordSettings}
                        />
                    </div>
                </div>
            )}
        </>
    )
}
