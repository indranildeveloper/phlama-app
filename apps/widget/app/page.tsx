"use client";

import { useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api";

const Page = () => {
  const users = useQuery(api.users.getMany);

  return (
    <div className="flex items-center flex-col justify-center min-h-svh">
      <p>apps/widget</p>
      <p className="max-w-sm w-full mx-auto ">
        {JSON.stringify(users, null, 2)}
      </p>
    </div>
  );
};

export default Page;
