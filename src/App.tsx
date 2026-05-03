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
        <svg className='svg-overlay' viewBox='0 0 1000 1200' preserveAspectRatio='none'>
          {/* SD to OC */}
          <path d='M 500 50 L 500 120' className='flow-path-animated' />
          
          {/* OC to Boards */}
          <path d='M 500 240 L 500 300' className='flow-path-animated' />
          <path d='M 500 300 L 250 300 L 250 360' className='flow-path-animated' />
          <path d='M 500 300 L 500 360' className='flow-path-animated' />
          <path d='M 500 300 L 750 300 L 750 360' className='flow-path-animated' />
          
          {/* Boards to Staff Operation */}
          <path d='M 250 510 L 250 560 L 500 560 L 500 620' className='flow-path-animated' />
          <path d='M 500 510 L 500 620' className='flow-path-animated' />
          <path d='M 750 510 L 750 560 L 500 560 L 500 620' className='flow-path-animated' />
          
          {/* Staff Operation to Staff Closure */}
          <path d='M 500 770 L 500 840' className='flow-path-animated' />
          
          {/* Staff Closure to Knowledge */}
          <path d='M 500 960 L 500 1050' className='flow-path-animated' />
        </svg>

        <div className='node-row'>
          <Node id='sd' icon={<Headphones size={22} />} title='Service Desk' desc='รับเรื่องแจ้งปัญหา' className='node-service-desk' />
        </div>
        
        <div className='node-row'>
          <Node id='oc' icon={<Settings size={22} />} title='Ops Control' desc='วิเคราะห์และจ่ายงาน' className='node-ops-control' />
        </div>
        
        <div className='node-row'>
          <Node id='ba' icon={<Layout size={18} />} title='Board: App' desc='สายงานซอฟต์แวร์' className='node-board-app' />
          <Node id='bt' icon={<Cpu size={18} />} title='Board: Tech' desc='สายงานโครงสร้าง' className='node-board-tech' />
          <Node id='bf' icon={<Package size={18} />} title='Board: Fulfill' desc='สายงานจัดหา' className='node-board-fulfill' />
        </div>
        
        <div className='node-row'>
          <Node id='staff-op' icon={<Users size={22} />} title='Staff Operation' desc='เจ้าหน้าที่ดำเนินงาน' className='node-staff-op' />
        </div>
        
        <div className='node-row'>
          <Node id='staff-cl' icon={<UserCheck size={22} />} title='Staff Closure' desc='เจ้าหน้าที่ปิดจบงาน' className='node-staff' />
        </div>
        
        <div className='node-row'>
          <Node id='kb' icon={<LibraryBig size={22} />} title='Knowledge' desc='บันทึกฐานความรู้' className='node-kb' />
        </div>
      </div>
      <footer className='footer'>Created by Bird Oracle 🦜</footer>
    </div>
  );
}
export default App;