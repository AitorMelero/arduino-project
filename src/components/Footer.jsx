export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="my-16 flex flex-wrap flex-col sm:flex-row justify-center items-center">
            <a className="mx-10 md:mr-48 md:ml-0 border-b border-white dark:border-gray-1 text-sm font-medium">
                © {currentYear} AiBenTor
            </a>
            <a
                href="/"
                className="mx-10 border-b border-white dark:border-gray-1 hover:border-gray-5 hover:dark:border-white text-sm font-medium"
            >
                Proyectos
            </a>
            <a
                href="/about"
                className="mx-10 border-b border-white dark:border-gray-1 hover:border-gray-5 hover:dark:border-white text-sm font-medium"
            >
                Acerca de
            </a>
            <a
                href="https://github.com/AitorMelero/arduino-project"
                target="_blank"
                className="mx-10 border-b border-white dark:border-gray-1 hover:border-gray-5 hover:dark:border-white text-sm font-medium"
            >
                GitHub
            </a>
        </footer>
    );
};
