import {observer} from 'mobx-react';
import React from 'react';

@observer
class ContactList extends React.Component {

  render() {
    let contactRows = this.props.data.map((c) => {
      return <h3 key={c.id}>{c.lastName}, {c.firstName}</h3>
    });
    console.log(contactRows);
    return (
      <div>
        {contactRows}
      </div>
    );
  }

}

export default ContactList;
