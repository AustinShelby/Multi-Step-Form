import React from "react"
import { useForm } from "react-hook-form"

const STEPS_AMOUNT = 3

const FinishSectionButton: React.FC<{
  onClick: () => void
  isDisabled: boolean
}> = ({ onClick, isDisabled, children }) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      type="button"
      className="mt-6 bg-green-500 text-white rounded py-6 w-full disabled:bg-gray-300 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  )
}

const IndexPage = () => {
  const [formStep, setFormStep] = React.useState(0)
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm({
    mode: "onChange",
  })

  const handleStepCompletion = () => {
    setFormStep(cur => cur + 1)
  }

  const handleGoBackToPreviousStep = () => {
    setFormStep(cur => cur - 1)
  }

  const onSubmit = (values): void => {
    console.log(JSON.stringify(values, null, 2))
    handleStepCompletion()
  }

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
      <div className="max-w-xl w-full mt-24 rounded-lg shadow-2xl bg-white mx-auto overflow-hidden z-10">
        <div className="h-2 bg-gray-200 w-full overflow-hidden">
          <div
            style={{ width: `${(formStep / STEPS_AMOUNT) * 100}%` }}
            className="h-full bg-yellow-400 transform duration-300 ease-out"
          ></div>
        </div>
        <div className="px-16 py-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            {formStep < STEPS_AMOUNT && (
              <div className="flex items-center font-medium mb-8">
                {formStep > 0 && (
                  <button
                    onClick={handleGoBackToPreviousStep}
                    type="button"
                    className="focus:outline-none"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      version="1.1"
                      className="w-6 mr-2 fill-current text-gray-300 hover:text-gray-400 focus:outline-none"
                    >
                      <polygon
                        id="Combined-Shape"
                        points="10 13 18 13 18 7 10 7 10 2 2 10 10 18 10 13"
                      ></polygon>
                    </svg>
                  </button>
                )}
                Step {formStep + 1} of {STEPS_AMOUNT}
              </div>
            )}
            {formStep >= 0 && (
              <section className={`${formStep === 0 ? "block" : "hidden"}`}>
                <h2 className="font-semibold text-3xl mb-8">
                  Personal Information
                </h2>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="text-input"
                  ref={register({
                    required: { message: "Please enter", value: true },
                    minLength: { message: "Minimum length 3", value: 3 },
                  })}
                />
                {errors.username && (
                  <p className="text-sm text-red-600 mt-2">
                    {errors.username.message}
                  </p>
                )}
                <FinishSectionButton
                  onClick={handleStepCompletion}
                  isDisabled={!isValid}
                >
                  Next
                </FinishSectionButton>
              </section>
            )}
            {formStep >= 1 && (
              <section className={`${formStep === 1 ? "block" : "hidden"}`}>
                <h2 className="font-semibold text-3xl mb-8">
                  Billing Information
                </h2>
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="text-input"
                  ref={register({
                    required: { message: "Please enter", value: true },
                  })}
                />
                {errors.address && (
                  <p className="text-sm text-red-600 mt-2">
                    {errors.address.message}
                  </p>
                )}
                <FinishSectionButton
                  onClick={handleStepCompletion}
                  isDisabled={!isValid}
                >
                  Next
                </FinishSectionButton>
              </section>
            )}
            {formStep >= 2 && (
              <section className={`${formStep === 2 ? "block" : "hidden"}`}>
                <h2 className="font-semibold text-3xl mb-8">
                  Legal Information
                </h2>
                <div className="block mt-6">
                  <input
                    ref={register({
                      required: true,
                    })}
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
                    ref={register({
                      required: true,
                    })}
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
                  disabled={!isValid}
                  type="submit"
                  className="mt-6 bg-green-600 text-white rounded px-8 py-6 w-full disabled:bg-gray-400"
                >
                  Create Account
                </button>
              </section>
            )}
            {formStep === 3 && (
              <section>
                <h2 className="font-semibold text-3xl mb-8">
                  Congratulations!
                </h2>
                <p>You can now sign in with your new account!</p>
              </section>
            )}
            {/* <p>{isValid ? "Valid" : "Invalid"}</p>
        <pre className="text-sm text-gray-700">
          {JSON.stringify(watch(), null, 2)}
        </pre> */}
          </form>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
