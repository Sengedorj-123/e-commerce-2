import Link from "next/link";
export const Header = () => {
  return (
    <div className="container m-auto flex gap-[20px] justify-between pt-[10px] items-center">
      <div className="flex">
        <div className="flex">
          <img
            className="w-[80px]"
            src="https://cdn-icons-png.flaticon.com/128/15687/15687120.png"
            alt=""
          />
          <h1 className="font-[600] mt-[30px] text-[30px]">Batman's Shop</h1>
        </div>
      </div>
      <div className="flex  items-center gap-3 ">
        <div className="w-[50px]">
          <img
            src="https://cdn-icons-png.flaticon.com/128/756/756940.png"
            alt=""
          />
        </div>
        <Link href={"login-page"}>
          <div className="w-[70px] h-[70px]">
            <img
              className="w-[50px]"
              src="https://cdn-icons-png.flaticon.com/128/11235/11235804.png"
              alt=""
            />
            <h1>Nevtreh</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};
