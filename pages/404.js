import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
           // router.go(-1) --> previous page like history()
           router.push('/');
        }, 3000)
    }, []); // fire auto after 3sec to redirect the user

    return (
        <div className="not-found">
            <h2>Ooops....</h2>
            <h2>That page cannot be found</h2>
            <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
        </div>
    )
}

export default NotFound
