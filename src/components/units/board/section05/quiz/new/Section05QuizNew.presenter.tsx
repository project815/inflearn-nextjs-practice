import * as S from "./Section05QuizNew.style";
interface PropsType {
  onChnagePrice: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickCreateProduct: (e: React.FormEvent<HTMLFormElement>) => void;
  onChnageSeller: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChnageDetail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChnageName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Section05QuizNewUI(props: PropsType) {
  const {
    onChnagePrice,
    onClickCreateProduct,
    onChnageSeller,
    onChnageDetail,
    onChnageName,
  } = props;

  return (
    <S.ProductLayOut onSubmit={onClickCreateProduct}>
      <S.ProductInputTitle>제품 등록 페이지</S.ProductInputTitle>
      <S.ProductInputRowGroup>
        <span>작성자 : </span>
        <S.ProductInput onChange={onChnageSeller} type="text" />
      </S.ProductInputRowGroup>
      <S.ProductInputRowGroup>
        <span>상품명 : </span>
        <S.ProductInput onChange={onChnageName} type="text" />
      </S.ProductInputRowGroup>
      <S.ProductInputRowGroup>
        <span>상세 : </span>
        <S.ProductInput onChange={onChnageDetail} type="text" />
      </S.ProductInputRowGroup>
      <S.ProductInputRowGroup>
        <span>가격 : </span>
        <S.ProductInput onChange={onChnagePrice} type="number" />
      </S.ProductInputRowGroup>
      <S.ProductInputButton type="submit">등록</S.ProductInputButton>
    </S.ProductLayOut>
  );
}
