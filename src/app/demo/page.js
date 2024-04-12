"use client";

import { useState } from "react";

const Page = () => {
  const [state, setState] = useState("demo");
  console.log("🚀 ~ Page ~ state:", state);

  return <div>This is page</div>;
};

export default Page;
