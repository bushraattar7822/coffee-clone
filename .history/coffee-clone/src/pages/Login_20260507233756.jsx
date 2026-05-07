export default function Login() {
  const buttonClass =
    "rounded-full bg-[#118acb] px-12 py-4 text-[15px] font-black uppercase text-white transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#0b6f9f] hover:shadow-[0_10px_22px_rgba(17,138,203,0.35)]";

  return (
    <main className="min-h-screen bg-white px-6 py-20 text-center font-['Nunito'] text-[#24282a]">
      <h1 className="mx-auto max-w-[760px] text-[68px] font-black leading-tight tracking-[-0.04em]">
        Welcome to the New Joe Store
      </h1>

      <div className="mx-auto mt-10 max-w-[760px] space-y-5 text-[16px] font-black leading-7">
        <p>
          If you already had an account with us, don’t worry. You just need to
          create a new one using the same email address and set a new password.
        </p>
        <p>
          If you are new here, welcome. Creating an account is quick and easy,
          and it is the best way to get started with Joe.
        </p>
      </div>

      <h2 className="mt-16 text-[34px] font-black">New & Existing Customers</h2>

      <button className={`mt-8 ${buttonClass}`}>
        Register Your New Account
      </button>

      <h2 className="mt-14 text-[30px] font-black">Login Here</h2>

      <form className="mx-auto mt-10 max-w-[460px] space-y-5">
        <input
          className="h-[48px] w-full rounded-full border px-4 text-[15px] font-black outline-none transition-all duration-300 focus:border-[#118acb] focus:shadow-[0_0_0_3px_rgba(17,138,203,0.15)]"
          placeholder="Email"
        />

        <div className="flex h-[48px] items-center rounded-full border px-4 transition-all duration-300 focus-within:border-[#118acb] focus-within:shadow-[0_0_0_3px_rgba(17,138,203,0.15)]">
          <input
            className="flex-1 text-[15px] font-black outline-none"
            placeholder="Password"
            type="password"
          />
          <button
            type="button"
            className="text-[14px] font-black transition-colors hover:text-[#118acb] hover:underline"
          >
            Forgot Your Password?
          </button>
        </div>

        <button type="submit" className={buttonClass}>
          Sign In
        </button>
      </form>
    </main>
  );
}
