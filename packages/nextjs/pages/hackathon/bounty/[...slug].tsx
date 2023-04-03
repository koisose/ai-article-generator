import Head from "next/head";
import Link from "next/link";
import type { NextPage } from "next";
import { BugAntIcon, SparklesIcon } from "@heroicons/react/24/outline";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Scaffold-eth App</title>
        <meta name="description" content="Created with 🏗 scaffold-eth" />
      </Head>

      <div className="flex items-center flex-col flex-grow pt-10">
        <div >
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">CMEBUM</span>
            <span className="block text-4xl font-bold">Dethon</span>
          </h1>
          <div className="flex justify-center">
            <button className="btn btn-primary">Create Hackathon</button>
          </div>

        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <input type="text" placeholder="Search Hackathon" className="input w-full max-w-xs" /> <button className="btn btn-primary">Search</button>
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">

            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <h1 className="text-center ">

                <span className="block text-4xl font-bold">Step 1</span>
              </h1>
              <p>
               Hackathon owner  create the project and fund it and put deadline of the hackathon
                , and also deadline of choosing winner by the hackathon creator
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <h1 className="text-center ">

                <span className="block text-4xl font-bold">Step 2</span>
              </h1>
              <p>
                Let people choose which bounty they like to finish
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <h1 className="text-center ">

                <span className="block text-4xl font-bold">Step 3</span>
              </h1>
              <p>
                Hackathon owner can choose to stop the hackathon, but should be before hackathon ends, if after the hackathon ends they decide
                to stop it, they will be banned from creating hackathon ever again, they can reinstate their account by voting of user who has won bounty before
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <h1 className="text-center ">

                <span className="block text-4xl font-bold">Step 4</span>
              </h1>
              <p>
                After hackathon finished the owner of hackathon need to pick winner before choosing winner deadline, they can also not pick any project as the winner and stop the hackathon but should be before hackathon choosing winner deadline ends,if after the deadline ends they choose to stop it again they will be banned from creating hackathon
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
