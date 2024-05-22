import Link from "next/link";

export default async function Index() {
    return (
        <div>
            <h2>Hello</h2>
            <Link href="/login">Login</Link>
        </div>
    );
}
