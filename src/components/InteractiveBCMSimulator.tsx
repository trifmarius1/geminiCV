import React, { useState, useEffect, useRef } from 'react';
import { 
  Car, 
  Cpu, 
  Activity, 
  CheckCircle2, 
  AlertTriangle, 
  Play, 
  RotateCcw, 
  Terminal, 
  Lock, 
  Unlock, 
  Lightbulb, 
  Zap, 
  Thermometer, 
  Sparkles,
  ShieldCheck,
  Radio,
  Sliders
} from 'lucide-react';
import { simulatedCANMessages } from '../data/cvData';
import { CANMessage, Language } from '../types';

interface BCMState {
  doorLocked: boolean;
  headlightsOn: boolean;
  highBeamsOn: boolean;
  ambientColor: string;
  ambientIntensity: number;
  batteryPrecondition: boolean;
  hazardLightsOn: boolean;
  speedKmh: number;
  safetyOverrideActive: boolean;
}

interface LogEntry {
  timestamp: string;
  canId: string;
  name: string;
  dlc: number;
  payload: string;
  safety: string;
  assertion: string;
  status: 'PASS' | 'WARN' | 'EXEC';
}

export const InteractiveBCMSimulator: React.FC<{ currentLang: Language }> = () => {
  const [bcmState, setBcmState] = useState<BCMState>({
    doorLocked: true,
    headlightsOn: false,
    highBeamsOn: false,
    ambientColor: '#d946ef', // Magenta signature
    ambientIntensity: 85,
    batteryPrecondition: false,
    hazardLightsOn: false,
    speedKmh: 48,
    safetyOverrideActive: false
  });

  const [logs, setLogs] = useState<LogEntry[]>([
    {
      timestamp: '00:00:01.120',
      canId: '0x1A4',
      name: 'BCM_DoorLock_Status',
      dlc: 8,
      payload: '01 80 00 FF 12 00 5A 9C',
      safety: 'ASIL-B',
      assertion: 'assert BCM.latch_integrity == 1 && ASIL_B_CRC == VALID',
      status: 'PASS'
    },
    {
      timestamp: '00:00:01.140',
      canId: '0x3C8',
      name: 'CLUSTER_Speedo_Telltale',
      dlc: 8,
      payload: '00 48 00 00 02 1A 8F 33',
      safety: 'ASIL-D',
      assertion: 'assert CLUSTER.speed_broadcast == 48kmh && ISO26262_HB == OK',
      status: 'PASS'
    }
  ]);

  const [isAutomatedSuiteRunning, setIsAutomatedSuiteRunning] = useState(false);
  const logContainerRef = useRef<HTMLDivElement>(null);

  const triggerCANMessage = (
    canId: string, 
    name: string, 
    payload: string, 
    safety: string, 
    assertion: string
  ) => {
    const now = new Date();
    const timeString = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}.${String(now.getMilliseconds()).padStart(3, '0')}`;
    
    const newEntry: LogEntry = {
      timestamp: timeString,
      canId,
      name,
      dlc: 8,
      payload,
      safety,
      assertion,
      status: 'PASS'
    };

    setLogs((prev) => [newEntry, ...prev.slice(0, 19)]);
  };

  const toggleDoorLock = () => {
    const nextLocked = !bcmState.doorLocked;
    setBcmState(prev => ({ ...prev, doorLocked: nextLocked }));
    triggerCANMessage(
      '0x1A4',
      'BCM_DoorLock_Cmd',
      nextLocked ? '01 80 00 FF 12 00 5A 9C' : '00 20 00 00 12 00 3C 41',
      'ASIL-B',
      `assert BCM.central_lock == ${nextLocked ? 'LOCKED' : 'UNLOCKED'} (Python SWIT Passed)`
    );
  };

  const toggleHeadlights = () => {
    const nextState = !bcmState.headlightsOn;
    setBcmState(prev => ({ ...prev, headlightsOn: nextState }));
    triggerCANMessage(
      '0x2B0',
      'BCM_ExteriorLight_Ctrl',
      nextState ? '03 00 24 10 00 FF 4B A1' : '00 00 00 00 00 00 00 00',
      'ASIL-B',
      `assert BCM.matrix_led_lowbeam == ${nextState ? 'ON' : 'OFF'} [ISO 26262 Compliant]`
    );
  };

  const togglePreconditioning = () => {
    const nextState = !bcmState.batteryPrecondition;
    setBcmState(prev => ({ ...prev, batteryPrecondition: nextState }));
    triggerCANMessage(
      '0x4F2',
      'EV_Thermal_PreCondition',
      nextState ? '14 22 05 01 00 00 C3 E4' : '00 00 00 00 00 00 00 00',
      'ASIL-B',
      `assert EV_BMS.preconditioning_requested == ${nextState ? 'TRUE' : 'FALSE'}`
    );
  };

  const toggleHazardLights = () => {
    const nextState = !bcmState.hazardLightsOn;
    setBcmState(prev => ({ ...prev, hazardLightsOn: nextState }));
    triggerCANMessage(
      '0x2B5',
      'BCM_Hazard_Flasher',
      nextState ? 'AA 55 AA 55 FF 00 FF 00' : '00 00 00 00 00 00 00 00',
      'ASIL-B',
      `assert BCM.emergency_hazards == ${nextState ? 'FLASHING' : 'IDLE'} (Sync 1.5Hz)`
    );
  };

  const runAutomatedPythonSWIT = () => {
    if (isAutomatedSuiteRunning) return;
    setIsAutomatedSuiteRunning(true);
    
    // Automated test progression simulating Python SWIT execution in VS Code
    const sequence = [
      {
        delay: 400,
        action: () => {
          setBcmState(s => ({ ...s, doorLocked: true, headlightsOn: true }));
          triggerCANMessage('0x100', 'SWIT_Init_DiagSession', '02 10 03 00 00 00 00 00', 'QM', 'DiagnosticExtendedSession (0x10 0x03) -> Positive Response 0x50 0x03');
        }
      },
      {
        delay: 1100,
        action: () => {
          setBcmState(s => ({ ...s, hazardLightsOn: true }));
          triggerCANMessage('0x2B0', 'SWIT_BCM_MatrixLED_Verify', '03 00 24 10 00 FF 4B A1', 'ASIL-B', 'SWIT-042: Vector CANoe automated bus sweep -> 100% frame check OK');
        }
      },
      {
        delay: 1800,
        action: () => {
          setBcmState(s => ({ ...s, batteryPrecondition: true }));
          triggerCANMessage('0x4F2', 'SWIT_EV_HV_Precondition_Ack', '14 22 05 01 00 00 C3 E4', 'ASIL-B', 'SWIT-089: BMS thermal loop handshake within 45ms SLA');
        }
      },
      {
        delay: 2500,
        action: () => {
          triggerCANMessage('0x3C8', 'SWIT_AI_Agent_Regression_Done', 'AA AA AA AA 55 55 55 55', 'ASIL-D', 'AI Agent automated test matrix: 124 boundary tests passed, 0 defects escaped');
          setIsAutomatedSuiteRunning(false);
        }
      }
    ];

    sequence.forEach(step => {
      setTimeout(step.action, step.delay);
    });
  };

  const resetSimulator = () => {
    setBcmState({
      doorLocked: true,
      headlightsOn: false,
      highBeamsOn: false,
      ambientColor: '#d946ef',
      ambientIntensity: 85,
      batteryPrecondition: false,
      hazardLightsOn: false,
      speedKmh: 48,
      safetyOverrideActive: false
    });
    setLogs([
      {
        timestamp: 'RESET.000',
        canId: '0x000',
        name: 'VECTOR_CAN_SYS_RESET',
        dlc: 8,
        payload: '00 00 00 00 00 00 00 00',
        safety: 'QM',
        assertion: 'Hardware-in-the-Loop test bench reset to default initial state',
        status: 'PASS'
      }
    ]);
  };

  return (
    <section id="bcm-lab" className="py-16 md:py-24 bg-neutral-950 relative border-t border-fuchsia-950/80">
      
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-700/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-fuchsia-950 text-fuchsia-300 border border-fuchsia-800/60 shadow-inner">
            <Cpu className="w-3.5 h-3.5 text-fuchsia-400" />
            <span>Automotive Domain Interactive Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Virtual EV Body Control Module (BCM) & CAN Bus Lab
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Experience Marius Trif's core automotive engineering expertise: triggering in-vehicle CAN signals, inspecting real-time bus telemetry, verifying ISO 26262 functional safety, and executing automated Python SWIT test routines.
          </p>
        </div>

        {/* The Diagnostic Bench */}
        <div className="rounded-2xl p-1 bg-gradient-to-r from-fuchsia-950 via-purple-900/40 to-pink-950 border border-fuchsia-900/50 shadow-2xl">
          <div className="rounded-[14px] bg-neutral-950 p-4 sm:p-6 lg:p-8 space-y-6">
            
            {/* Top Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300">
                  <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                  <span>BUS: CAN-FD 500k/2M</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-fuchsia-950/60 border border-fuchsia-800/50 text-xs font-mono text-fuchsia-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-fuchsia-400" />
                  <span>ISO 26262 ASIL-B / ASIL-D Validated</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={runAutomatedPythonSWIT}
                  disabled={isAutomatedSuiteRunning}
                  id="bcm-run-swit-btn"
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer ${
                    isAutomatedSuiteRunning
                      ? 'bg-neutral-800 text-neutral-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white hover:from-fuchsia-500 hover:to-pink-500 shadow-fuchsia-600/30'
                  }`}
                >
                  <Play className={`w-3.5 h-3.5 ${isAutomatedSuiteRunning ? 'animate-spin' : ''}`} />
                  <span>{isAutomatedSuiteRunning ? 'Executing Python SWIT...' : 'Run Automated Python SWIT Suite'}</span>
                </button>

                <button
                  onClick={resetSimulator}
                  id="bcm-reset-bench-btn"
                  className="p-2 rounded-xl text-neutral-400 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 transition-colors"
                  title="Reset test bench"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Split View: Virtual Vehicle Controls (Left) & Vector CANoe Telemetry Log (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Left Column (5 cols): In-Vehicle Actuators & BCM State */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-4 rounded-xl bg-neutral-900/90 border border-fuchsia-950/60 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-fuchsia-400 flex items-center gap-1.5">
                      <Sliders className="w-3.5 h-3.5" />
                      In-Vehicle Actuators (BCM)
                    </span>
                    <span className="text-[11px] text-neutral-400">Click to dispatch signals</span>
                  </div>

                  {/* Actuator Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    
                    {/* Door Lock */}
                    <button
                      onClick={toggleDoorLock}
                      id="bcm-toggle-lock"
                      className={`p-3 rounded-xl border text-left flex flex-col justify-between h-24 transition-all cursor-pointer ${
                        bcmState.doorLocked
                          ? 'bg-fuchsia-950/40 border-fuchsia-600/60 text-white shadow-lg shadow-fuchsia-950/40'
                          : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        {bcmState.doorLocked ? <Lock className="w-5 h-5 text-fuchsia-400" /> : <Unlock className="w-5 h-5 text-neutral-500" />}
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${bcmState.doorLocked ? 'bg-fuchsia-500/20 text-fuchsia-300' : 'bg-neutral-800 text-neutral-400'}`}>
                          {bcmState.doorLocked ? 'LOCKED' : 'OPEN'}
                        </span>
                      </div>
                      <div>
                        <span className="text-xs font-bold block">EV Central Lock</span>
                        <span className="text-[10px] text-neutral-400 font-mono">CAN 0x1A4</span>
                      </div>
                    </button>

                    {/* Exterior Bi-LED Matrix Lights */}
                    <button
                      onClick={toggleHeadlights}
                      id="bcm-toggle-headlights"
                      className={`p-3 rounded-xl border text-left flex flex-col justify-between h-24 transition-all cursor-pointer ${
                        bcmState.headlightsOn
                          ? 'bg-pink-950/40 border-pink-500/60 text-white shadow-lg shadow-pink-950/40'
                          : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <Lightbulb className={`w-5 h-5 ${bcmState.headlightsOn ? 'text-pink-400 fill-pink-400/20' : 'text-neutral-500'}`} />
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${bcmState.headlightsOn ? 'bg-pink-500/20 text-pink-300' : 'bg-neutral-800 text-neutral-400'}`}>
                          {bcmState.headlightsOn ? 'ACTIVE' : 'OFF'}
                        </span>
                      </div>
                      <div>
                        <span className="text-xs font-bold block">Bi-LED Matrix</span>
                        <span className="text-[10px] text-neutral-400 font-mono">CAN 0x2B0</span>
                      </div>
                    </button>

                    {/* EV Battery Thermal Pre-conditioning */}
                    <button
                      onClick={togglePreconditioning}
                      id="bcm-toggle-preconditioning"
                      className={`p-3 rounded-xl border text-left flex flex-col justify-between h-24 transition-all cursor-pointer ${
                        bcmState.batteryPrecondition
                          ? 'bg-purple-950/40 border-purple-500/60 text-white shadow-lg shadow-purple-950/40'
                          : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <Thermometer className={`w-5 h-5 ${bcmState.batteryPrecondition ? 'text-purple-400' : 'text-neutral-500'}`} />
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${bcmState.batteryPrecondition ? 'bg-purple-500/20 text-purple-300' : 'bg-neutral-800 text-neutral-400'}`}>
                          {bcmState.batteryPrecondition ? 'HV WARM' : 'STANDBY'}
                        </span>
                      </div>
                      <div>
                        <span className="text-xs font-bold block">Battery Pre-Heat</span>
                        <span className="text-[10px] text-neutral-400 font-mono">CAN 0x4F2</span>
                      </div>
                    </button>

                    {/* Emergency Hazards */}
                    <button
                      onClick={toggleHazardLights}
                      id="bcm-toggle-hazards"
                      className={`p-3 rounded-xl border text-left flex flex-col justify-between h-24 transition-all cursor-pointer ${
                        bcmState.hazardLightsOn
                          ? 'bg-rose-950/50 border-rose-500/80 text-white animate-pulse'
                          : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <AlertTriangle className={`w-5 h-5 ${bcmState.hazardLightsOn ? 'text-rose-400' : 'text-neutral-500'}`} />
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${bcmState.hazardLightsOn ? 'bg-rose-500/30 text-rose-300' : 'bg-neutral-800 text-neutral-400'}`}>
                          {bcmState.hazardLightsOn ? 'ACTIVE' : 'IDLE'}
                        </span>
                      </div>
                      <div>
                        <span className="text-xs font-bold block">Hazard Flasher</span>
                        <span className="text-[10px] text-neutral-400 font-mono">CAN 0x2B5</span>
                      </div>
                    </button>

                  </div>

                  {/* Luxury Magenta Ambient Lighting Bar (EV Feature) */}
                  <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800/80 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-neutral-300 font-medium flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />
                        Signature Magenta Ambient Lighting (CAN 0x510)
                      </span>
                      <span className="font-mono text-fuchsia-400 text-[11px] font-bold">#D946EF • 85%</span>
                    </div>
                    {/* Glowing LED simulated bar */}
                    <div 
                      className="h-2 rounded-full w-full transition-all duration-300 shadow-md shadow-fuchsia-500/40"
                      style={{ 
                        backgroundColor: bcmState.ambientColor,
                        boxShadow: `0 0 15px ${bcmState.ambientColor}`
                      }}
                    />
                  </div>

                  {/* Methodology Note */}
                  <div className="p-2.5 rounded-lg bg-fuchsia-950/20 border border-fuchsia-900/30 text-[11px] text-neutral-300 flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-fuchsia-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>Automotive Testing Note:</strong> Each actuation dispatches a CAN message verified against <strong>IBM DOORS</strong> requirement IDs and <strong>ISO 26262</strong> safety envelopes.
                    </span>
                  </div>

                </div>
              </div>

              {/* Right Column (7 cols): Vector CANoe / CANalyzer Trace Log */}
              <div className="lg:col-span-7 space-y-3">
                <div className="rounded-xl bg-neutral-950 border border-fuchsia-900/60 overflow-hidden shadow-xl">
                  
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-900/90 border-b border-neutral-800 text-xs text-neutral-300">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-fuchsia-400" />
                      <span className="font-mono font-bold text-white">Vector CANoe / CANalyzer Trace Log</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/40">
                        LIVE CAPTURE
                      </span>
                    </div>
                    <span className="text-[11px] text-neutral-500 font-mono">
                      {logs.length} Frames
                    </span>
                  </div>

                  {/* Log Content */}
                  <div 
                    ref={logContainerRef}
                    className="p-3 font-mono text-[11px] sm:text-xs space-y-2 max-h-[380px] overflow-y-auto"
                  >
                    {logs.map((log, index) => (
                      <div 
                        key={`${log.timestamp}-${index}`}
                        className={`p-2.5 rounded-lg border transition-all ${
                          index === 0 
                            ? 'bg-fuchsia-950/30 border-fuchsia-800/60 shadow-sm' 
                            : 'bg-neutral-900/40 border-neutral-900 text-neutral-400'
                        }`}
                      >
                        <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                          <div className="flex items-center gap-2">
                            <span className="text-neutral-500">{log.timestamp}</span>
                            <span className="font-bold text-fuchsia-300 bg-fuchsia-950/80 px-1.5 py-0.5 rounded text-[10px]">
                              {log.canId}
                            </span>
                            <span className="font-semibold text-neutral-200">
                              {log.name}
                            </span>
                          </div>
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800/30">
                            {log.safety}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 text-neutral-300 text-[11px]">
                          <span className="text-neutral-500">DLC:{log.dlc}</span>
                          <span className="text-pink-400 bg-neutral-950 px-2 py-0.5 rounded border border-neutral-800">
                            DATA: {log.payload}
                          </span>
                        </div>

                        <div className="mt-1.5 pt-1.5 border-t border-neutral-800/50 flex items-center justify-between text-[10px]">
                          <span className="text-emerald-400 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                            {log.assertion}
                          </span>
                          <span className="text-neutral-500 uppercase">PASS</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Terminal Footer */}
                  <div className="px-4 py-2 bg-neutral-900/60 border-t border-neutral-800/80 flex items-center justify-between text-[11px] text-neutral-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-ping" />
                      CAN bus load: 34.2% • Baud: 500kbit/s • Zero frame errors
                    </span>
                    <span className="font-mono text-fuchsia-400 font-semibold">
                      Trace Verified
                    </span>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
