import React, {FC} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import classNames from "classnames";
import {Button, ButtonVariant} from "@/shared/ui/Button/Button";
import {Typo, TypoVariant} from "@/shared/ui/Typo/Typo";
import IndevIcon from './assets/Indev.svg'
import HomeIcon from './assets/Home.svg'
import {TypoAlign} from "@/shared/ui/Typo/types";
import {Footer} from "@/widgets/Footer/ui/Footer";

interface IndevPageProps {
    homeLink?: string,
    homeText?: string,
}

const IndevPage: FC<IndevPageProps> = ({
                                           homeLink = '/',
                                           homeText = 'Home Page',
                                       }) => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div>
            <div className={classNames('min-h-screen flex flex-col justify-center')}>
                <Button
                    variant={ButtonVariant.Primary}
                    border
                    className={classNames('absolute top-20 left-4 p-3')}
                    onClick={() => {
                        navigate(-1)
                    }}
                >Go Back</Button>
                <div className={classNames('flex flex-col items-center gap-6')}>
                    <div className={classNames('flex w-full justify-center gap-2')}>
                        <Typo.H2 className={classNames('w-fit')}>Under Development</Typo.H2>
                        <IndevIcon/>
                    </div>
                    <Button
                        variant={ButtonVariant.Primary}
                        border
                        className={classNames('px-4 py-2 items-center gap-1')}
                        onClick={() => navigate(homeLink)}
                    >
                        <HomeIcon/>
                        {homeText}
                    </Button>
                    <Typo.H3 variant={TypoVariant.SecondaryLight} align={TypoAlign.Center}>
                        {location.pathname}
                    </Typo.H3>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default IndevPage;