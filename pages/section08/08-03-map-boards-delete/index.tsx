import { gql, useQuery } from "@apollo/client";

const FETCHBOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

export default function MapBoardsDeletePage() {
  const { data } = useQuery(FETCHBOARDS);
  console.log("data : ", data);

  const onClickDelete = () => {};
  return (
    <div>
      {/* {특별한 이유가 없으면 Fragment로 감싸자. <div>조금 느려짐} */}
      {/* {프래그먼트  : <><>,  <Fragment></Fragment>} */}
      {data &&
        data?.fetchBoards.map(
          (i: { writer: string; contents: string; title: string; number }) => (
            <div key={i.number} style={{ marginTop: "10px" }}>
              <span style={{ marginLeft: "4px" }}>
                <input type="checkbox" />
              </span>
              <span>{i.number}</span>
              <span style={{ marginLeft: "4px" }}>
                작성자 : {i && i.writer}
              </span>
              <span style={{ marginLeft: "4px" }}>제목 : {i.title}</span>
              <span style={{ marginLeft: "4px" }}>
                내용 : {i ? i.contents : ""}
              </span>
              <span>
                <button style={{ marginLeft: "10px" }}>삭제</button>
              </span>
            </div>
          )
        )}
    </div>
  );
}
