import Link from "next/link";

export const SignUp = () => {
  return (
    <div className=" container m-auto flex justify-center items-center h-[1200px]">
      <div className="flex justify-center items-center flex-col">
        <Link href={"/"}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/15687/15687120.png"
            alt=""
          />
        </Link>
        <form
          action=""
          className="flex flex-col justify-center items-center gap-5"
        >
          <label className="w-[350px] bg-[#F3F4F6] input input-bordered flex items-center gap-2">
            <input
              type="text"
              name="name"
              className="grow"
              placeholder="Name"
              required
            />
          </label>
          <img
            className=" absolute top-[420px] left-[830px]"
            src="https://cdn-icons-png.flaticon.com/128/6577/6577645.png"
            alt=""
          />
          <img
            className="absolute top-[420px] right-[840px]"
            src="https://cdn-icons-png.flaticon.com/128/14637/14637736.png"
            alt=""
          />
          <label className="bg-[#F3F4F6] w-[350px] input input-bordered flex items-center gap-2">
            <input
              type="text"
              name="email"
              className="grow"
              placeholder="Email"
              required
            />
          </label>
          <label className="bg-[#F3F4F6] w-[350px] input input-bordered flex items-center gap-2">
            <input
              type="password"
              name="password"
              className="grow"
              placeholder="Password"
              required
            />
          </label>
          <label className="bg-[#F3F4F6] w-[350px] input input-bordered flex items-center gap-2">
            <input
              type="password"
              name="rePassword"
              className="grow"
              placeholder="Re-password"
              required
            />
          </label>
          <Link href={"login-page"}>
            <h1 className="text-blue-500">Already have account?</h1>
          </Link>
          <button
            type="submit"
            className="w-[350px] btn bg-[#3172fe] rounded-[20px]"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};
