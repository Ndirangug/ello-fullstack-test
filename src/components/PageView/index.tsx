import { fetchBook_book_pages } from "../../__generated__/fetchBook";
import ClickableText from "../ClickableText";
import "./index.css";

function PageView({
  page,
  pageNumber,
  className,
}: {
  page: fetchBook_book_pages;
  pageNumber: number;
  className: string;
}) {
  let toRender = []; //holds the text to be rendered that is already associated with tokens

  for (let i = 0; i < page.tokens!.length; i++) {
    const currentToken = page.tokens![i];
    const nextToken =
      page.tokens!.length - i > 1 ? page.tokens![i + 1] : page.tokens![i]; //if there is a next token, use it, otherwise use the current token

    // get the space occupied by punctuation
    // this is the space bwtween position[1] of currentToken and position[0] of nextToken
    const punctuations =
      currentToken !== nextToken
        ? nextToken.position[0] - currentToken.position[1]
        : 1;

    //the text to be extracted at this point lies between position[0] and position[1] of currentToken
    const extratcedText = page.content!.slice(
      currentToken.position[0],
      currentToken.position[1]
    );

    // punctuation occupies the space just after the extratced text
    const extractedPunctuation = page.content!.slice(
      currentToken.position[1],
      currentToken.position[1] + punctuations
    );

    toRender.push(ClickableText(extratcedText, currentToken)); //push the text to be rendered to the array
    toRender.push(extractedPunctuation); //push the punctuation to be rendered to the array
  }

  return (
    <div className={className} id="page">
      {/* <p>{page.content}</p> */}
      <p className="content">{toRender}</p>
      <div className="spacer"></div>
      <div className="pageNumber">Page {pageNumber}</div>
    </div>
  );
}

export default PageView;
