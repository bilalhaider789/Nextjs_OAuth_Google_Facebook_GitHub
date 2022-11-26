import { useSession,signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Profile() {
  const { data: session, status } = useSession()
  const router= useRouter()



  if (status === "authenticated") {
    return <div>
      <p>Signed in as {session.user.email} welcome to profile {session.user.name}</p>
      <button onClick={()=>signOut({ callbackUrl: 'http://localhost:3000/login' })}> logout</button>
      </div>

  }
  if(status==="unauthenticated"){
    router.replace("/login")
  }
  return(
    <div>Lodding</div>
  )
}