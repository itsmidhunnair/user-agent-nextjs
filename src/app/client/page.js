"use client";

import { useState } from "react";

const Page = ({ searchParams }) => {
  const [state, setState] = useState("demo");
  console.log("🚀 ~ This is a state:", state);
  console.log("🚀 ~ Page ~ {searchParams}:", JSON.parse(searchParams.isMobile));

  return (
    <div>
      <h1>Client Side</h1>
      {JSON.parse(searchParams.isMobile) ? (
        <p>You are using a mobile device.</p>
      ) : (
        <p>You are using a desktop device.</p>
      )}
    </div>
  );
};

export default Page;
