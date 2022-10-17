import type { NextPage } from "next";
import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Real Time Polls</title>
        <meta
          name="description"
          content="Create polls and see real time results, along with more in depth
              set up options."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-50">
        <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
          <div className="rounded-lg bg-white p-10 shadow-lg">
            <h1 className="mb-5 text-4xl font-bold">Real-time Polls</h1>
            <p className="mb-5">
              Create polls and see real time results, along with more in depth
              set up options.
            </p>

            {session ? (
              <div>
                <p>hi {session.user?.name}</p>

                <button onClick={() => signOut()}>Logout</button>
              </div>
            ) : (
              <div className="text-center">
                <button
                  className="mb-5 min-w-full bg-indigo-600 py-2 px-10 font-semibold text-slate-200 shadow-lg"
                  onClick={() => signIn("discord")}
                >
                  Login with Discord
                </button>
                <button
                  className="min-w-full bg-red-700 py-2 px-10 font-semibold text-slate-200 shadow-lg"
                  onClick={() => signIn("google")}
                >
                  Login with Google
                </button>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
