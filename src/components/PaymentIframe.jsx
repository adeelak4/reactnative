import { Dimensions } from "react-native";
import IframeRenderer from "@native-html/iframe-plugin";
import RenderHTML from "react-native-render-html";
import WebView from "react-native-webview";

const renderers = {
  iframe: IframeRenderer,
};

const PaymentIframe = ({ url }) => {
  const contentWidth = Dimensions.get("screen").width * 0.9;
  const contentHeight = Dimensions.get("screen").height * 0.9;

  return (
    <WebView
      style={{ width: contentWidth, height: contentHeight }}
      originWhitelist={["*"]}
      javaScriptEnabled={true}
      source={{ html: `<iframe width="100%" height="100%" src="${url}" frameborder="0"></iframe>` }}
    />
  );
};

export default PaymentIframe;
