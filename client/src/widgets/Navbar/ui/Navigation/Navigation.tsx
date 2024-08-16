import { useBreakpoint } from '@/shared/hooks/useBreakpoint';
import { Dropdown } from "@/shared/ui/Dropdown/Dropdown/Dropdown";
import { DropdownProvider } from "@/shared/ui/Dropdown/provider/Dropdown.provider";
import { Menu } from "@/shared/ui/Menu/ui/Menu";
import { Typo } from "@/shared/ui/Typo/Typo";
import classNames from "classnames";
import { FC } from 'react';
import NavbarLink from "../NavbarLink";


interface NavigationProps {
    className?: string
}

export const Navigation: FC<NavigationProps> = ({ className }) => {
    const { isMd } = useBreakpoint('md')


    return (
        <div
            className={classNames('w-full flex flex-col md:flex-row gap-4 md:justify-between md:w-full', className)}>
            <NavbarLink to={'/'}><Typo.H3 className={classNames('text-contrast-dark')}>Main</Typo.H3></NavbarLink>
            <NavbarLink to={'app'}><Typo.H3 className={classNames('text-contrast-dark')}>App</Typo.H3></NavbarLink>
            <NavbarLink to={'news'}><Typo.H3 className={classNames('text-contrast-dark')}>News</Typo.H3></NavbarLink>
            {isMd ?
                <Menu anchor={<div><Typo.H3 className={classNames('text-contrast-dark')}>Exercises</Typo.H3></div>}
                    className={classNames(
                        'top-8 bg-primary-dark p-4 border border-solid border-neutral-500 rounded-xl flex flex-col gap-4 right-0'
                    )}>
                    <NavbarLink to={'app/coordination'}><Typo.H3 className={classNames('text-contrast-dark')}>Coordination</Typo.H3></NavbarLink>
                    <NavbarLink to={'app/alphabet'}><Typo.H3 className={classNames('text-contrast-dark')}>Alphabet</Typo.H3></NavbarLink>
                    <NavbarLink to={'app/rudiments'}><Typo.H3 className={classNames('text-contrast-dark')}>Rudiment</Typo.H3></NavbarLink>
                </Menu> :
                <DropdownProvider>
                    <Dropdown
                        title={<NavbarLink to={'app'}><Typo.H3 className={classNames('text-contrast-dark')}>Exercises</Typo.H3></NavbarLink>}
                        control={<Dropdown.Control />}
                    >
                        <div className={classNames(
                            'text-amber-600 w-full flex flex-col gap-4 pt-3',
                        )}>
                            <NavbarLink to={'app/coordination'}><Typo.H3 className={classNames('text-contrast-dark')}>Coordination</Typo.H3></NavbarLink>
                            <NavbarLink to={'app/alphabet'}><Typo.H3 className={classNames('text-contrast-dark')}>Alphabet</Typo.H3></NavbarLink>
                            <NavbarLink to={'app/rudiments'}><Typo.H3 className={classNames('text-contrast-dark')}>Rudiment</Typo.H3></NavbarLink>
                        </div>
                    </Dropdown>
                </DropdownProvider>
            }

        </div>
    );
};

