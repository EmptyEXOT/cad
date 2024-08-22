import { useContext } from "react"
import { ModalContext } from "../context/Modal.context"

type UseModal = () => boolean

export const useModal: UseModal = () => {
    const isOpen = useContext(ModalContext);
    return isOpen;
}