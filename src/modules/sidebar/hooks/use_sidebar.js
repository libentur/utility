import { useDispatch, useSelector } from 'react-redux'
import { setSidebar } from '../../../redux/slices/settings'

export default function useSidebar() {
    const dispatch = useDispatch()
    const statusSidebar = useSelector(state => state.settings.sidebar)
    const openSidebar = () => dispatch(setSidebar(true))
    const closeSidebar = () => dispatch(setSidebar(false))
    return { statusSidebar, openSidebar, closeSidebar }
}
