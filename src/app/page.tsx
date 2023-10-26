import Link from 'next/link'

export default function Home() {
  return (
    <main className="w-3/4 flex-col items-center">
      "Hello Everynyan." "Oh my gaa."
       Welcome to the Landing Page.
       <div className="grid grid-cols-2">
          <Link href="/dashboard"><div className="bg-black/50 rounded-lg p-4 py-16 m-4 flex justify-center hover:scale-105">Guest Login ⛄︎</div></Link>
          <Link href="/auth/login"><div className="bg-black/50 rounded-lg p-4 py-16 m-4 flex justify-center hover:scale-105">Login with your account</div></Link>
       </div>
    </main>
  )
}
