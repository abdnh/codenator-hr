// Adapted from https://github.com/vercel/next.js/tree/canary/examples/with-iron-session

import { useEffect } from 'react'
import Router from 'next/router'
import useSWR from 'swr'

export default function useUser({
    redirectTo = '',
    redirectIfFound = false,
} = {}) {
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data: user, mutate: mutateUser } = useSWR('/api/user', fetcher)
    useEffect(() => {
        // if no redirect needed, just return
        // if user data not yet there (fetch in progress, logged in or not) then don't do anything yet
        if (!redirectTo || !user) return
        if (
            // If redirectTo is set, redirect if the user was not found.
            (redirectTo && !redirectIfFound && !user.loggedIn) ||
            // If redirectIfFound is also set, redirect if the user was found
            (redirectIfFound && user.loggedIn)
        ) {
            Router.push(redirectTo)
        }
    }, [user, redirectIfFound, redirectTo])

    return { user, mutateUser }
}
