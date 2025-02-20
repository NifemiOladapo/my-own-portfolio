import Image from "next/image";
import Navbar from "../../../components/Navbar";
import Link from "next/link";

const SignIn = () => {
  return (
    <div className="bg-neutral min-h-dvh text-accent">
      <Navbar />
      <div className="px-5">
        <div className="max-w-7xl flex-col lg:flex-row w-full gap-10 mx-auto mt-12 flex justify-between items-center">
          <div className="flex max-w-[400px] flex-col md:max-w-[586px]">
            <h1 className="mb-4 text-[35px] font-bold leading-[48px] tracking-[-0.025em] md:text-[40px] lg:text-[54px] lg:leading-[67.2px]">
              Welcome Back
            </h1>
            <p className="mb-6 text-base md:text-2xl">
              Sign in to continue your journey with us. Access your account and enjoy our platform's features.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full py-3 px-6 bg-neutral-light text-neutral text-base rounded"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full py-3 px-6 bg-neutral-light text-neutral text-base rounded"
              />
              <button
                type="submit"
                className="w-full py-3 px-6 bg-secondary text-neutral text-base font-medium rounded"
              >
                Sign In
              </button>
            </form>
            <div className="mt-4 text-center">
              <p className="text-sm text-accent">
                New Around Here? &nbsp;
              <Link href={"/auth/signup"} className="font-bold">Sign Up</Link>
              </p>
            </div>
          </div>
          <Image
            src={"/images/img.jpeg"}
            alt="Sign In Image"
            layout="responsive"
            width={500}
            height={500}
            className="max-h-[639px] hidden lg:block max-w-[553px] w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
