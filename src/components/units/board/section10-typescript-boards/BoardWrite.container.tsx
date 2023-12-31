import { useMutation } from "@apollo/client";
import { useState } from "react";

import BoardWriteUI from "./BoardWrite.presenter";
import { CREATEBOARD, UPDATEBOARD } from "./BoardWrite.query";
import { useRouter } from "next/router";
import type { IBoardWritePropsType, IMyVariables } from "./BoardWrite.types";

export default function BoardWrite(props: IBoardWritePropsType) {
  const { isEdit, defaultValue } = props;
  const router = useRouter();

  const [writer, setWriter] = useState<string>(defaultValue?.writer ?? "");
  const [title, setTitle] = useState<string>(defaultValue?.contents ?? "");
  const [contents, setContents] = useState<string>(
    defaultValue?.contents ?? ""
  );

  const [createBoard] = useMutation(CREATEBOARD);
  const [updateBoard] = useMutation(UPDATEBOARD);

  const onClickSubmit = async () => {
    try {
      const result = await createBoard({
        variables: {
          writer,
          title,
          contents,
        },
      });
      await router.push(
        `/section10/10-02-typescript-boards/${result.data.createBoard.number}`
      );
    } catch (err) {
      console.log(err);
    }
  };

  const onClickUpdate = async () => {
    const myVariables: IMyVariables = {
      number: Number(router.query.number),
    };

    if (writer) myVariables.writer = writer;
    if (title) myVariables.title = title;
    if (contents) myVariables.contents = contents;

    try {
      const result = await updateBoard({
        variables: myVariables,
      });
      await router.push(
        `/section10/10-02-typescript-boards/${result.data.updateBoard.number}`
      );
    } catch (err) {
      console.log(err);
    }
  };

  const onChangeWriter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWriter(e.target.value);
  };
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onChangeContents = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContents(e.target.value);
  };
  return (
    <BoardWriteUI
      onClick={isEdit ? onClickUpdate : onClickSubmit}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      isEdit={isEdit}
      defaultValue={defaultValue}
    />
  );
}
