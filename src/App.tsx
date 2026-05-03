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
  <div className={'node-card ' + className} id={'node-' + id}>
    <div className='node-icon'>{icon}</div>
    <div className='node-title'>{title}</div>
    <div className='node-desc'>{desc}</div>
  </div>
);

function App() {
  return (
    <div className='infographic-container'>
      <header className='workflow-header'>
        <h1>Service Workflow Journey</h1>
        <p>Animated Flow from Service Desk to Knowledge Base</p>
      </header>

      <div className='workflow-canvas'>
        <svg className='svg-overlay' viewBox='0 0 1000 1100' preserveAspectRatio='none'>
          <path d='M 500 100 L 500 220' className='flow-path-animated' />
          <path d='M 500 350 L 500 400' className='flow-path-animated' />
          <path d='M 500 400 L 250 400 L 250 480' className='flow-path-animated' />
          <path d='M 500 400 L 500 480' className='flow-path-animated' />
          <path d='M 500 400 L 750 400 L 750 480' className='flow-path-animated' />
          <path d='M 250 600 L 250 650 L 500 650 L 500 720' className='flow-path-animated' />
          <path d='M 500 600 L 500 720' className='flow-path-animated' />
          <path d='M 750 600 L 750 650 L 500 650 L 500 720' className='flow-path-animated' />
          <path d='M 500 850 L 500 950' className='flow-path-animated' />
        </svg>

        <div className='node-row'>
          <Node id='sd' icon={<Headphones size={32} />} title='Service Desk' desc='จุดรับเรื่องแจ้งปัญหาเบื้องต้น' className='node-service-desk' />
        </div>
        <div className='node-row'>
          <Node id='oc' icon={<Settings size={32} />} title='Operation Control' desc='วิเคราะห์ คัดกรอง และจ่ายงาน' className='node-ops-control' />
        </div>
        <div className='node-row'>
          <Node id='ba' icon={<Layout size={28} />} title='Board: App' desc='งานด้าน Application' className='node-board-app' />
          <Node id='bt' icon={<Cpu size={28} />} title='Board: Tech' desc='งานด้าน Infrastructure' className='node-board-tech' />
          <Node id='bf' icon={<Package size={28} />} title='Board: Fulfill' desc='งานด้านจัดหาอุปกรณ์' className='node-board-fulfill' />
        </div>
        <div className='node-row'>
          <Node id='sc' icon={<UserCheck size={32} />} title='Staff Resolution' desc='เจ้าหน้าที่ดำเนินการปิดจบงาน' className='node-staff' />
        </div>
        <div className='node-row'>
          <Node id='kb' icon={<LibraryBig size={32} />} title='Knowledge Base' desc='บันทึกเป็นฐานความรู้' className='node-kb' />
        </div>
      </div>
      <footer className='footer'>Created by Bird Oracle 🦜</footer>
    </div>
  );
}
export default App;