import React from 'react';
import { 
  Headphones, 
  Settings, 
  Layout, 
  Code, 
  Cpu, 
  Package, 
  UserCheck, 
  LibraryBig,
  ArrowDown
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
  <div className={`node-card ${className}`}>
    <div className="node-icon">{icon}</div>
    <div className="node-title">{title}</div>
    <div className="node-desc">{desc}</div>
  </div>
);

function App() {
  return (
    <div className="infographic-container">
      <header className="workflow-header">
        <h1>Service Workflow Journey</h1>
        <p>From First Contact to Knowledge Mastery</p>
      </header>

      <div className="workflow-canvas">
        {/* Row 1: Service Desk */}
        <div className="node-row">
          <Node 
            id="sd"
            icon={<Headphones size={32} />}
            title="Service Desk"
            desc="จุดรับเรื่องแจ้งปัญหาและคำขอรับบริการเบื้องต้น"
            className="node-service-desk"
          />
        </div>

        <div className="node-row"><ArrowDown className="opacity-20" /></div>

        {/* Row 2: Operation Control */}
        <div className="node-row">
          <Node 
            id="oc"
            icon={<Settings size={32} />}
            title="Operation Control"
            desc="วิเคราะห์ คัดกรอง และประเมินลำดับความสำคัญของงาน"
            className="node-ops-control"
          />
        </div>

        <div className="node-row"><ArrowDown className="opacity-20" /></div>

        {/* Row 3: Boards (Branches) */}
        <div className="node-row">
          <Node 
            id="ba"
            icon={<Layout size={28} />}
            title="Board: App"
            desc="งานด้าน Application และ Software"
            className="node-board-app"
          />
          <Node 
            id="bt"
            icon={<Cpu size={28} />}
            title="Board: Tech"
            desc="งานด้าน Infrastructure และ Hardware"
            className="node-board-tech"
          />
          <Node 
            id="bf"
            icon={<Package size={28} />}
            title="Board: Fulfill"
            desc="งานด้านการจัดหาและติดตั้งอุปกรณ์"
            className="node-board-fulfill"
          />
        </div>

        <div className="node-row"><ArrowDown className="opacity-20" /></div>

        {/* Row 4: Staff Closure */}
        <div className="node-row">
          <Node 
            id="sc"
            icon={<UserCheck size={32} />}
            title="Staff Resolution"
            desc="เจ้าหน้าที่ดำเนินการแก้ปัญหาและปิดจบงาน"
            className="node-staff"
          />
        </div>

        <div className="node-row"><ArrowDown className="opacity-20" /></div>

        {/* Row 5: Knowledge Base */}
        <div className="node-row">
          <Node 
            id="kb"
            icon={<LibraryBig size={32} />}
            title="Knowledge Base"
            desc="บันทึกวิธีการแก้ปัญหาเพื่อเป็นคลังความรู้ในอนาคต"
            className="node-kb"
          />
        </div>

        {/* SVG Connections could be added here for complex paths, 
            but for now using ArrowDown for clarity in the fast prototype */}
      </div>
      
      <footer style={{marginTop: '4rem', opacity: 0.5, fontSize: '0.8rem'}}>
        Created by Bird Oracle 🦜 | Prism Bird Theme
      </footer>
    </div>
  );
}

export default App;
