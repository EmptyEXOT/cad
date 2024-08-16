import React, {FC, ReactNode} from 'react';
import {ButtonVariant, Button} from "@/shared/ui/Button/Button";
import {useThemeDispatch} from "@/shared/theme/hooks/useThemeDispatch";
import {ThemeActionsType} from "@/shared/theme/types";
import {useTheme} from "@/shared/theme/hooks/useTheme";

interface ThemeSwitchProps {
    children?: ReactNode,
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({
                                                      children,
                                                      ...props
                                                  }) => {
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
