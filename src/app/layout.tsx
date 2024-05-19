import type { Metadata } from "next";
import "./globals.scss";
import ThemeWrapper from "@/designSystem/theme/ThemeWrapper";
import StyledComponentsRegistry from "@/designSystem/theme/StyledComponentRegistry";

export const metadata: Metadata = {
  title: "NextStyledThemeStarter",
  description:
    "NextStyledThemeStarter is a boilerplate for Next.js projects, configured with Styled Components and a custom StyledTheme to set up colors, grids, and typography quickly. This boilerplate aims to streamline your workflow and ensure consistency across your projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ThemeWrapper>{children}</ThemeWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
