import { NextResponse, type NextRequest } from 'next/server'
export function middleware(req: NextRequest) {
  return NextResponse.redirect(new URL('/home', req.url))
}
