import "./LogoField.scss"

interface LogoProps {
    src: string
}

export const LogoField = (props: LogoProps) => {
    return (
        <div className={"format-logo-img"}>
            <img src={props.src} onClick={() => window.location.href = '/'} alt={"Logo"}/>
            <label className={"position-logo-name"} onClick={() => window.location.href = '/'}>{"PeeSoft"}</label>
        </div>
    )
}