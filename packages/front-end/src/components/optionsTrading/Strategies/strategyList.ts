import {
  CallCreditSpread,
  LongStraddle,
  LongStrangle,
  PutCreditSpread,
} from "src/Icons/Strategy";
import { OptionChainModalActions } from "src/state/types";

export const strategyList = [
  {
    active: true,
    description: "Works best when price is expected to decrease.",
    Icon: CallCreditSpread,
    label: "Call Credit Spread",
    modal: OptionChainModalActions.CALL_CREDIT_SPREAD,
    selling: true,
  },
  {
    active: true,
    description: "Works best when price is expected to increase.",
    Icon: PutCreditSpread,
    label: "Put Credit Spread",
    modal: OptionChainModalActions.PUT_CREDIT_SPREAD,
    selling: true,
  },
  {
    active: true,
    description: "Works best when volatility is expected to increase.",
    Icon: LongStraddle,
    label: "Long Straddle",
    modal: OptionChainModalActions.LONG_STRADDLE,
    selling: false,
  },
  {
    active: true,
    description: "Works best when volatility is expected to increase.",
    Icon: LongStrangle,
    label: "Long Strangle",
    modal: OptionChainModalActions.LONG_STRANGLE,
    selling: false,
  },
];
