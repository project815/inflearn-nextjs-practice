import { useRouter } from "next/router";

export default function StaticRoutingPage() {
  const router = useRouter();

  const onClickMove = async () => {
    await router.push("/section05/05-01-static-routing-moved");
  };

  return (
    <div>
      <div> 페이지 이동하기</div>
      <button onClick={onClickMove}>페이지 이동</button>
    </div>
  );
}
