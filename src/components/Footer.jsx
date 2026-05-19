import { footer } from "framer-motion/client";

const Footer = ({ darkMode }) => {
    const currentYear = new Date().getFullYear();
    return (
        <footer
        style={{
            background:darkMode
            ? "linear-linear(to bottom, #000000, #111827)"
            : "linear-linear(to bottom, #f9f4f6, #e5e7eb)",
            borderColor: darkMode ? "#374151" : "#d1d5db",
        }}>
        </footer>
    )

}

export default Footer;