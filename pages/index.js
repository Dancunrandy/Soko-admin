import { useSession, signIn, signOut } from "next-auth/react"
import Nav from '@/components/Nav';
export default function Home() {
  const { data: session } = useSession()
  if (!session){
    return (
      <div className="bg-silver-900 w-screen h-screen flex items-center">
      <div className="text-center w-full">
        <button onClick={() => signIn('google')} className="bg-white p-2 px-4 rounded-lg">Login with Google</button>
      </div>
    </div>
    );
  }
  return (
    <div>
    <Nav/>
    logged in {session.user.email}
    </div>
  )
}
