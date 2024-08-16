import { useNavbar } from "@/widgets/Navbar/hooks/useNavbar";
import { Navigation } from "@/widgets/Navbar/ui/Navigation/Navigation";
import classNames from "classnames";
import { FC } from 'react';
import cls from './Menu.module.scss';

interface MenuProps {
    className?: string
}

export const Menu: FC<MenuProps> = ({ className }) => {
    const { isOpen } = useNavbar()

    return (
        <div
            className={classNames(
                'px-4 fixed flex gap-5 top-8 bottom-0 md:bottom-auto bg-primary-light pt-8 justify-start z-40 w-screen bg-opacity-65 backdrop-blur-md overflow-y-scroll',
                'md:pt-2 md:justify-evenly md:border-b-2 border-b-neutral-500',
                cls.menuWrapper,
                isOpen ? cls.open : cls.close,
                className
            )}>
            <Navigation />
        </div>
    );
};
