import Paragraph from "../shared/Paragraph";


interface InfoProps {
    title: string;
    description: string;
    children?: React.ReactNode;
}

export const Info = ({ title, description, children }: InfoProps) => {
    return (
        <div className="p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border  bg-box-bg shadow-lg shadow-box-shadow relative">
            <div className="rounded-2xl bg-gray dark:bg-gray-950 p-2 text-heading-1 w-max md:absolute md:-left-3 md:-top-3 mb-4"> {children} </div>
            <h2 className="text-heading-2 w-max relative font-semibold md:text-xl">{title}</h2>
            <Paragraph className="mt-2 !text-md text-neutral-700"> {description} </Paragraph>
        </div>
    );
}