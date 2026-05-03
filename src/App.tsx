import React from 'react';
import { 
  Headphones, 
  Settings, 
  Layout, 
  Cpu, 
  Package, 
  UserCheck, 
  LibraryBig
} from 'lucide-react';
import './App.css';

interface NodeProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  className: string;
}

const Node: React.FC<NodeProps> = ({ icon, title, desc, className }) => (
  <div className={'node-card ' + className} id={'node-' + title.replace(/\s/g, '-')}>
    <div className='node-icon'>{icon}</div>
    <div className='node-title'>{title}</div>
    <div className='node-desc'>{desc}</div>
  </div>
);

function App() {
  return (
    <div className='infographic-container'>
      <header className='workflow-header'>
        <h1>Service Workflow</h1>
        <p>End-to-End Operation Flow</p>
      </header>

      <div className='workflow-canvas'>
        <svg className='svg-overlay' viewBox='0 0 1000 1000' preserveAspectRatio='none'>
          <path d='M 500 50 L 500 150' className='flow-path-animated' />
          <path d='M 500 250 L 500 320' className='flow-path-animated' />
          <path d='M 500 320 L 250 320 L 250 420' className='flow-path-animated' />
          <path d='M 500 320 L 500 420' className='flow-path-animated' />
          <path d='M 500 320 L 750 320 L 750 420' className='flow-path-animated' />
          <path d='M 250 580 L 250 650 L 500 650 L 500 750' className='flow-path-animated' />
          <path d='M 500 580 L 500 750' className='flow-path-animated' />
          <path d='M 750 580 L 750 650 L 500 650 L 500 750' className='flow-path-animated' />
          <path d='M 500 850 L 500 950' className='flow-path-animated' />
        </svg>

        <div className='node-row'>
          <Node id='sd' icon={<Headphones size={24} />} title='Service Desk' desc='รับเรื่องแจ้งปัญหา' className='node-service-desk' />
        </div>
        <div className='node-row'>
          <Node id='oc' icon={<Settings size={24} />} title='Ops Control' desc='วิเคราะห์และคัดกรอง' className='node-ops-control' />
        </div>
        <div className='node-row'>
          <Node id='ba' icon={<Layout size={20} />} title='App' desc='งานซอฟต์แวร์' className='node-board-app' />
          <Node id='bt' icon={<Cpu size={20} />} title='Tech' desc='งานโครงสร้างพื้นฐาน' className='node-board-tech' />
          <Node id='bf' icon={<Package size={20} />} title='Fulfill' desc='งานจัดหาอุปกรณ์' className='node-board-fulfill' />
        </div>
        <div className='node-row'>
          <Node id='sc' icon={<UserCheck size={24} />} title='Staff' desc='ดำเนินการปิดจบงาน' className='node-staff' />
        </div>
        <div className='node-row'>
          <Node id='kb' icon={<LibraryBig size={24} />} title='Knowledge' desc='บันทึกฐานความรู้' className='node-kb' />
        </div>
      </div>
      <footer className='footer'>Created by Bird Oracle 🦜</footer>
    </div>
  );
}
export default App;