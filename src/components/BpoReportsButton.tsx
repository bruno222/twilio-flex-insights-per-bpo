import React from 'react';
import { SideLink, Actions } from '@twilio/flex-ui';
import { Icon } from '@twilio/flex-ui';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSlidersH } from '@fortawesome/free-solid-svg-icons';

interface Props {
  activeView?: string;
}

export default class BpoReportsButton extends React.Component<Props> {
  render() {
    return (
      <SideLink
        {...this.props}
        icon={<Icon icon="Data" />}
        iconActive={<Icon icon="DataBold" />}
        isActive={this.props.activeView === 'bpo-reports'}
        onClick={() => Actions.invokeAction('NavigateToView', { viewName: 'bpo-reports' })}
      >
        BPO Dashboard
      </SideLink>
    );
  }
}
