import Head from "next/head";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const router = useRouter();
 

  return (
    <Link
      href={href}
      passHref
  
      >
      {children}
    </Link>
    );
};
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
            
            <span className="block text-4xl font-bold">Explore Hackathon</span>
          </h1>
          <div className="flex justify-center">
            <button className="btn btn-primary">Create Hackathon</button>
          </div>

        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <input type="text" placeholder="Search Hackathon" className="input w-full max-w-xs" /> <button className="btn btn-primary">Search</button>
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <NavLink href="/hackathon/panda">
              <div className="card w-96 bg-base-100 shadow-xl mt-5  p-4 cursor-pointer hover:bg-gray-100 focus:outline-none">
                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
              </div>
            </NavLink>
        
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
