type parts = {
    name: string,
    exe: number
}

type contentProps = {
    content: parts[]
}

const Content = ({content}:contentProps) => {
    console.log(content)
    return(
    <>
            {
                content.map((part,index) => (
                    <div key={index}>
                        <p> {part.name} - Number of Excersies: {part.exe}</p> 
                    </div>
                    )
                )
            }
    </>
    )

}

export default Content