import React from 'react';
import { 
  Headphones, 
  Settings, 
  Layout, 
  Cpu, 
  Package, 
  Users,
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
        <p>Service Desk to Knowledge Base Journey</p>
      </header>

      <div className='workflow-canvas'>
        <svg className='svg-overlay' viewBox='0 0 1000 1000' preserveAspectRatio='none'>
          {/* SD to OC (Horizontal) */}
          <path d='M 280 150 L 400 150' className='flow-path-animated' />
          
          {/* OC to Staff Op (Horizontal) */}
          <path d='M 600 150 L 720 150' className='flow-path-animated' />

          {/* OC to Boards (Downwards) */}
          <path d='M 500 220 L 500 280' className='flow-path-animated' />
          <path d='M 500 280 L 250 280 L 250 350' className='flow-path-animated' />
          <path d='M 500 280 L 500 350' className='flow-path-animated' />
          <path d='M 500 280 L 750 280 L 750 350' className='flow-path-animated' />

          {/* Boards and Staff Op back to Staff Closure */}
          <path d='M 250 500 L 250 550 L 500 550 L 500 650' className='flow-path-animated' />
          <path d='M 500 500 L 500 650' className='flow-path-animated' />
          <path d='M 750 500 L 750 550 L 500 550 L 500 650' className='flow-path-animated' />
          <path d='M 850 220 L 850 550 L 500 550 L 500 650' className='flow-path-animated' />
          
          {/* Staff Closure to Knowledge */}
          <path d='M 500 800 L 500 900' className='flow-path-animated' />
        </svg>

        {/* Row 1: SD, OC, Staff Op (Horizontal) */}
        <div className='node-row'>
          <Node id='sd' icon={<Headphones size={24} />} title='Service Desk' desc='รับเรื่องแจ้งปัญหา' className='node-service-desk' />
          <Node id='oc' icon={<Settings size={24} />} title='Ops Control' desc='วิเคราะห์และจ่ายงาน' className='node-ops-control' />
          <Node id='staff-op' icon={<Users size={24} />} title='Staff Operation' desc='เจ้าหน้าที่ดำเนินงาน' className='node-staff-op' />
        </div>
        
        {/* Row 2: Boards (Branches) */}
        <div className='node-row'>
          <Node id='ba' icon={<Layout size={20} />} title='Board: App' desc='สายงานซอฟต์แวร์' className='node-board-app' />
          <Node id='bt' icon={<Cpu size={20} />} title='Board: Tech' desc='สายงานโครงสร้าง' className='node-board-tech' />
          <Node id='bf' icon={<Package size={20} />} title='Board: Fulfill' desc='สายงานจัดหา' className='node-board-fulfill' />
        </div>
        
        {/* Row 3: Staff Closure */}
        <div className='node-row'>
          <Node id='staff-cl' icon={<UserCheck size={24} />} title='Staff Closure' desc='เจ้าหน้าที่ปิดจบงาน' className='node-staff' />
        </div>
        
        {/* Row 4: Knowledge Base */}
        <div className='node-row'>
          <Node id='kb' icon={<LibraryBig size={24} />} title='Knowledge' desc='บันทึกฐานความรู้' className='node-kb' />
        </div>
      </div>
      <footer className='footer'>Created by Bird Oracle 🦜</footer>
    </div>
  );
}
export default App;