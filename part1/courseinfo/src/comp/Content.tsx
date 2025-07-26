type contentProps = {
    content: string;
    exe : number;
}

const Content = ({content,exe}:contentProps) => {

    return(
        <>
            <p>{content}: Excersies - {exe}</p>
        </>
    )

}

export default Content