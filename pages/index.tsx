import React from "react";
import { useEffect } from "react";
import { useAuth } from "../context/authContext";
import { useRouter } from "next/router";
import HomeNav from "../components/homeNav";
import CreateWebsite from "../components/createWebsite";
import UserWebsites from "../components/userWebsites";

export default function Home() {
  const { push } = useRouter();
  const { user }: any = useAuth();

  useEffect(() => {
    if (!user) {
      push("/login");
    }
  }, [user]);
  return (
    <div>
      <HomeNav user={user} />
      <div>
        <CreateWebsite user={user} />
        <UserWebsites user={user} />
      </div>
    </div>
  );
}
