import { FC, PropsWithChildren } from 'react';
import cx from 'classnames';
import { CustomButtonVariants } from '@/core/enum';

import s from './index.module.scss';

interface CustomButtonProps {
    classes?: string;
    variant?: string;
    isLoading?: boolean;
    disabled?: boolean;
    handleClick?: () => void;
    id?: string;
}

export const CustomButton: FC<PropsWithChildren<CustomButtonProps>> = ({
    classes,
    variant = 'contained',
    isLoading = false,
    disabled = false,
    handleClick,
    children,
    ...props
}) => {
    return (
        <button
            className={cx(s.button, classes, {
                [s.button__text]: variant === CustomButtonVariants.Text,
                [s.button__contained]: variant === CustomButtonVariants.Contained,
                [s.button__outlined]: variant === CustomButtonVariants.Outlined,
            })}
            disabled={isLoading || disabled}
            {...props}
            onClick={handleClick}
        >
            {children}

            {/* TODO: add circular progress loading */}
            {isLoading && <div>Loading...</div>}
        </button>
    );
};
