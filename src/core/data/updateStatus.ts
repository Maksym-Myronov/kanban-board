export async function updateTaskStatus(taskId: string, newStatus: string) {
    const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
    });

    if (!response.ok) {
        throw new Error('Failed to update task status');
    }

    return response.json();
}
