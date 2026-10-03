import { createAuthClient } from "better-auth/react"
//createAuthClient() → Better Auth-এর frontend client তৈরি করে।এই client-এর মাধ্যমে frontend থেকে আমরা authentication-related কাজ করতে পারি।(signIn,signUp)
export const authClient = createAuthClient({
    /** Better Auth server কোথায় আছে সেটা বলে। */
    baseURL: process.env.BETTER_AUTH_URL
})

export const { signIn, signUp, useSession ,signOut } = authClient;