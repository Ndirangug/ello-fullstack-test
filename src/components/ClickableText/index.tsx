import { showTokenValue } from "../../utils/";
import { fetchBook_book_pages_tokens } from "../../__generated__/fetchBook";

function ClickableText(text: string, token: fetchBook_book_pages_tokens) {
  return (
    <span
      onClick={(event) => {
        console.log("clicked", token.value);

        showTokenValue(token.value, { x: event.clientX, y: event.clientY });
      }}
    >
      {text}
    </span>
  );
}

export default ClickableText;
