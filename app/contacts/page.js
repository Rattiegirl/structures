"use client"
import Section from "@/components/Section"
import { animals, plants } from "@/data"

const ContactsPage = () => {
    return <div>
        <Section title = "Animals" characters = {animals}/>
        <Section title = "Plants" characters = {plants}/>
    </div>
}

export default ContactsPage