import React from 'react';
import { Header, Board, InfoSideBar } from '@/components';

import s from './index.module.scss';

const Main = () => {
    return (
        <div className={s.main}>
            <Header />
            <div className={s.main__board}>
                <Board />
                <InfoSideBar />
            </div>
        </div>
    );
};

export default Main;
