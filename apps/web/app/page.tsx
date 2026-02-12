"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";

const Page = () => {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);

  return (
    <div className="flex items-center flex-col justify-center min-h-svh">
      <Button onClick={() => addUser()}>Add</Button>
      <p>apps/web</p>
      <p className="max-w-sm w-full mx-auto ">
        {JSON.stringify(users, null, 2)}
      </p>
    </div>
  );
};

export default Page;
