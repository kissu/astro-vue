import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import './styles.css';

export default function BasicDemo({ children }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex justify-around card bg-cyan-500">
      <Button label="Show" icon="pi pi-external-link" className="text-white-500 " onClick={() => setVisible(true)} />
      <Dialog header="Nesting 2 components 🟢 🔵" visible={visible} style={{ width: '50vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>
        <p className="m-0">
          {children}
        </p>
      </Dialog>
    </div>
  )
}
