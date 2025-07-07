import React from 'react';
import { Description, Title } from './components';

interface ModalWindowProps {
    description: string;
    title: string;
    id: string;
}

export const MainDescription = ({ id, description, title }: ModalWindowProps) => {
    return (
        <div>
            <Title title={title} />
            <Description id={id} description={description} />
        </div>
    );
};
