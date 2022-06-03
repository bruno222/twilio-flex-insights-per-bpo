import React from 'react';
import * as Flex from '@twilio/flex-ui';
import { FlexPlugin } from '@twilio/flex-plugin';
import BpoReportsButton from './components/BpoReportsButton';

const PLUGIN_NAME = 'FlexInsightsInsightsPerBpoPlugin';

export default class FlexInsightsPerBpoPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  init(flex: typeof Flex, manager: Flex.Manager) {
    // get the Team of this Agent
    const { team } = manager.workerClient.attributes;

    // add "team" into the URL
    const src = `https://analytics.ytica.com/dashboard.html?label.agents.team_name=${team}#workspace=/gdc/workspaces/kiyzpdxo8h390sifa8ntqu7f2otx5coc&dashboard=/gdc/md/kiyzpdxo8h390sifa8ntqu7f2otx5coc/obj/1462033`;

    // Remove default Tabs
    const nav = flex.SideNav.Content;
    nav.remove('dashboards');
    nav.remove('analyze');
    nav.remove('questionnaires');

    // Add custom Tab button
    nav.add(<BpoReportsButton key="bpo-reports-btn" />);

    // Add an error message in case the "team" is undefined for this Agent
    if (!team) {
      flex.ViewCollection.Content.add(
        <flex.View name="bpo-reports" key="bpo-reports">
          <div style={{ fontSize: '20px', padding: '100px' }}>
            Error: the attribute "team" is undefined for this Supervisor.
            <br />
            <br />
            Either your SSO is not sending this attribute to Twilio, or if you are testing things manually, you forgot to define a
            "worker.attributes.team". For both ways, go to Twilio Console - TaskRouter - Worker - and check the attributes of this worker.
          </div>
        </flex.View>
      );

      return;
    }

    // Show the Reporting
    flex.ViewCollection.Content.add(
      <flex.View name="bpo-reports" key="bpo-reports">
        <iframe frameBorder="0" src={src} width="100%" height="1010px" allowTransparency={false}></iframe>
      </flex.View>
    );
  }
}
