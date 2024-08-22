import { useContext, Dispatch } from "react"
import { ModalDispatchContext } from "../context/ModalDispatch.context"
import { ModalAction } from "../types"

type UseModalDispatch = () => Dispatch<ModalAction>

export const useModalDispatch: UseModalDispatch = () => {
    return useContext<Dispatch<ModalAction>>(ModalDispatchContext)
}