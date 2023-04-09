import { FaBars } from "react-icons/fa"
import { useData } from "../state/context"
import { SHOW_MODAL, SHOW_SIDEBAR } from "../state/actions"

const Home = () => {
    const { dispatch } = useData()
    return (
        <main>
            <button className='sidebar-toggle' onClick={() => dispatch({ type: SHOW_SIDEBAR })}>
                <FaBars />
            </button>
            <button className="btn" onClick={() => dispatch({ type: SHOW_MODAL })}>Show Modal</button>
        </main>
    )
}

export default Home