import { INITIAL_TASKS } from '@/core/constants';

export async function getTasks() {
    // const res = await fetch('');
    // if (!res.ok) throw new Error('Failed to fetch tasks');
    // return res.json();
    return INITIAL_TASKS;
}
