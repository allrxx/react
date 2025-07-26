type headerProps ={
    title:string;
}

const Header = ({title}: headerProps) => {
    return(
        <>
        <h3>{title}</h3>
        </>
    )
}

export default Header