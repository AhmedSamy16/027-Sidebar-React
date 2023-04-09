import { FaTimes } from "react-icons/fa"
import { useData } from "../state/context"
import { CLOSE_MODAL } from "../state/actions"

const Modal = () => {
    const { state, dispatch } = useData()
    return (
        <div className={`modal-overlay ${state.showModal && 'show-modal'}`}>
            <div className="modal-container">
                <h3>modal content</h3>
                <button className="close-modal-btn" onClick={() => dispatch({ type: CLOSE_MODAL })}>
                    <FaTimes />
                </button>
            </div>
        </div>
    )
}

export default Modal