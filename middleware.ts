import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const enabled = process.env.UNDERCONSTRUCTION === '1'
  if (!enabled) return NextResponse.next()

  const { pathname } = req.nextUrl
  const isUC = pathname.startsWith('/under-construction')
  const isNextAsset = pathname.startsWith('/_next')
  const isAsset = /\.(png|jpg|jpeg|svg|ico|webp|css|js|woff2?)$/i.test(pathname)

  if (isUC || isNextAsset || isAsset) {
    return NextResponse.next()
  }

  const url = req.nextUrl.clone()
  url.pathname = '/under-construction'
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: ['/((?!api).*)'],
}
