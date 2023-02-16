export default async function Page(params) {
  const data = await fetch(
    "https://api-eu-west-2.hygraph.com/v2/cle6zzocr08go01t5eh3x6myx/master"
  );
  console.log("🚀 ~ Page ~ data", data);

  return (
    <div>
      <h1 className="text-4xl">Projects page</h1>
    </div>
  );
}
