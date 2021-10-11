import { useRouter } from "next/dist/client/router";

export default function SelectedClientProjectPage() {
  const router = useRouter();

  console.log(router.query);
  return (
    <div>
      <h1>Project page for a specific project for a selected client</h1>
    </div>
  );
}
