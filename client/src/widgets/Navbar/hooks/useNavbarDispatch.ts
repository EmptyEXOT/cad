import {Dispatch, useContext} from "react";
import {NavbarDispatchContext} from "../context/NavbarDispatch.context";
import {NavbarAction} from "@/widgets/Navbar/types";

type TUseNavbarDispatch = () => Dispatch<NavbarAction>

export const useNavbarDispatch: TUseNavbarDispatch = () => {
    return useContext<Dispatch<NavbarAction>>(NavbarDispatchContext);
}