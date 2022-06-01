import { fetchBook_book_pages_tokens } from "../../__generated__/fetchBook";

function ClickableText(text: string, token: fetchBook_book_pages_tokens) {
  return (
    <span
      onClick={() => {
        console.log("clicked", token.value);
      }}
    >
      {text}
    </span>
  );
}

export default ClickableText;
