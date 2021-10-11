import { useRouter } from "next/dist/client/router";

export default function ClientProjectsPage() {
  const router = useRouter();

  function loadProjectHandler() {
    // load data...
    router.push({
      pathname: "/clients/max/projectA",
      query: { id: "max", clientprojectid: "A" },
    });
  }

  console.log(router.query);
  return (
    <div>
      <h1> The projects of a given clients</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}
