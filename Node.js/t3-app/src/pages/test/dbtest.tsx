import React from "react";
import { api } from "@/utils/api";

const Test = () => {
  const createExecutor = api.executor.create.useMutation({
    onSuccess: () => {},
  });

  const onclick = () => {
    createExecutor.mutate({
      name: "testname",
      status: "teststatus",
      userId: "clnvzw8ny00c4vvbgva1db1ud",
    });
  };

  return (
    <div>
      <h1>Test</h1>
      <button onClick={onclick}>11</button>
    </div>
  );
};

export default Test;
