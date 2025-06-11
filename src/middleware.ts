import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(request: NextRequest) {
    const token = await getToken({ req: request, secret });
    const { pathname } = request.nextUrl;

    const isProtectedRoute = pathname.startsWith('/main');
    const isRootRoute = pathname === '/';

    if (!token && isProtectedRoute) {
        const loginUrl = new URL('/', request.url);
        return NextResponse.redirect(loginUrl);
    }

    if (token && isRootRoute) {
        const mainUrl = new URL('/main', request.url);
        return NextResponse.redirect(mainUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/', '/main/:path*'],
};
