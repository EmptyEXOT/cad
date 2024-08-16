import React, {FC, ReactNode} from 'react';
import classNames from "classnames";
import {useNavbar} from "@/widgets/Navbar/hooks/useNavbar";
import {useNavbarDispatch} from "@/widgets/Navbar/hooks/useNavbarDispatch";
import {NavbarActionType} from "@/widgets/Navbar/types";
import {Typo} from "@/shared/ui/Typo/Typo";
import {Link} from "react-router-dom";

interface NavbarLinkProps {
    children: ReactNode,
    closeOnClick?: boolean,
    to: string,
}

const NavbarLink: FC<NavbarLinkProps> = ({
                                             children,
                                             closeOnClick = true,
                                             to,
                                             ...props
                                         }) => {
    const dispatchNavbar = useNavbarDispatch()

    const close = () => {
        closeOnClick && dispatchNavbar({type: NavbarActionType.Close})
    }

    return (
        <div className={classNames('flex flex-col justify-center')} onClick={close}>
            <Link to={to}>{children}</Link>
        </div>
    );
};

export default NavbarLink;