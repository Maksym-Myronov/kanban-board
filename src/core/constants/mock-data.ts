import { Task } from '@/core/types/index';
import { MockDescription, MockId, MockTitle, MockStatus } from '../enum/index';

export const INITIAL_TASKS: Task[] = [
    {
        id: MockId.FirstId,
        title: MockTitle.FirstTitle,
        description: MockDescription.FirstDescription,
        status: MockStatus.FirstStatus,
    },
    {
        id: MockId.SecondId,
        title: MockTitle.SecondTitle,
        description: MockDescription.SecondDescription,
        status: MockStatus.FirstStatus,
    },
    {
        id: MockId.ThridId,
        title: MockTitle.ThridTitle,
        description: MockDescription.ThridDescription,
        status: MockStatus.SecondStatus,
    },
    {
        id: MockId.FourthId,
        title: MockTitle.FourthTitle,
        description: MockDescription.FourthDescription,
        status: MockStatus.ThridStatus,
    },
];
