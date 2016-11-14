import {observer} from 'mobx-react';
import React from 'react';
import Contact from '../../models/Contact';

@observer
class ContactList extends React.Component {

  render() {
    let contactRows = this.props.data.map((c) => {
      return <h3 key={c.id}>{c.lastName}, {c.firstName}</h3>;
    });

    return (
      <div>
        {contactRows}
      </div>
    );
  }

}

ContactList.propTypes = {

  data: React.PropTypes.arrayOf(React.PropTypes.instanceOf(Contact)).isRequired
};

export default ContactList;
