import { FaTimes } from "react-icons/fa"
import logo from "../logo.svg"
import { links, social } from "../data"
import { useData } from "../state/context"
import { CLOSE_SIDEBAR } from "../state/actions"

const Sidebar = () => {
    const { state, dispatch } = useData()
    return (
        <aside className={`sidebar ${state.showSidebar && 'show-sidebar'}`}>
            <div className="sidebar-header">
                <img src={logo} className="logo" alt="coding addict" />
                <button className="close-btn" onClick={() => dispatch({ type: CLOSE_SIDEBAR })}>
                    <FaTimes />
                </button>
            </div>
            <ul className="links">
                {links.map(link => {
                    const { id, url, text, icon } = link
                    return <li key={id}>
                        <a href={url}>
                            {icon}
                            {text}
                        </a>
                    </li>
                })}
            </ul>
            <ul className="social-icons">
                {social.map(link => {
                    const { id, url, icon } = link
                    return <li key={id}>
                        <a href={url}>{icon}</a>
                    </li>
                })}
            </ul>
        </aside>
    )
}

export default Sidebar