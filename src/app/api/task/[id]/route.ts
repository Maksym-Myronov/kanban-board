import { NextRequest, NextResponse } from 'next/server';
import { updateTaskStatus } from '@/core/data/index';

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    const { status } = await req.json();

    try {
        const updatedTask = await updateTaskStatus(id, status);
        return NextResponse.json({ updatedTask }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
