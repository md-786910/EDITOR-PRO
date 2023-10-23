import React from 'react';
import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from 'polotno';
import { Toolbar } from 'polotno/toolbar/toolbar';
import { ZoomButtons } from 'polotno/toolbar/zoom-buttons';
import { SidePanel } from 'polotno/side-panel';
import { Workspace } from 'polotno/canvas/workspace';

import { createStore } from 'polotno/model/store';
import { TemplatesSection } from '../components/Template';
import { DEFAULT_SECTIONS } from 'polotno/side-panel';


const store = createStore({
  key: 'XdhlXpmLy-XeZTFhiRw6', // you can create it here: https://polotno.com/cabinet/
  // you can hide back-link on a paid license
  // but it will be good if you can keep it for Polotno project support
  showCredit: true,
  Toolbar: false
});
const sections = [TemplatesSection, ...DEFAULT_SECTIONS];




function Editor_Plot() {
  return (
    <>
    <button onClick={() => {
      const json = store.toJSON()

      const jsonData = JSON.stringify(json, null, 2);

      const blob = new Blob([jsonData], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'data.json';
      a.click();
      URL.revokeObjectURL(url);

    }}>
    save as json
  </button>
      <PolotnoContainer style={{ width: '100vw', height: '100vh' }} className="containerEditor">
        <SidePanelWrap>
          <SidePanel store={store}
            sections={sections}
            defaultSection="custom-templates"

          />
        </SidePanelWrap>
        <WorkspaceWrap>
          <Toolbar store={store} downloadButtonEnabled />
          <Workspace store={store} />
          <ZoomButtons store={store} />
        </WorkspaceWrap>
      </PolotnoContainer>

   
    </>
  )
}

export default Editor_Plot