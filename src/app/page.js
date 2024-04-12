"use server";

export default async function Home({searchParams}) {
  console.log("🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 ~ isMobile:", searchParams);
  return (
    <div>
      <h1>Server Comp</h1>
      {JSON.parse(searchParams.isMobile) ? (
        <p>You are using a mobile device.</p>
      ) : (
        <p>You are using a desktop device.</p>
      )}
    </div>
  );
}
