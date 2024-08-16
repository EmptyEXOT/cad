import {useContext} from "react";
import {NavbarContext} from "../context/Navbar.context";
import {NavbarState} from "@/widgets/Navbar/types";

type TUseNavbar = () => NavbarState

export const useNavbar: TUseNavbar = () => {
    return useContext<NavbarState>(NavbarContext)
}