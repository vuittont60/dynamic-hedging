import type { RyskToolTipProps } from "./types";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import { Info } from "src/Icons";

export const RyskTooltip = ({
  children,
  disabled = false,
  content,
  placement = "auto",
}: RyskToolTipProps) => {
  const formattedContent =
    typeof content === "string" ? (
      <span className="block text-center">{content}</span>
    ) : (
      content
    );

  return (
    <Tippy
      content={formattedContent}
      disabled={disabled}
      duration={[200, 150]}
      hideOnClick="toggle"
      interactive
      placement={placement}
      theme="rysk"
    >
      {children ? (
        children
      ) : (
        <span
          className={`p-3 ${disabled ? "cursor-not-allowed" : "cursor-help"}`}
        >
          <Info className="inline-flex w-6 h-6" />
        </span>
      )}
    </Tippy>
  );
};