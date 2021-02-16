import React from "react"

const IndexPage = () => {
  return (
    <div className="min-h-screen bg-green-900 flex flex-col items-start text-gray-900 antialiased relative">
      <div
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 100%)",
          height: "34rem",
        }}
        className="absolute bg-green-800 inset-x-0 top-0"
      ></div>
      <div className="mx-auto z-10 mt-48 text-center">
        <h1 className="text-white text-5xl font-semibold">
          Welcome to <span className="text-yellow-500">the Club</span>
        </h1>
        <p className="text-green-200 mt-2">
          Become a new member in 3 easy steps
        </p>
      </div>
      <div className="max-w-xl w-full mt-24 mb-24 rounded-lg shadow-2xl bg-white mx-auto overflow-hidden z-10">
        <div className="px-16 py-10">
          <form>
            <h2 className="font-semibold text-3xl mb-8">
              Personal Information
            </h2>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className="text-input"
            />
            <h2 className="font-semibold text-3xl mb-8">Billing Information</h2>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              className="text-input"
            />
            <h2 className="font-semibold text-3xl mb-8">Legal Information</h2>
            <div className="block mt-6">
              <input
                name="toc"
                className="p-3 text-green-600 rounded mr-3 border-2 border-gray-300 ring-0 focus:ring-0 focus:ring-offset-0 focus:border-0 cursor-pointer"
                type="checkbox"
              />
              <span>
                I accept the{" "}
                <a className="text-blue-400 underline" href="/">
                  Terms and Conditions
                </a>
                .
              </span>
            </div>
            <div className="block mt-6">
              <input
                name="pp"
                className="p-3 text-green-600 rounded mr-3 border-2 border-gray-300 ring-0 focus:ring-0 focus:ring-offset-0 focus:border-0 cursor-pointer"
                type="checkbox"
              />
              <span>
                I accept the{" "}
                <a className="text-blue-400 underline" href="/">
                  Privacy Policy
                </a>
                .
              </span>
            </div>
            <button
              type="submit"
              className="mt-6 bg-green-600 text-white rounded px-8 py-6 w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
