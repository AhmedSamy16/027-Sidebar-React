import { SHOW_MODAL, CLOSE_MODAL, SHOW_SIDEBAR, CLOSE_SIDEBAR } from "./actions"

export const defaultState = {
    showModal: false,
    showSidebar: false
}

export const reducer = (state, action) => {
    switch(action.type) {
        case SHOW_MODAL:
            return { ...state, showModal: true }
        case CLOSE_MODAL:
            return { ...state, showModal: false }
        case SHOW_SIDEBAR:
            return { ...state, showSidebar: true }
        case CLOSE_SIDEBAR:
            return { ...state, showSidebar: false }
    }
}