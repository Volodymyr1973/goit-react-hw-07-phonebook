import React from 'react';
import css from './ContactList.module.css';
import { ContactItem } from 'components/contactitem/ContactItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';


export const ContactList = () => {
  const contacts = useSelector(getContacts); 
   const filters = useSelector(getFilter)

   console.log(contacts)

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );

console.log(`contacts${visibleContacts}`)

  return (
    <>
      <ul className={css.contact__list}>
        {visibleContacts.map(contact => (
            <ContactItem
              contact={contact}
            
      
            />
          ))}
      </ul>
    </>
  );
};

