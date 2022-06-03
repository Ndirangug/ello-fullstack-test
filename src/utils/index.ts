import TokenValue from "../components/TokenValue.tsx";
import ReactDOM from "react-dom/client";

export function showTokenValue(tokenValue: string, position: { x: number, y: number }) {
  const root = ReactDOM.createRoot(
    document.getElementById("token") as HTMLElement
  );

  // root.render(
  //   <TokenValue content={ tokenValue } close = {() => root.unmount()} />
  //   );
  root.render(TokenValue({ content: tokenValue, close: () => root.unmount(), position }));
}