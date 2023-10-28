import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section image on the right */}
      <div
        className="2xl:flex 2xl:px-[200px] px-[50px] justify-between items-center py-[100px]"
        style={{
          backgroundImage: "url(/assets/bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          Height: "400px",
        }}
      >
        <div className="2xl:basis-[48%] max-w-[1200px]">
          <h1 className="text-white font-bold xl:text-[70px] text-[50px] leading-[50px] xl:leading-[70px]">
            ZedCar Connect: A Car Market Place
          </h1>
          <p className="text-[18px] text-white py-[15px]">
            Introducing ZedCar Connect, the one-stop solution for all your car
            buying and selling needs. With our user-friendly app, you can
            seamlessly navigate the world of automobiles and make the perfect
            connection.
          </p>
          <div className="flex gap-[30px] justify-start items-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.zedcar_connect"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/google.png"
                alt="bg"
                width={130}
                height={50}
                className="pt-[5px]"
              />
            </a>
            <a href="/assets/zedcarconnect.apk" download>
              <button className="bg-red text-white py-[10px] px-[20px] border-l-[5px] rounded">
                Download The App Today
              </button>
            </a>
          </div>
        </div>
        <div className="max-w-[1200px] mt-[20px] 2xl:mt-[0px]">
          <Image src="/assets/1.png" alt="bg" width={550} height={550} />
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto py-[200px] px-[50px]">
        <div className="flex justify-center items-center flex-col text-center">
          <h2 className="font-bold text-[50px] leading-[70px]">
            Explore Our App Features
          </h2>
          <p className="text-[18px] py-[15px]">
            Discover a world of features at your fingertips. From comprehensive
            car listings and seamless messaging to detailed user profiles,
            we&lsquo;ve got it all covered. Find, connect, and sell with ease.
          </p>
        </div>
      </div>

      {/* image on the right */}
      <div className="2xl:flex 2xl:px-[200px] px-[50px] justify-between items-center py-[100px] bg-bg">
        <div className="basis-[48%] max-w-[1200px]">
          <h2 className="font-bold text-[50px] leading-[50px]">
            Simplified Process
          </h2>
          <p className="text-[18px] py-[15px]">
            Our three-step process makes car buying and selling a breeze. Search
            for your dream car, list your vehicle hassle-free, and connect with
            buyers and sellers within minutes.
          </p>
          <ul className="list-disc pl-[15px]">
            <li>Search for cars using filters or keywords.</li>
            <li>List your car with detailed descriptions and images.</li>
            <li>
              Connect with potential buyers or sellers through our secure
              platform.
            </li>
          </ul>
        </div>
        <div className=" max-w-[1200px]">
          <Image src="/assets/2.png" alt="bg" width={550} height={550} />
        </div>
      </div>

      {/* image on the left */}
      <div className="flex flex-col 2xl:flex-row 2xl:px-[200px] px-[50px] justify-between items-center py-[100px]">
        <div className="max-w-[1200px] order-2 2xl:order-1">
          <Image src="/assets/13.png" alt="bg" width={550} height={550} />
        </div>
        <div className="basis-[48%] max-w-[1200px] order-1 2xl:order-2">
          <h2 className="font-bold text-[50px] leading-[50px]">
            Quick and Easy Sign-Up
          </h2>
          <p className="text-[18px] py-[15px]">
            Getting started with ZedCar Connect is a breeze. We&apos;ve designed
            a hassle-free sign-up process to help you join our community within
            minutes.
          </p>
          <ul className="list-disc pl-[15px]">
            <li>Sign up with your email, phone number, or social accounts.</li>
            <li>Log into your account with an email and password.</li>
            <li>Start exploring and connecting right after sign-up.</li>
          </ul>
        </div>
      </div>

      {/* image on the right */}
      <div className="2xl:flex 2xl:px-[200px] px-[50px] justify-between items-center py-[100px] bg-bg">
        <div className="basis-[48%] max-w-[1200px] pb-[50px] 2xl:pb-[0px]">
          <h2 className="font-bold text-[50px] leading-[50px]">
            Intuitive and User-Friendly
          </h2>
          <p className="text-[18px] py-[15px]">
            Our app is designed with you in mind. Experience a smooth and
            intuitive interface that makes your car buying and selling journey a
            joy.
          </p>
          <ul className="list-disc pl-[15px]">
            <li>Easy navigation with a simple and clean layout.</li>
            <li>Intuitive search and filter options.</li>
            <li>Seamless interactions with a modern design.</li>
          </ul>
        </div>
        <div className=" max-w-[1200px]">
          <Image src="/assets/14.png" alt="bg" width={550} height={550} />
        </div>
      </div>

      {/* image on the left */}
      <div className="flex flex-col 2xl:flex-row 2xl:px-[200px] px-[50px] justify-between items-center py-[100px]">
        <div className=" max-w-[1200px] order-2 2xl:order-1">
          <Image src="/assets/15.png" alt="bg" width={550} height={550} />
        </div>
        <div className="basis-[48%] max-w-[1200px] order-1 2xl:order-2 pb-[30px] 2xl:pb-[0px]">
          <h2 className="font-bold text-[50px] leading-[50px]">
            Effortless Account Management
          </h2>
          <p className="text-[18px] py-[15px]">
            Managing your account has never been easier. ZedCar Connect offers
            you all the tools you need to take control of your user profile.
          </p>
          <ul className="list-disc pl-[15px]">
            <li>Update your profile information with a few taps.</li>
            <li>Easily reset your login credentials.</li>
            <li>View all your listed cars in one place.</li>
          </ul>
        </div>
      </div>

      <div className="bg-bg px-[30px]">
        <div className="max-w-[1200px] mx-auto py-[200px]">
          <div className="flex justify-center items-center flex-col text-center">
            <h2 className="font-bold text-[50px] leading-[70px]">
              Get Started Today!
            </h2>
            <p className="text-[18px] py-[15px]">
              Ready to explore the world of cars? Download the ZedCar Connect
              app from play store, and start your journey today.
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.zedcar_connect"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/google.png"
                alt="bg"
                width={200}
                height={130}
                className="pt-[5px]"
              />
            </a>
          </div>
        </div>
      </div>

      {/* image on the right */}
      <div className="2xl:flex 2xl:px-[200px] px-[50px] justify-between items-center py-[100px] bg-primary relative overflow-hidden">
        <div className="basis-[48%] max-w-[1200px]">
          <h2 className="font-bold text-[50px] leading-[50px] text-red">
            Discover the Power of ZedCar Connect
          </h2>
          <div className="my-[20px]">
            <p className="text-[18px] py-[15px] text-white">
              ZedCar Connect offers a wealth of features tailored to enhance
              your car buying and selling experience. Explore the app&apos;s
              capabilities and unlock a world of possibilities.
            </p>
            <ul className="list-disc pl-[15px] text-white">
              <li>
                Effortless Car Listings: Easily create and manage car listings
                with detailed information and eye-catching images.
              </li>
              <li>
                Smart Search: Find your dream car with advanced search and
                filtering options.
              </li>
              <li>
                User-Friendly Interface: Navigate the app with ease and style.
              </li>
              <li>
                Privacy Control: Manage your data and privacy settings with
                ease.
              </li>
              <li>
                Quick Sign-Up: Join our community with a quick and easy sign-up
                process.
              </li>
            </ul>
          </div>
          <a
            href="https://play.google.com/store/apps/details?id=com.zedcar_connect"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-red text-white py-[10px] px-[20px] border-l-[5px] rounded mt-[10px]">
              Download The App Today
            </button>
          </a>
        </div>
        <div className="max-w-[1200px] absolute top-[-40px] bottom-0 right-[50px] hidden 2xl:block">
          <Image src="/assets/slide.png" alt="bg" width={800} height={800} />
        </div>
      </div>

      <div className="bg-bg py-[20px] px-[30px] 2xl:px-[0px]">
        <div className="max-w-[1500px] mx-auto 2xl:flex 2xl:justify-between 2xl:items-center">
          <div className="2xl:flex gap-[10px] 2xl:justify-start 2xl:items-center lg:pb-[0] pb-[20px]">
            <Image src="/assets/Logo.png" alt="bg" width={28} height={28} />
            <h2 className="font-bold text-[25px] leading-[50px]">
              ZedCar Connect
            </h2>
          </div>
          <div className="2xl:flex gap-[30px] pb-[20px] 2xl:pb-[0px]">
            <p className="text-[16px]">
              © ZedCar Connect 2023, All Rights Reserved
            </p>
            <a
              href="https://docs.google.com/document/d/1QJqyYzPG-D20lWBxa1h2Eg6JcwFe4K-LsLvy0-kf7ZY/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-[16px] underline">Privacy Policy</p>
            </a>
          </div>
          <div className="2xl:flex gap-[10px]">
            <div className="pb-[20px] 2xl:pb-[0]">
              <a
                href="https://web.facebook.com/profile.php?id=100093953793493"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/facebook.png"
                  alt="bg"
                  width={30}
                  height={30}
                />
              </a>
            </div>

            <a
              href="https://play.google.com/store/apps/details?id=com.zedcar_connect"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/google.png"
                alt="bg"
                width={100}
                height={100}
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
