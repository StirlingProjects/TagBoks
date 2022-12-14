import React from "react";

import "./Contacts.scss";

import Header from "../../components/Header/Header";

import contactInfoArray from "../../assets/data/contact_info";
import ContactTile from "../../components/ContactTile/ContactTile";

const Contacts = () => {
    const ukMngmtJsx = contactInfoArray[0].map((contact, index) => {
        return (
            <ContactTile
                key={index + 1}
                imageUrl={contact.imageUrl}
                name={contact.name}
                role={contact.role}
                contact={contact.contact}
            />
        );
    });

    const ukSupportJsx = contactInfoArray[1].map((contact, index) => {
        return (
            <ContactTile
                key={index + 1}
                imageUrl={contact.imageUrl}
                name={contact.name}
                role={contact.role}
                contact={contact.contact}
            />
        );
    });

    const wcMngmtJsx = contactInfoArray[2].map((contact, index) => {
        return (
            <ContactTile
                key={index + 1}
                imageUrl={contact.imageUrl}
                name={contact.name}
                role={contact.role}
                contact={contact.contact}
            />
        );
    });

    return (
        <div className="contacts">
            <Header title="Contact Us" />
            <div className="contacts__section">
                <div className="contacts__title">UK Management Committee</div>
                <div className="contacts__tiles">{ukMngmtJsx}</div>
            </div>
            <div className="contacts__section">
                <div className="contacts__title">
                    UK Supporting Senior Players
                </div>
                <div className="contacts__tiles">{ukSupportJsx}</div>
            </div>
            <div className="contacts__section">
                <div className="contacts__title">
                    Tag World Cup Management Committee (South Africa based)
                </div>
                <div className="contacts__tiles">{wcMngmtJsx}</div>
            </div>
        </div>
    );
};

export default Contacts;
