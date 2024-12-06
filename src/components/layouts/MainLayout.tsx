"use client";
import { AnimatePresence } from "framer-motion";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useEffect } from "react";
import { useThemeStore } from "@/store/theme";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n/config";
import { Toaster } from "react-hot-toast";
import { ScrollToTop } from "../common/ScrollToTop";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const { theme } = useThemeStore();

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    return (
        <I18nextProvider i18n={i18n}>
            <Navbar />
            <AnimatePresence mode="wait">
                {children}
            </AnimatePresence>
            <Footer />
            <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
            <ScrollToTop />
        </I18nextProvider>
    );

}

export default MainLayout;