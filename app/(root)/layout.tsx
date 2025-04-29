import Footer from "@/components/footer";
import Header from "@/components/shared/header";
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="flex-1 wrapper">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </main>
            <Footer />
        </div>
    );
}