import Contact from "./Contact"

const Section = (props) => {
    const {title, characters} = props
    return (
        <section>
            <h3>{title}</h3>
            {characters.map((character) => {
                return <Contact name={character.name} email={character.email} />
            })}
        </section>
        )
}

export default Section