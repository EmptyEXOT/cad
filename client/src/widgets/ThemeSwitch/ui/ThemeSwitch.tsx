import { useTheme } from "@/shared/theme/hooks/useTheme";
import { useThemeDispatch } from "@/shared/theme/hooks/useThemeDispatch";
import { ThemeActionsType } from "@/shared/theme/types";
import { Button, ButtonVariant } from "@/shared/ui/Button/Button";
import { FC, ReactNode } from 'react';

interface ThemeSwitchProps {
    children?: ReactNode,
}

export const ThemeSwitch: FC<ThemeSwitchProps> = () => {
    const dispatch = useThemeDispatch()
    const {theme} = useTheme()

    const onSwitch = () => {
        dispatch({type: ThemeActionsType.Switch})
    }

    return (
        <Button variant={ButtonVariant.Primary} onClick={onSwitch}>
            {theme}
        </Button>
    );
};
