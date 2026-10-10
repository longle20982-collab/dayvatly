import React, { useState, useEffect, useRef } from 'react';
import { MathFormula } from './MathFormula';

interface SimProps {
  type: 'motion10' | 'newton10' | 'oscillator11' | 'ohm11' | 'heat12' | 'gas12';
}

export const InteractiveSimulator: React.FC<SimProps> = ({ type }) => {
  // Common animation control
  const [isRunning, setIsRunning] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // 1. Motion 10 State: v0, a, time
  const [v0, setV0] = useState(2); // m/s
  const [acc, setAcc] = useState(1.5); // m/s²
  const [simTime, setSimTime] = useState(0);

  // 2. Newton 10 State: Mass, Force, Friction coeff
  const [mass, setMass] = useState(2); // kg
  const [force, setForce] = useState(8); // N
  const [frictionCoeff, setFrictionCoeff] = useState(0.1);

  // 3. Oscillator 11 State: Amplitude, omega, phi
  const [amp, setAmp] = useState(5); // cm
  const [omega, setOmega] = useState(3); // rad/s
  const [phi, setPhi] = useState(0); // rad

  // 4. Ohm 11 State: U, R
  const [voltage, setVoltage] = useState(12); // V
  const [resistance, setResistance] = useState(24); // Ohm

  // 5. Heat 12 State: Power, water mass, boiling timer
  const [heaterPower, setHeaterPower] = useState(800); // W
  const [initialWater, setInitialWater] = useState(500); // g
  const [boiledTime, setBoiledTime] = useState(0); // s

  // 6. Gas 12 State: Volume, Temp, Molecules
  const [gasVolume, setGasVolume] = useState(5); // Liters
  const [gasTemp, setGasTemp] = useState(300); // Kelvin

  // Reset simulator state
  const handleReset = () => {
    setIsRunning(false);
    setSimTime(0);
    setBoiledTime(0);
  };

  // Animation loop
  useEffect(() => {
    let animId: number;
    let lastStamp = performance.now();

    const loop = (currentStamp: number) => {
      const dt = Math.min((currentStamp - lastStamp) / 1000, 0.05);
      lastStamp = currentStamp;

      if (isRunning) {
        setSimTime(t => t + dt);
        setBoiledTime(t => t + dt);
      }

      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          // RENDER BASED ON SIM TYPE
          if (type === 'motion10') {
            renderMotion10(ctx, canvas.width, canvas.height, v0, acc, simTime);
          } else if (type === 'newton10') {
            renderNewton10(ctx, canvas.width, canvas.height, mass, force, frictionCoeff, simTime);
          } else if (type === 'oscillator11') {
            renderOscillator11(ctx, canvas.width, canvas.height, amp, omega, phi, simTime);
          } else if (type === 'ohm11') {
            renderOhm11(ctx, canvas.width, canvas.height, voltage, resistance);
          } else if (type === 'heat12') {
            renderHeat12(ctx, canvas.width, canvas.height, heaterPower, initialWater, boiledTime);
          } else if (type === 'gas12') {
            renderGas12(ctx, canvas.width, canvas.height, gasVolume, gasTemp, simTime);
          }
        }
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [isRunning, type, v0, acc, simTime, mass, force, frictionCoeff, amp, omega, phi, voltage, resistance, heaterPower, initialWater, boiledTime, gasVolume, gasTemp]);

  // Canvas renderers
  const renderMotion10 = (
    ctx: CanvasRenderingContext2D,
    w: number,
    h: number,
    v0Val: number,
    aVal: number,
    t: number
  ) => {
    // Current displacement d = v0*t + 0.5*a*t^2
    const d = v0Val * t + 0.5 * aVal * t * t;
    const v = v0Val + aVal * t;

    // Track
    const trackY = 140;
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(30, trackY);
    ctx.lineTo(w - 30, trackY);
    ctx.stroke();

    // Ticks on track
    for (let i = 0; i <= 10; i++) {
      const tx = 40 + i * ((w - 80) / 10);
      ctx.beginPath();
      ctx.moveTo(tx, trackY - 5);
      ctx.lineTo(tx, trackY + 5);
      ctx.stroke();
      ctx.fillStyle = '#64748b';
      ctx.font = '10px sans-serif';
      ctx.fillText(`${i * 10}m`, tx - 8, trackY + 20);
    }

    // Cart position (scale 100m to w-100)
    const px = Math.min(Math.max(40 + (d % 100) * ((w - 80) / 100), 40), w - 50);

    // Draw Cart
    ctx.fillStyle = '#1e3a8a';
    ctx.fillRect(px - 25, trackY - 35, 50, 25);
    // Wheels
    ctx.fillStyle = '#334155';
    ctx.beginPath();
    ctx.arc(px - 15, trackY - 5, 6, 0, Math.PI * 2);
    ctx.arc(px + 15, trackY - 5, 6, 0, Math.PI * 2);
    ctx.fill();

    // Velocity arrow
    if (Math.abs(v) > 0.1) {
      const arrowLen = Math.max(Math.min(v * 8, 80), -80);
      ctx.strokeStyle = '#0d9488';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(px, trackY - 45);
      ctx.lineTo(px + arrowLen, trackY - 45);
      ctx.stroke();
      // Arrow head
      ctx.fillStyle = '#0d9488';
      ctx.beginPath();
      ctx.moveTo(px + arrowLen + (v > 0 ? 6 : -6), trackY - 45);
      ctx.lineTo(px + arrowLen, trackY - 49);
      ctx.lineTo(px + arrowLen, trackY - 41);
      ctx.fill();
    }

    // Mini graph box (v-t)
    const gx = w - 180;
    const gy = 15;
    const gw = 160;
    const gh = 85;
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(gx, gy, gw, gh);
    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 1;
    ctx.strokeRect(gx, gy, gw, gh);

    // Axes
    ctx.strokeStyle = '#64748b';
    ctx.beginPath();
    ctx.moveTo(gx + 20, gy + gh - 15);
    ctx.lineTo(gx + gw - 10, gy + gh - 15); // t axis
    ctx.moveTo(gx + 20, gy + 10);
    ctx.lineTo(gx + 20, gy + gh - 15); // v axis
    ctx.stroke();

    ctx.fillStyle = '#475569';
    ctx.font = '9px sans-serif';
    ctx.fillText('v(m/s)', gx + 5, gy + 12);
    ctx.fillText('t(s)', gx + gw - 15, gy + gh - 5);

    // Line v = v0 + at
    ctx.strokeStyle = '#2563eb';
    ctx.lineWidth = 2;
    ctx.beginPath();
    const gv0Y = gy + gh - 15 - Math.min(v0Val * 3, 50);
    const gvEnd = gy + gh - 15 - Math.min((v0Val + aVal * 5) * 3, 60);
    ctx.moveTo(gx + 20, gv0Y);
    ctx.lineTo(gx + gw - 20, gvEnd);
    ctx.stroke();
  };

  const renderNewton10 = (
    ctx: CanvasRenderingContext2D,
    w: number,
    h: number,
    mVal: number,
    fVal: number,
    mu: number,
    t: number
  ) => {
    const f_friction = mu * mVal * 9.8;
    const netForce = Math.max(fVal - f_friction, 0);
    const calculatedAcc = netForce / mVal;
    const d = 0.5 * calculatedAcc * t * t;

    const trackY = 130;
    // Surface
    ctx.fillStyle = '#e2e8f0';
    ctx.fillRect(20, trackY, w - 40, 20);

    const px = Math.min(50 + (d % 80) * ((w - 120) / 80), w - 80);
    const cartW = 30 + mVal * 15;
    const cartH = 35;

    // Cart Body
    ctx.fillStyle = '#1e3a8a';
    ctx.fillRect(px - cartW / 2, trackY - cartH, cartW, cartH);
    ctx.fillStyle = '#ffffff';
    ctx.font = '11px sans-serif';
    ctx.fillText(`m = ${mVal}kg`, px - 18, trackY - 14);

    // Force vectors
    // 1. Force F (Pull)
    ctx.strokeStyle = '#0d9488';
    ctx.lineWidth = 3;
    const fArrow = Math.min(fVal * 5, 80);
    ctx.beginPath();
    ctx.moveTo(px + cartW / 2, trackY - cartH / 2);
    ctx.lineTo(px + cartW / 2 + fArrow, trackY - cartH / 2);
    ctx.stroke();
    ctx.fillStyle = '#0d9488';
    ctx.font = '10px sans-serif';
    ctx.fillText(`F = ${fVal}N`, px + cartW / 2 + fArrow + 4, trackY - cartH / 2 + 3);

    // 2. Friction
    if (f_friction > 0.1) {
      ctx.strokeStyle = '#dc2626';
      ctx.lineWidth = 2;
      const fFricArrow = Math.min(f_friction * 5, 50);
      ctx.beginPath();
      ctx.moveTo(px - cartW / 2, trackY - 5);
      ctx.lineTo(px - cartW / 2 - fFricArrow, trackY - 5);
      ctx.stroke();
      ctx.fillStyle = '#dc2626';
      ctx.fillText(`Fms = ${f_friction.toFixed(1)}N`, px - cartW / 2 - fFricArrow - 55, trackY - 2);
    }
  };

  const renderOscillator11 = (
    ctx: CanvasRenderingContext2D,
    w: number,
    h: number,
    aMax: number,
    om: number,
    phi0: number,
    t: number
  ) => {
    const centerY = 110;
    const leftAnchorX = 50;
    const eqX = 220; // Equilibrium position
    const scale = 12; // pixels per cm

    // Current x = A cos(omega*t + phi)
    const currentX = aMax * Math.cos(om * t + phi0);
    const massX = eqX + currentX * scale;

    // 1. Spring
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(leftAnchorX, centerY);
    const coils = 16;
    const springLen = massX - leftAnchorX - 20;
    const step = springLen / coils;
    for (let i = 0; i < coils; i++) {
      const cx = leftAnchorX + i * step + step / 2;
      const cy = centerY + (i % 2 === 0 ? -12 : 12);
      ctx.lineTo(cx, cy);
    }
    ctx.lineTo(massX - 20, centerY);
    ctx.stroke();

    // Wall anchor
    ctx.fillStyle = '#64748b';
    ctx.fillRect(leftAnchorX - 10, centerY - 30, 10, 60);

    // Oscillating Mass
    ctx.fillStyle = '#2563eb';
    ctx.fillRect(massX - 20, centerY - 20, 40, 40);
    ctx.fillStyle = '#ffffff';
    ctx.font = '10px sans-serif';
    ctx.fillText('m', massX - 5, centerY + 4);

    // Equilibrium marker
    ctx.strokeStyle = '#ef4444';
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(eqX, centerY - 40);
    ctx.lineTo(eqX, centerY + 40);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = '#ef4444';
    ctx.font = '9px sans-serif';
    ctx.fillText('VTCB (x=0)', eqX - 20, centerY + 52);

    // Reference Circle on the right
    const circleCenterX = w - 100;
    const circleRadius = aMax * 4;
    ctx.strokeStyle = '#cbd5e1';
    ctx.beginPath();
    ctx.arc(circleCenterX, centerY, circleRadius, 0, Math.PI * 2);
    ctx.stroke();

    // Rotating radius vector (angle = om*t + phi0)
    const angle = -(om * t + phi0); // negative because canvas Y is flipped
    const px = circleCenterX + circleRadius * Math.cos(angle);
    const py = centerY + circleRadius * Math.sin(angle);
    ctx.strokeStyle = '#0d9488';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(circleCenterX, centerY);
    ctx.lineTo(px, py);
    ctx.stroke();
    ctx.fillStyle = '#0d9488';
    ctx.beginPath();
    ctx.arc(px, py, 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#475569';
    ctx.font = '9px sans-serif';
    ctx.fillText('Vòng tròn pha', circleCenterX - 28, centerY + circleRadius + 18);
  };

  const renderOhm11 = (
    ctx: CanvasRenderingContext2D,
    w: number,
    h: number,
    uVal: number,
    rVal: number
  ) => {
    const iVal = uVal / rVal; // Amperes

    // Schematic circuit
    ctx.strokeStyle = '#1e3a8a';
    ctx.lineWidth = 3;
    const cx = 50;
    const cy = 40;
    const cw = 280;
    const ch = 120;

    // Loop
    ctx.strokeRect(cx, cy, cw, ch);

    // Power supply on left
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(cx - 10, cy + ch / 2 - 25, 20, 50);
    ctx.strokeStyle = '#1e3a8a';
    ctx.lineWidth = 4;
    // Long plate (+)
    ctx.beginPath();
    ctx.moveTo(cx - 15, cy + ch / 2 - 12);
    ctx.lineTo(cx + 15, cy + ch / 2 - 12);
    ctx.stroke();
    // Short plate (-)
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(cx - 8, cy + ch / 2 + 10);
    ctx.lineTo(cx + 8, cy + ch / 2 + 10);
    ctx.stroke();
    ctx.fillStyle = '#1e3a8a';
    ctx.font = '12px font-bold sans-serif';
    ctx.fillText(`U = ${uVal}V`, cx - 35, cy + ch / 2 + 35);

    // Resistor on right
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(cx + cw - 15, cy + ch / 2 - 25, 30, 50);
    ctx.strokeStyle = '#0d9488';
    ctx.lineWidth = 3;
    ctx.strokeRect(cx + cw - 12, cy + ch / 2 - 20, 24, 40);
    ctx.fillStyle = '#0d9488';
    ctx.font = '11px sans-serif';
    ctx.fillText(`R=${rVal}Ω`, cx + cw + 18, cy + ch / 2 + 4);

    // Ammeter on top wire
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(cx + cw / 2 - 20, cy - 20, 40, 40);
    ctx.strokeStyle = '#2563eb';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx + cw / 2, cy, 18, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = '#2563eb';
    ctx.font = 'bold 12px sans-serif';
    ctx.fillText('A', cx + cw / 2 - 5, cy + 4);

    // I-V plot on right
    const px = w - 170;
    const py = 25;
    const pw = 150;
    const ph = 135;
    ctx.fillStyle = '#f1f5f9';
    ctx.fillRect(px, py, pw, ph);
    ctx.strokeStyle = '#94a3b8';
    ctx.strokeRect(px, py, pw, ph);

    // axes
    ctx.strokeStyle = '#64748b';
    ctx.beginPath();
    ctx.moveTo(px + 25, py + ph - 20);
    ctx.lineTo(px + pw - 10, py + ph - 20);
    ctx.moveTo(px + 25, py + 15);
    ctx.lineTo(px + 25, py + ph - 20);
    ctx.stroke();

    ctx.fillStyle = '#475569';
    ctx.font = '10px sans-serif';
    ctx.fillText('I(A)', px + 5, py + 16);
    ctx.fillText('U(V)', px + pw - 20, py + ph - 6);

    // Characteristic straight line
    ctx.strokeStyle = '#0d9488';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(px + 25, py + ph - 20);
    const lineEndX = px + pw - 15;
    const lineEndY = py + ph - 20 - Math.min((24 / rVal) * 80, ph - 35);
    ctx.lineTo(lineEndX, lineEndY);
    ctx.stroke();

    // Current point
    const currPtX = px + 25 + (uVal / 24) * (pw - 40);
    const currPtY = py + ph - 20 - (iVal / (24 / rVal)) * (ph - 35);
    ctx.fillStyle = '#dc2626';
    ctx.beginPath();
    ctx.arc(currPtX, currPtY, 4, 0, Math.PI * 2);
    ctx.fill();
  };

  const renderHeat12 = (
    ctx: CanvasRenderingContext2D,
    w: number,
    h: number,
    power: number,
    m0: number,
    tBoil: number
  ) => {
    // Latent heat L = 2.26 * 10^6 J/kg = 2260 J/g
    const L = 2260; // J/g
    // Vaporized mass delta_m = (Power * t) / L
    const deltaM = Math.min((power * tBoil) / L, m0);
    const remainingM = m0 - deltaM;

    // Kettle / Calorimeter container
    const kx = 100;
    const ky = 40;
    const kw = 140;
    const kh = 120;

    // Kettle body
    ctx.fillStyle = '#e2e8f0';
    ctx.fillRect(kx, ky, kw, kh);
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 3;
    ctx.strokeRect(kx, ky, kw, kh);

    // Water level
    const waterHeight = (remainingM / 500) * (kh - 20);
    ctx.fillStyle = '#60a5fa';
    ctx.fillRect(kx + 4, ky + kh - waterHeight - 2, kw - 8, waterHeight);

    // Steam bubbles & vapor when boiling
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    for (let i = 0; i < 5; i++) {
      const bx = kx + 20 + i * 22;
      const by = ky + kh - 10 - ((tBoil * 30 + i * 20) % waterHeight);
      ctx.beginPath();
      ctx.arc(bx, by, 3, 0, Math.PI * 2);
      ctx.fill();
    }

    // Steam clouds above
    ctx.fillStyle = 'rgba(203, 213, 225, 0.6)';
    ctx.beginPath();
    ctx.arc(kx + kw / 2 - 15, ky - 15, 12, 0, Math.PI * 2);
    ctx.arc(kx + kw / 2 + 15, ky - 20, 16, 0, Math.PI * 2);
    ctx.fill();

    // Heating coil at bottom
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(kx + 20, ky + kh - 10);
    ctx.lineTo(kx + kw - 20, ky + kh - 10);
    ctx.stroke();

    // Scale / Balance underneath
    ctx.fillStyle = '#cbd5e1';
    ctx.fillRect(kx - 15, ky + kh + 4, kw + 30, 16);
    ctx.fillStyle = '#0f172a';
    ctx.font = '12px font-mono sans-serif';
    ctx.fillText(`${remainingM.toFixed(1)} g`, kx + kw / 2 - 20, ky + kh + 17);

    // Measurement data box on right
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(w - 220, 20, 200, 145);
    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 1;
    ctx.strokeRect(w - 220, 20, 200, 145);

    ctx.fillStyle = '#1e3a8a';
    ctx.font = 'bold 12px sans-serif';
    ctx.fillText('Đo Nhiệt hóa hơi riêng L', w - 210, 40);

    ctx.fillStyle = '#334155';
    ctx.font = '11px sans-serif';
    ctx.fillText(`Công suất P: ${power} W`, w - 210, 65);
    ctx.fillText(`Thời gian sôi τ: ${tBoil.toFixed(1)} s`, w - 210, 85);
    ctx.fillText(`Khối lượng mất: ${deltaM.toFixed(2)} g`, w - 210, 105);

    const calcL = deltaM > 0.05 ? ((power * tBoil) / (deltaM * 0.001) / 1e6).toFixed(2) : '2.26';
    ctx.fillStyle = '#0d9488';
    ctx.font = 'bold 12px sans-serif';
    ctx.fillText(`L đo được: ~${calcL} × 10⁶ J/kg`, w - 210, 135);
  };

  const renderGas12 = (
    ctx: CanvasRenderingContext2D,
    w: number,
    h: number,
    vLiters: number,
    tKelvin: number,
    time: number
  ) => {
    // Ideal Gas Law: P = n*R*T / V. Say n*R = 0.08
    const pAtm = ((0.08 * tKelvin) / vLiters).toFixed(2);

    // Cylinder chamber
    const cx = 80;
    const cy = 35;
    const maxChamberW = 240;
    const chamberH = 120;
    const currentW = (vLiters / 10) * maxChamberW;

    // Chamber background
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(cx, cy, maxChamberW, chamberH);
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 3;
    ctx.strokeRect(cx, cy, maxChamberW, chamberH);

    // Gas space
    ctx.fillStyle = '#eff6ff';
    ctx.fillRect(cx, cy, currentW, chamberH);

    // Piston
    ctx.fillStyle = '#94a3b8';
    ctx.fillRect(cx + currentW - 8, cy, 16, chamberH);
    // Piston rod
    ctx.fillStyle = '#64748b';
    ctx.fillRect(cx + currentW + 8, cy + chamberH / 2 - 8, maxChamberW - currentW + 20, 16);

    // Gas molecules
    const numMolecules = 25;
    ctx.fillStyle = '#2563eb';
    const speed = Math.sqrt(tKelvin / 300) * 1.5;
    for (let i = 0; i < numMolecules; i++) {
      const mx = cx + 8 + ((i * 37 + time * 60 * speed) % (currentW - 16));
      const my = cy + 8 + ((i * 29 + time * 45 * speed) % (chamberH - 16));
      ctx.beginPath();
      ctx.arc(mx, my, 3.5, 0, Math.PI * 2);
      ctx.fill();
    }

    // Pressure Gauge Dial on top
    const gx = cx + currentW / 2;
    const gy = cy - 5;
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(gx, gy - 16, 16, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Needle
    const needleAngle = -Math.PI + (parseFloat(pAtm) / 8) * Math.PI;
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(gx, gy - 16);
    ctx.lineTo(gx + 12 * Math.cos(needleAngle), gy - 16 + 12 * Math.sin(needleAngle));
    ctx.stroke();

    // Status Board on right
    ctx.fillStyle = '#f1f5f9';
    ctx.fillRect(w - 180, 25, 160, 135);
    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 1;
    ctx.strokeRect(w - 180, 25, 160, 135);

    ctx.fillStyle = '#0f2b5c';
    ctx.font = 'bold 12px sans-serif';
    ctx.fillText('Trạng thái Khí', w - 170, 45);

    ctx.fillStyle = '#334155';
    ctx.font = '11px sans-serif';
    ctx.fillText(`Áp suất P: ${pAtm} atm`, w - 170, 72);
    ctx.fillText(`Thể tích V: ${vLiters.toFixed(1)} L`, w - 170, 95);
    ctx.fillText(`Nhiệt độ T: ${tKelvin} K`, w - 170, 118);

    const pvConst = (parseFloat(pAtm) * vLiters).toFixed(1);
    ctx.fillStyle = '#0d9488';
    ctx.font = 'bold 11px sans-serif';
    ctx.fillText(`p · V = ${pvConst}`, w - 170, 142);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden my-4">
      <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <h4 className="font-semibold text-physics-dark text-sm sm:text-base">
            {type === 'motion10' && 'Mô phỏng Động học: Chuyển động biến đổi đều'}
            {type === 'newton10' && 'Mô phỏng Động lực học: Định luật II Newton'}
            {type === 'oscillator11' && 'Mô phỏng Dao động điều hòa & Vòng tròn lượng giác'}
            {type === 'ohm11' && 'Mô phỏng Mạch điện: Khảo sát định luật Ohm'}
            {type === 'heat12' && 'Mô phỏng Nhiệt học: Đo nhiệt hóa hơi riêng của nước'}
            {type === 'gas12' && 'Mô phỏng Khí lí tưởng: Nghiệm định luật Boyle – Charles'}
          </h4>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`px-3 py-1 text-xs font-medium rounded-lg text-white transition-colors ${
              isRunning ? 'bg-amber-600 hover:bg-amber-700' : 'bg-emerald-600 hover:bg-emerald-700'
            }`}
          >
            {isRunning ? 'Tạm dừng ⏸' : 'Bắt đầu ▶'}
          </button>
          <button
            onClick={handleReset}
            className="px-3 py-1 text-xs font-medium rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 transition-colors"
          >
            Làm lại ↺
          </button>
        </div>
      </div>

      {/* Canvas Display */}
      <div className="p-3 bg-slate-100 flex justify-center">
        <canvas
          ref={canvasRef}
          width={580}
          height={180}
          className="bg-white rounded-lg shadow-inner max-w-full h-auto border border-slate-300"
        />
      </div>

      {/* Control Sliders Panel */}
      <div className="p-4 bg-white border-t border-slate-200">
        {type === 'motion10' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <div className="flex justify-between font-medium text-slate-700 mb-1">
                <span>Vận tốc đầu v₀:</span>
                <span className="font-bold text-physics-navy">{v0} m/s</span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                step="0.5"
                value={v0}
                onChange={e => setV0(parseFloat(e.target.value))}
                className="w-full accent-physics-navy cursor-pointer"
              />
            </div>
            <div>
              <div className="flex justify-between font-medium text-slate-700 mb-1">
                <span>Gia tốc a:</span>
                <span className="font-bold text-physics-teal">{acc} m/s²</span>
              </div>
              <input
                type="range"
                min="-3"
                max="5"
                step="0.2"
                value={acc}
                onChange={e => setAcc(parseFloat(e.target.value))}
                className="w-full accent-physics-teal cursor-pointer"
              />
            </div>
          </div>
        )}

        {type === 'newton10' && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <div className="flex justify-between font-medium text-slate-700 mb-1">
                <span>Khối lượng m:</span>
                <span className="font-bold text-physics-navy">{mass} kg</span>
              </div>
              <input
                type="range"
                min="1"
                max="6"
                step="0.5"
                value={mass}
                onChange={e => setMass(parseFloat(e.target.value))}
                className="w-full accent-physics-navy cursor-pointer"
              />
            </div>
            <div>
              <div className="flex justify-between font-medium text-slate-700 mb-1">
                <span>Lực kéo F:</span>
                <span className="font-bold text-physics-teal">{force} N</span>
              </div>
              <input
                type="range"
                min="2"
                max="20"
                step="1"
                value={force}
                onChange={e => setForce(parseFloat(e.target.value))}
                className="w-full accent-physics-teal cursor-pointer"
              />
            </div>
            <div>
              <div className="flex justify-between font-medium text-slate-700 mb-1">
                <span>Hệ số ma sát μ:</span>
                <span className="font-bold text-rose-600">{frictionCoeff}</span>
              </div>
              <input
                type="range"
                min="0"
                max="0.4"
                step="0.05"
                value={frictionCoeff}
                onChange={e => setFrictionCoeff(parseFloat(e.target.value))}
                className="w-full accent-rose-600 cursor-pointer"
              />
            </div>
          </div>
        )}

        {type === 'oscillator11' && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <div className="flex justify-between font-medium text-slate-700 mb-1">
                <span>Biên độ A:</span>
                <span className="font-bold text-physics-navy">{amp} cm</span>
              </div>
              <input
                type="range"
                min="2"
                max="8"
                step="0.5"
                value={amp}
                onChange={e => setAmp(parseFloat(e.target.value))}
                className="w-full accent-physics-navy cursor-pointer"
              />
            </div>
            <div>
              <div className="flex justify-between font-medium text-slate-700 mb-1">
                <span>Tần số góc ω:</span>
                <span className="font-bold text-physics-teal">{omega} rad/s</span>
              </div>
              <input
                type="range"
                min="1"
                max="6"
                step="0.5"
                value={omega}
                onChange={e => setOmega(parseFloat(e.target.value))}
                className="w-full accent-physics-teal cursor-pointer"
              />
            </div>
            <div>
              <div className="flex justify-between font-medium text-slate-700 mb-1">
                <span>Pha ban đầu φ:</span>
                <span className="font-bold text-indigo-600">{(phi / Math.PI).toFixed(2)}π rad</span>
              </div>
              <input
                type="range"
                min="-3.14"
                max="3.14"
                step="0.314"
                value={phi}
                onChange={e => setPhi(parseFloat(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer"
              />
            </div>
          </div>
        )}

        {type === 'ohm11' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <div className="flex justify-between font-medium text-slate-700 mb-1">
                <span>Hiệu điện thế U:</span>
                <span className="font-bold text-physics-navy">{voltage} V</span>
              </div>
              <input
                type="range"
                min="0"
                max="24"
                step="1"
                value={voltage}
                onChange={e => setVoltage(parseFloat(e.target.value))}
                className="w-full accent-physics-navy cursor-pointer"
              />
            </div>
            <div>
              <div className="flex justify-between font-medium text-slate-700 mb-1">
                <span>Điện trở R:</span>
                <span className="font-bold text-physics-teal">{resistance} Ω</span>
              </div>
              <input
                type="range"
                min="6"
                max="60"
                step="2"
                value={resistance}
                onChange={e => setResistance(parseFloat(e.target.value))}
                className="w-full accent-physics-teal cursor-pointer"
              />
            </div>
          </div>
        )}

        {type === 'heat12' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <div className="flex justify-between font-medium text-slate-700 mb-1">
                <span>Công suất ấm P:</span>
                <span className="font-bold text-physics-navy">{heaterPower} W</span>
              </div>
              <input
                type="range"
                min="300"
                max="1500"
                step="50"
                value={heaterPower}
                onChange={e => setHeaterPower(parseFloat(e.target.value))}
                className="w-full accent-physics-navy cursor-pointer"
              />
            </div>
            <div>
              <div className="flex justify-between font-medium text-slate-700 mb-1">
                <span>Khối lượng nước ban đầu:</span>
                <span className="font-bold text-physics-teal">{initialWater} g</span>
              </div>
              <input
                type="range"
                min="200"
                max="800"
                step="50"
                value={initialWater}
                onChange={e => setInitialWater(parseFloat(e.target.value))}
                className="w-full accent-physics-teal cursor-pointer"
              />
            </div>
          </div>
        )}

        {type === 'gas12' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <div className="flex justify-between font-medium text-slate-700 mb-1">
                <span>Thể tích V (kéo pittông):</span>
                <span className="font-bold text-physics-navy">{gasVolume.toFixed(1)} L</span>
              </div>
              <input
                type="range"
                min="2"
                max="9"
                step="0.5"
                value={gasVolume}
                onChange={e => setGasVolume(parseFloat(e.target.value))}
                className="w-full accent-physics-navy cursor-pointer"
              />
            </div>
            <div>
              <div className="flex justify-between font-medium text-slate-700 mb-1">
                <span>Nhiệt độ tuyệt đối T:</span>
                <span className="font-bold text-amber-600">{gasTemp} K ({(gasTemp - 273.15).toFixed(0)}°C)</span>
              </div>
              <input
                type="range"
                min="250"
                max="450"
                step="10"
                value={gasTemp}
                onChange={e => setGasTemp(parseInt(e.target.value))}
                className="w-full accent-amber-600 cursor-pointer"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
