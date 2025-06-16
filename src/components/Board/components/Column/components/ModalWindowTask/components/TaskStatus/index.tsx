'use client';

import React, { useState, useCallback } from 'react';
import { COLUMNS } from '@/components/Board';
import { useAppDispatch } from '@/hooks/useStore';
import { updateTaskStatus } from '@/store/mockDataSlice';
import { Column as ColumnType } from '@/core/types';

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

    return (
        <div className={s.statusContainer}>
            <select
                value={initialStatus}
                onChange={handleUpdateStatus}
                className={s.select}
                onClick={e => e.stopPropagation()}
            >
                <option value={current?.id} hidden>
                    {current?.title}
                </option>
                {otherStatuses.map(col => (
                    <option key={col.id} value={col.id}>
                        {col.title}
                    </option>
                ))}
            </select>
        </div>
    );
};
