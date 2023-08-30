import React from "react";
import { ReactChildren } from "../interface/children.base";
import StoreProvider from "@/store/provider";

export default function ProvidersWrapper({ children }: ReactChildren) {
  return <StoreProvider>{children}</StoreProvider>;
}
