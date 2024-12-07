import { useRouter } from 'next/router';

export interface ProjectData {
    header?: string;
    aboutProjectContent?: string;
    myRoleContent?: string;
    scopes?: string[];
    headerColor?: string;
    contentColor?: string;
}

const defaultProjectData: ProjectData = {
    header: "Untitled Project",
    aboutProjectContent: "No details available.",
    myRoleContent: "No role specified.",
    scopes: ["No scopes defined."],
    headerColor: "text-black",
    contentColor: "text-gray-700"
};

const defaultHeaderColor = "text-black";
function Header(props: { clsName?: string; text?: string; color?: string }) {
    return <div className={`${props.clsName} text-2xl font-semibold ${props.color ?? defaultHeaderColor}`}>{props.text}</div>;
}

const defaultContentColor = "text-gray-700";
function Content(props: { text?: string; color?: string }) {
    return <div className={`text-md font-[400] ${props.color ?? defaultContentColor}`}>{props.text}</div>;
}

function BackButton() {
    const router = useRouter();
    return (
        <button
            className="text-white bg-gray-800 rounded-lg p-2 self-start hover:bg-gray-700"
            onClick={() => router.back()}
        >
            Back
        </button>
    );
}

export default function ProjectTemplate(props: { data: ProjectData }) {
    const data = { ...defaultProjectData, ...props.data };

    return (
        <div className="w-full h-full flex flex-col p-6 gap-4">
            <BackButton />
            <Header clsName="self-center" text={data.header} color={data.headerColor} />

            <div className="flex flex-row p-2 gap-4">
                <div className="flex flex-col">
                    <Header color={data.headerColor} text="About the project" />
                    <Content text={data.aboutProjectContent} color={data.contentColor} />
                    <Header color={data.headerColor} text="My role" />
                    <Content text={data.myRoleContent} color={data.contentColor} />
                </div>
                <div className="flex flex-col rounded-lg bg-white shadow-lg p-4 gap-4">
                    <div className="text-xl font-semibold">Scope</div>
                    <div className="flex flex-row gap-2">
                        {data.scopes?.map((scope, index) => (
                            <div
                                key={index}
                                className="text-white bg-gray-500 rounded-lg p-2 hover:bg-gray-600"
                            >
                                {scope}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
