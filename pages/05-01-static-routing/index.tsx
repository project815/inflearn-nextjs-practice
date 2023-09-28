import { useRouter } from "next/router";

export default function StaticRoutingPage() {
  const router = useRouter();

  const onClickPageMove1 = () => {
    router.push("/05-03-static-routed/1");
  };

  const onClickPageMove2 = () => {
    router.push("/05-03-static-routed/2");
  };

  const onClickPageMove3 = () => {
    router.push("/05-03-static-routed/3");
  };
  return (
    <>
      <button onClick={onClickPageMove1}>페이지1 이동</button>
      <button onClick={onClickPageMove2}>페이지2 이동</button>
      <button onClick={onClickPageMove3}>페이지3 이동</button>
    </>
  );
}