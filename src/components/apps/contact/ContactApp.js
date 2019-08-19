import React from "react";
import AddContacts from "./components/AddContacts";

class ContactApp extends React.Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Lagu Stephen",
        email: "lagustephe@example.com",
        note: "I am learning react"
      },
      {
        id: 2,
        name: "Doglas Marine",
        email: "lagust@example.com",
        note: "I am learning react"
      },
      {
        id: 3,
        name: "Dreatan Stephen",
        email: "dreatustephe@example.com",
        note: "I am learning react"
      }
    ]
  };

  addContact = contact => {
    this.setState(state => ({
      contacts: [...this.state.contacts, contact]
    }));
  };

  render() {
    return (
      <div className="container">
        <div>
          <AddContacts addContact={this.addContact} btntext="Create" />
          <div className="my-todos">
            <h3>List of Contacts</h3>
            {this.state.contacts.map(contact => (
              <div key={contact.id}>
                <h4>
                  No# {contact.id} - {contact.name}
                </h4>
                <p>{contact.message}</p>
                <p>{contact.note}</p>
                <h6>~ {contact.email} </h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ContactApp;
