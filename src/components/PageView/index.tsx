import { fetchBook_book_pages } from "../../__generated__/fetchBook";

function PageView({ page }: { page: fetchBook_book_pages }) {
  return <div>{page.content}</div>;
}

export default PageView;
