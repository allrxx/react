type parts = {
    name: string,
    exe: number
}

type totalProps = {
    total: parts[]
}

const Total = ({total}:totalProps) => {
    let sum=0
    total.forEach(element => {
         sum = element.exe +sum
    });

    return (

        <>
            <p><b>Total Number of Excersies  = {sum}</b></p>
        </>

    )

}

export default Total