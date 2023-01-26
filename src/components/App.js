
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContacts, deleteContacts, fetchContacts } from "redux/operations";
import { getContacts, getIsLoading, getError } from "redux/selectors";
import { ContactForm } from './contactform/ContactForm';
import { Filter } from './filter/Filter';
import { ContactList } from './contactlist/ContactList';
import { ContactItem } from './contactitem/ContactItem';
import css from './App.module.css';

export const App = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const items = useSelector(getContacts);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  return (
    <div className={css.phonebook__wrapper}>
      <ContactForm/>

      <div>
        <h2 className={css.filter}>Filter</h2>
         <Filter/>
        <h2 className={css.contacts}>Contacts</h2>
       
        <ContactList>
          {isLoading && !error && <b>Request in progress...</b>}
          <ContactItem />
        </ContactList>
      </div>
    </div>
  );
};

