import React from "react";
import { useAuth } from "../context/authContext";
import HomeNav from "../components/homeNav";
import CreateWebsite from "../components/createWebsite";
import UserWebsites from "../components/userWebsites";

export default function Home() {
  const { user }: any = useAuth();

  return (
    <div>
      <HomeNav user={user} />
      <div>
        <CreateWebsite user={user} />
        {user && <UserWebsites user={user} />}
      </div>
    </div>
  );
}
