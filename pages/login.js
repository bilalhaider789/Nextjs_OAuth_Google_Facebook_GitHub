
import {signIn} from "next-auth/react"

export default function(){


    async function HandleGoogleSignIn(){
        signIn('google',{callbackUrl:"http://localhost:3000/"})
    }
    async function HandleFBSignIn(){
        signIn('facebook',{callbackUrl:"http://localhost:3000/"})
    }
    async function HandleGitSignIn(){
        signIn('github',{callbackUrl:"http://localhost:3000/"})
    }

    return(
        <div>
            <h3>login page</h3>
            <button onClick={HandleGoogleSignIn}>sign in with google</button>
            
            <h3>fb login</h3>
            <button onClick={HandleFBSignIn}>sign in with fb</button>

            <h3>Github login</h3>
            <button onClick={HandleGitSignIn}>sign in with Github</button>
        </div>
    )
}