import { updateTaskStatus } from '@/core/data/index';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const { status } = await request.json();

    try {
        const updatedTask = await updateTaskStatus(id, status);
        return NextResponse.json({ updatedTask }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}
