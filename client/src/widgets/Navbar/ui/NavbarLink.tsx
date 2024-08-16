import { useNavbarDispatch } from "@/widgets/Navbar/hooks/useNavbarDispatch";
import { NavbarActionType } from "@/widgets/Navbar/types";
import classNames from "classnames";
import { FC, ReactNode } from 'react';
import { Link } from "react-router-dom";

interface NavbarLinkProps {
    children: ReactNode,
    closeOnClick?: boolean,
    to: string,
}

const NavbarLink: FC<NavbarLinkProps> = ({
                                             children,
                                             closeOnClick = true,
                                             to,
                                         }) => {
    const dispatchNavbar = useNavbarDispatch()

    const close = () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        closeOnClick && dispatchNavbar({type: NavbarActionType.Close})
    }

    return (
        <div className={classNames('flex flex-col justify-center')} onClick={close}>
            <Link to={to}>{children}</Link>
        </div>
    );
};

export default NavbarLink;