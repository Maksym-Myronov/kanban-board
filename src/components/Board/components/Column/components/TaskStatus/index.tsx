'use client';

import React, { useState, useCallback } from 'react';
import { COLUMNS } from '@/components/Board';
import { useAppDispatch } from '@/hooks/useStore';
import { updateTaskStatus } from '@/store/mockDataSlice';
import { Column as ColumnType } from '@/core/types';
import { MockStatus } from '@/core/enum';

import s from './index.module.scss';

interface TaskProps {
    status: string;
    id: string;
}

export const TaskStatus = ({ status, id }: TaskProps) => {
    const [initialStatus, setInitialStatus] = useState<string>(status);
    const dispatch = useAppDispatch();

    const current = COLUMNS.find(col => col.id === initialStatus);
    const otherStatuses = COLUMNS.filter(col => col.id !== initialStatus);

    const handleUpdateStatus = useCallback(
        (e: React.ChangeEvent<HTMLSelectElement>) => {
            const newStatus = e.target.value;
            setInitialStatus(newStatus);

            dispatch(
                updateTaskStatus({
                    id,
                    status: newStatus as ColumnType['id'],
                }),
            );
        },
        [dispatch, id],
    );

    const getStatusColor = (status: string) => {
        switch (status) {
            case MockStatus.FirstStatus:
                return '#dcdcdc';
            case MockStatus.SecondStatus:
                return '#4186f4';
            default:
                return '#22c55e';
        }
    };

    return (
        <div className={s.status}>
            <select
                value={initialStatus}
                onChange={handleUpdateStatus}
                className={s.status__select}
                onClick={e => e.stopPropagation()}
                style={{
                    background: getStatusColor(initialStatus),
                    color: '#fff',
                    appearance: 'none',
                    WebkitAppearance: 'none',
                    MozAppearance: 'none',
                }}
            >
                <option value={current?.id} hidden>
                    {current?.title}
                </option>
                {otherStatuses.map(col => (
                    <option
                        key={col.id}
                        value={col.id}
                        className={s.status__option}
                        style={{ background: '#fff', color: '#000' }}
                    >
                        {col.title}
                    </option>
                ))}
            </select>
        </div>
    );
};
