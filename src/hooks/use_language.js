import { useDispatch, useSelector } from 'react-redux'
import { setLanguage } from '../redux/slices/settings'

export default function useLanguage() {
    const dispatch = useDispatch()
    const currentLanguage = useSelector(state => state.settings.language)
    const setCurrentLanguage = value => dispatch(setLanguage(value))
    return { currentLanguage, setCurrentLanguage }
}
