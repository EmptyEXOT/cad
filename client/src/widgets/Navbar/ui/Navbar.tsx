import Logo from '@/shared/assets/Logo.png';
import Burger from "@/shared/ui/Burger/Burger";
import { Button, ButtonVariant } from "@/shared/ui/Button/Button";
import { Section } from "@/shared/ui/Section/Section";
import classNames from "classnames";
import { FC, ReactNode } from 'react';
import { useNavbar } from "../hooks/useNavbar";
import { useNavbarDispatch } from "../hooks/useNavbarDispatch";
import { NavbarActionType } from "../types";
import { Menu } from "./Menu/Menu";
import cls from "./Navbar.module.scss";
import { Navigation } from "./Navigation/Navigation";

interface NavbarProps {
    children?: ReactNode
    className?: string | undefined;
}

export const Navbar: FC<NavbarProps> = () => {
    const {isOpen} = useNavbar()
    const dispatchNavbar = useNavbarDispatch()

    const switchIsOpen = () => {
        dispatchNavbar({type: NavbarActionType.Switch})
    }

    return (
        <>
            <div
                className={classNames('bg-primary-light md:bg-primary-light z-50 bg-opacity-100 md:bg-opacity-50 backdrop-blur-md border-solid border-b-2 border-b-neutral-250', cls.navbar)}>
                    <Section className={classNames(
                        'gap-2 w-full flex justify-between bg-opacity-0',
                        'relative overflow-hidden',
                        'z-50 py-3',
                        '2xl:max-w-[1536px]',

                    )}>
                        <div className={classNames('flex gap-6')}>
                            <div className={classNames('flex flex-col justify-center w-full')}>
                                <img width={30} src={Logo} alt=""/>
                            </div>
                        </div>
                        <div className={classNames('flex gap-2')}>
                            <Navigation className={classNames('hidden md:flex')}/>
                            <Button onClick={switchIsOpen}
                                    variant={ButtonVariant.Primary}
                                    className={classNames('pe-0 md:!hidden')}>
                                <Burger isOpen={isOpen}/>
                            </Button>
                        </div>
                    </Section>

                </div>
            <Menu className={classNames('md:hidden')}/>
        </>
    );
};