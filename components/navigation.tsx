import Link from "next/link"

export default function NavBar() {
    return(
        <div className="flex flex-row w-dvw justify-center space-x-7 pt-7 bg-black">
            <Link href="/">Home</Link>
            <Link href="/maps">Maps</Link>
        </div>
    )
}