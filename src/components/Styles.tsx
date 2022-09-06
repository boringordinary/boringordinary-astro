import { getCssText } from "@/styles";

export default () => (
  <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
);
