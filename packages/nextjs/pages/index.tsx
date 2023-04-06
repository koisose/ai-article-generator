import Head from "next/head";
import type {NextPage} from "next";
import Link from "next/link";

const NavLink = ({href, children}: { href: string; children: React.ReactNode }) => {


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
                <title>AI Decentralized Substack</title>
                <meta name="description" content="Created with 🏗 scaffold-eth"/>
            </Head>

            <div className="flex items-center flex-col flex-grow pt-10">
                <div className="px-5">
                    <h1 className="text-center mb-8">
                        <span className="block text-2xl mb-2">AI Decentralized Substack</span>
                        <span className="block text-4xl font-bold">Article creator</span>
                    </h1>
                    <p className="text-center text-lg">
                        With this AI article generator create a random article and sell it like you did in substack
                    </p>

                </div>

                <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">

                    <div className="flex justify-center">
                      {/* The button to open modal */}
                      <label htmlFor="my-modal-3" className="btn">Create Article</label>

                      {/* Put this part before </body> tag */}
                      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                      <div className="modal">
                      <div className="modal-box relative w-11/12 max-w-5xl" htmlFor="">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                          <div className="flex flex-col items-center space-y-4 ">
                            <h3 className="text-lg font-bold text-center">Create article</h3>
                            <p>
                              You can generate random article if you set open ai key in
                              <a href="/settings" className="mx-1">
                                <b>Settings</b>
                              </a>
                            </p>
                            <button className="btn btn-accent">Generate</button>
                          </div>
                          <div className="flex justify-center">
                            <div className="form-control w-full max-w-xs text-center">
                              <label className="label">
                                <span className="label-text font-bold text-lg">Title</span>
                              </label>
                              <input type="text" placeholder="Title" className="input input-bordered w-full max-w-xs" />
                            </div>
                          </div>
                          <div className="flex justify-center">
                            <div className="form-control w-full max-w-xs text-center">
                              <label className="label">
                                <span className="label-text font-bold text-lg">Image URL</span>
                              </label>
                              <input type="text" placeholder="Image URL" className="input input-bordered w-full max-w-xs" />
                            </div>
                          </div>
                          <div className="flex justify-center w-full">
                            <div className="form-control w-full text-center">
                              <label className="label">
                                <span className="label-text font-bold text-lg">Article Markdown</span>
                                <button className="btn btn-accent">Preview</button>
                              </label>
                              <textarea className="textarea-primary w-full h-24" placeholder="Article Text Markdown"></textarea>
                            </div>
                          </div>
                          <button className="btn btn-accent my-5">Save article</button>
                      </div>
                      </div>



                    </div>
                    <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
                        <NavLink href="/hackathon/panda">
                            <div
                                className="card w-96 bg-base-100 shadow-xl mt-5  p-4 cursor-pointer hover:bg-gray-100 focus:outline-none">
                                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes"/>
                                </figure>
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
