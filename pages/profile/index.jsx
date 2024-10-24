import { useEffect, useState } from "react";
import Image from "next/image";
import fetchDataProfile from "./fetchData";
import logo from "@/public/image/logo.png";

const AboutSection = ({ profile }) => (
  <div className="about flex flex-col justify-center items-center border-b-2">
    <div className="flex w-full justify-center items-center">
      <h1 className="text-4xl text-0 font-manguiera">About Himatif</h1>
    </div>
    <div className="flex justify-center items-center flex-col mb-10 text-center">
      <Image src={logo} alt="logo" />
      {profile.body && (
        <div dangerouslySetInnerHTML={{ __html: profile.body }} />
      )}
    </div>
  </div>
);

const ContainerSection = () => (
  <div className="container flex">
    <div className="actionbutton flex w-1/3"></div>
    <div className="ourhistory flex"></div>
  </div>
);

const ProfilePage = () => {
  const [profile, setProfile] = useState("  ");

  useEffect(() => {
    const getProfile = async () => {
      const data = await fetchDataProfile();
      setProfile(data); 
    };
    getProfile();
  }, []);

  return (
    <div className="py-10 px-10">
      <AboutSection profile={profile} />
      <ContainerSection />
    </div>
  );
};

export default ProfilePage;
