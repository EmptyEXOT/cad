import { RedirectIfLogin } from "@/shared/hocs/withRedirectIfAuth/RedirectIfLogin";
import { ReactNode } from "react";

export const withRedirectIfLogin = (children: ReactNode, to: string) => {
    return (
        <RedirectIfLogin to={to}>
            {children}
        </RedirectIfLogin>
    )
}