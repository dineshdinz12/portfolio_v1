import { GENERAL_INFO } from '@/lib/data';

const Footer = () => {
    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-[12vw] sm:text-[10vw] font-anton text-foreground/[0.03] leading-none select-none pointer-events-none">
                    DINESH R
                </p>

                <p className="text-lg mt-8">
                    Have a project or opportunity in mind?
                </p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-xl sm:text-3xl md:text-4xl font-anton inline-block mt-5 mb-4 hover:underline break-all"
                >
                    {GENERAL_INFO.email}
                </a>

            </div>
        </footer>
    );
};

export default Footer;
