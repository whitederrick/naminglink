import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AdminLoginPanel } from "@/components/AdminLoginPanel";
export default function Page() { return <main className="min-h-screen bg-background"><section className="mx-auto grid w-full max-w-xl gap-6 px-5 py-10 sm:px-8"><Link href="/" className="inline-flex items-center gap-2 text-sm"><ArrowLeft size={17}/>Naming-Link</Link><div><p className="text-sm font-semibold text-brand-teal">Naming Artist</p><h1 className="mt-3 text-3xl font-semibold">운영자 로그인</h1><p className="mt-3 text-sm leading-6 text-muted">관리자 권한이 등록된 계정만 운영 콘솔에 접속할 수 있습니다.</p></div><AdminLoginPanel /></section></main>; }
