export interface ProjectData {
    header?: string
    aboutProjectContent?: string
    myRoleContent?: string
    scopes?: string[]
    headerColor?: string
    contentColor?: string
}

const defaultHeaderColor = "text-white"
function Header(props: { clsName?: string, text?: string; color?: string }) {
    return <div className={`${props.clsName} text-2xl font-semibold ${props.color ?? defaultHeaderColor}`}>{props.text}</div>
}

const defaultContentColor = "text-white"
function Content(props: { text?: string; color?: string }) {
    return <div className={`text-md font-[400] ${props.color ?? defaultContentColor}`}>{props.text}</div>
}

export default function ProjectTemplate(props: { data: ProjectData }) {
    return (
        <div className="w-full h-full flex flex-col p-6 gap-4">
            {/* TODO: BACK BTN HERE? */}
            {/* TODO: Image carousel */}
            <Header clsName="self-center" text={props.data.header} color={props.data.headerColor} />

            <div className="flex flex-row p-2 gap-4">
                <div className="flex flex-col">
                    <div className="flex flex-col">
                        <Header color={props.data.headerColor} text={`About the project`} />
                        <Content text={props.data.aboutProjectContent} color={props.data.contentColor} />
                    </div>

                    <div className="flex flex-col">
                        <Header color={props.data.headerColor} text={`My role`} />
                        <Content text={props.data.myRoleContent} color={props.data.contentColor} />
                    </div>
                </div>
                <div className="flex flex-col rounded-lg bg-white shadow-lg p-4 gap-4">
                    <div className={`text-xl font-semibold`}>{`Scope`}</div>
                    <div className={`flex flex-row gap-2`}>
                        {props.data.scopes?.map((scope) => (
                            <div className="text-white bg-gray-500 rounded-lg p-2">{scope}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
