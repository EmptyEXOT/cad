import classNames from "classnames";
import { FC, ReactNode, useEffect } from 'react';
import cls from "./Modal.module.scss";
import { useModal } from "./hooks/useModal";
import { useModalDispatch } from "./hooks/useModalDispatch";
import { ModalActionType } from "./types";

interface ModalProps {
    children?: ReactNode
    className?: string | undefined;
}

export const Modal: FC<ModalProps> = (
    {
        children,
        ...props
    }
) => {
    const isModalOpen = useModal()
    const modalDispatch = useModalDispatch()
    const onEscapeKeydown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') modalDispatch({ type: ModalActionType.Close })
    }
    useEffect(() => {
        window.addEventListener('keydown', onEscapeKeydown)
        if (!isModalOpen) {
            window.removeEventListener('keydown', onEscapeKeydown)
        }
        return () => window.removeEventListener('keydown', onEscapeKeydown)
    }, [isModalOpen]);

    return (
        <>
            <div onClick={() => {
                modalDispatch({ type: ModalActionType.Close })
            }}
                className={classNames(isModalOpen ? ('fixed w-screen h-screen top-0 bottom-0 z-40 bg-primary-dark opacity-50') : 'hidden')} />
            <div className={classNames(cls.modal, isModalOpen ? 'fixed z-50 top-[50%] max-h-[80vh] overflow-scroll' : 'hidden', props.className)}>
                {children}
            </div>
        </>

    );
};
